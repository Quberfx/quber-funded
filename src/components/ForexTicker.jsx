import { useEffect, useState } from "react";

export default function ForexTicker() {
  const [coins, setCoins] = useState(() => {
    // load last cached prices immediately on page load
    const cached = localStorage.getItem("ticker-cache");
    return cached ? JSON.parse(cached) : [];
  });

  const [error, setError] = useState(false);
  const [stale, setStale] = useState(false);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch(
          "/coingecko/simple/price?ids=bitcoin,ethereum,solana,ripple,cardano,dogecoin&vs_currencies=usd&include_24hr_change=true",
        );

        if (!res.ok) throw new Error("bad response");

        const json = await res.json();

        const formatted = Object.entries(json).map(([key, val]) => ({
          id: key,
          symbol: key.slice(0, 3).toUpperCase(),
          price: val.usd,
          change: val.usd_24h_change,
        }));

        setCoins(formatted);
        setError(false);
        setStale(false);

        // ✅ cache latest good result
        localStorage.setItem("ticker-cache", JSON.stringify(formatted));
      } catch {
        // API failed — keep previous data visible
        if (coins.length) {
          setStale(true); // show delayed notice
        } else {
          setError(true); // only show hard error if no data at all
        }
      }
    }

    fetchPrices();

    const interval = setInterval(fetchPrices, 10000);

    return () => clearInterval(interval);
  }, []);

  function Item({ symbol, price, change }) {
    const negative = change < 0;

    return (
      <div className="flex items-center gap-3 mx-6 whitespace-nowrap">
        <span className="font-medium">
          {symbol}/USD {price?.toLocaleString()}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold
          ${
            negative ? "bg-red-200 text-red-700" : "bg-green-200 text-green-700"
          }`}
        >
          {change?.toFixed(2)}%
        </span>
      </div>
    );
  }

  return (
    <div className="bg-[#061a3a] text-white overflow-hidden relative">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#061a3a] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#061a3a] to-transparent z-10" />

      <div className="py-5">
        {/* HARD ERROR ONLY if no cached data */}
        {error && (
          <div className="text-center text-red-400 text-sm">
            Failed to load market data
          </div>
        )}

        {/* LOADING */}
        {!coins.length && !error && (
          <div className="text-center text-gray-400 text-sm">
            Loading market data...
          </div>
        )}

        {/* SHOW DATA */}
        {!!coins.length && (
          <>
            {/* delayed disclaimer */}
            {stale && (
              <div className="text-center text-yellow-400 text-xs mb-2">
                Market data delayed — retrying update…
              </div>
            )}

            <div className="flex animate-[ticker_40s_linear_infinite] w-max">
              {[...coins, ...coins].map((c, i) => (
                <Item key={i} {...c} />
              ))}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
