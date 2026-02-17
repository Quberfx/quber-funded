export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept",
  );

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { ids, vs_currencies, include_24hr_change } = req.query;

  if (!ids || !vs_currencies) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&include_24hr_change=${include_24hr_change || "false"}`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`CoinGecko API error: ${response.status}`, errorText);
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();

    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    res.status(200).json(data);
  } catch (error) {
    console.error("CoinGecko API Error:", error.message);
    res.status(500).json({
      error: "Failed to fetch cryptocurrency data",
      details: error.message,
    });
  }
}
