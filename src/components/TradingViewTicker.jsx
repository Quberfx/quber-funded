import { useEffect, useRef } from "react";

export default function TradingViewTicker() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clear any existing content
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Create the widget container
    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container__widget";
    containerRef.current?.appendChild(widgetContainer);

    // Create and append the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "OANDA:XAUUSD",
          title: "Gold",
        },
        {
          proName: "OANDA:EURUSD",
          title: "EUR/USD",
        },
        {
          proName: "BINANCE:BTCUSDT",
          title: "BTC/USDT",
        },
        {
          proName: "OANDA:NAS100USD",
          title: "NAS100",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    });

    containerRef.current?.appendChild(script);

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full" style={{ backgroundColor: "#000A1D" }}>
      <div className="tradingview-widget-container" ref={containerRef}>
        {/* TradingView widget will be injected here */}
      </div>
    </div>
  );
}
