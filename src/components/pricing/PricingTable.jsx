import { useState, useEffect, useRef } from "react";

const INSTANT_ACCOUNT = [
  { account: "$2K",   fee: "$59",   originalFee: "$119",  maxLoss: "6%", dailyLoss: "3%", payout: "Every 7 Days", profitShare: "70%", scalping: "Allowed", weekendHolding: "Allowed", profitLimit: "Unlimited", profitConsistency: "Not Required", ipRule: "No" },
  { account: "$5K",   fee: "$129",  originalFee: "$299",  maxLoss: "6%", dailyLoss: "3%", payout: "Every 7 Days", profitShare: "70%", scalping: "Allowed", weekendHolding: "Allowed", profitLimit: "Unlimited", profitConsistency: "Not Required", ipRule: "No" },
  { account: "$10K",  fee: "$229",  originalFee: "$499",  maxLoss: "6%", dailyLoss: "3%", payout: "Every 7 Days", profitShare: "70%", scalping: "Allowed", weekendHolding: "Allowed", profitLimit: "Unlimited", profitConsistency: "Not Required", ipRule: "No" },
  { account: "$25K",  fee: "$699",  originalFee: "$1499", maxLoss: "6%", dailyLoss: "3%", payout: "Every 7 Days", profitShare: "70%", scalping: "Allowed", weekendHolding: "Allowed", profitLimit: "Unlimited", profitConsistency: "Not Required", ipRule: "No" },
  { account: "$50K",  fee: "$1599", originalFee: "$2999", maxLoss: "6%", dailyLoss: "3%", payout: "Every 7 Days", profitShare: "70%", scalping: "Allowed", weekendHolding: "Allowed", profitLimit: "Unlimited", profitConsistency: "Not Required", ipRule: "No" },
  { account: "$100K", fee: "$3799", originalFee: "$5999", maxLoss: "6%", dailyLoss: "3%", payout: "Every 7 Days", profitShare: "70%", scalping: "Allowed", weekendHolding: "Allowed", profitLimit: "Unlimited", profitConsistency: "Not Required", ipRule: "No" },
];

const rows = [
  { label: "Account Size",          type: "header" },
  { label: "Fees",                  type: "fees" },
  { label: "Max Loss Limit",        type: "maxLoss" },
  { label: "Daily Loss Limit",      type: "dailyLoss" },
  { label: "Payouts",               type: "payout" },
  { label: "Profit Sharing",        type: "profitShare" },
  { label: "Scalping",              type: "scalping" },
  { label: "Daily/Weekend Holding", type: "weekendHolding" },
  { label: "Profit Limit",          type: "profitLimit" },
  { label: "Profit Consistency",    type: "profitConsistency" },
  { label: "News Trading",          type: "newsTrading", subtext: "5 min before & 5 min after (Major News)" },
  { label: "IP Rule",               type: "ipRule" },
  { label: "Delayed Arbitrage, Hedging", type: "notAllowed" },
];

const LABEL_W = 130;
const PLAN_W  = 110;

// Splits a string like "$1,599" into segments: [{ text:"$", isNum:false }, { text:"1599", isNum:true }]
function parseSegments(str) {
  const segments = [];
  let current = "";
  let inNum = false;
  for (const ch of str) {
    const isDigit = ch >= "0" && ch <= "9";
    if (isDigit !== inNum) {
      if (current) segments.push({ text: current, isNum: inNum });
      current = ch;
      inNum = isDigit;
    } else {
      current += ch;
    }
  }
  if (current) segments.push({ text: current, isNum: inNum });
  return segments;
}

// Animates a single number string rolling up/down
function RollingNumber({ value, fontSize = 11, fontWeight = 700, color = "#374151", direction = "up" }) {
  const [displayed, setDisplayed] = useState(value);
  const [prev, setPrev] = useState(value);
  const [animKey, setAnimKey] = useState(0);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    if (value === displayed) return;
    setPrev(displayed);
    setAnimKey(k => k + 1);
    // slight delay so prev renders first
    const t = setTimeout(() => setDisplayed(value), 20);
    return () => clearTimeout(t);
  }, [value]); // eslint-disable-line

  const segments = parseSegments(displayed);
  const prevSegments = parseSegments(prev);

  const slideOut = direction === "up" ? "translateY(-100%)" : "translateY(100%)";
  const slideIn  = direction === "up" ? "translateY(100%)"  : "translateY(-100%)";

  return (
    <span style={{ display: "inline-flex", overflow: "hidden", fontSize, fontWeight, color, lineHeight: 1.4 }}>
      {segments.map((seg, i) => {
        const prevSeg = prevSegments[i];
        const changed = prevSeg?.text !== seg.text;
        return (
          <span key={i} style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
            {/* outgoing */}
            {changed && (
              <span
                key={`out-${animKey}`}
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  animation: `rollOut 0.32s cubic-bezier(0.4,0,0.2,1) forwards`,
                  ["--slide-out"]: slideOut,
                }}
              >
                {prevSeg?.text ?? ""}
              </span>
            )}
            {/* incoming */}
            <span
              key={`in-${animKey}-${seg.text}`}
              style={changed ? {
                display: "inline-block",
                animation: `rollIn 0.32s cubic-bezier(0.4,0,0.2,1) forwards`,
                ["--slide-in"]: slideIn,
              } : {}}
            >
              {seg.text}
            </span>
          </span>
        );
      })}
      <style>{`
        @keyframes rollOut {
          from { transform: translateY(0); opacity: 1; }
          to   { transform: var(--slide-out); opacity: 0; }
        }
        @keyframes rollIn {
          from { transform: var(--slide-in); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </span>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="#3b82f6" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function PricingTable() {
  const plans = INSTANT_ACCOUNT;
  const direction = "up";

  return (
    <div className="w-full">
      {/* Account Label */}
      <div className="flex justify-center mb-8">
        <div
          className="relative inline-flex rounded-full px-10 py-3 text-sm font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #1D60E5 0%, #3b82f6 100%)",
            boxShadow: "0 4px 14px rgba(29,96,229,0.35)",
          }}
        >
          Instant Account
        </div>
      </div>

      {/* Responsive font scaling */}
      <style>{`
        .pt-label       { font-size: 14px; }
        .pt-label-sm    { font-size: 11px; }
        .pt-label-xs    { font-size: 9px; }
        .pt-account     { font-size: 22px; }
        .pt-fee         { font-size: 14px; }
        .pt-fee-orig    { font-size: 9px; }
        .pt-cell        { font-size: 11px; }
        .pt-cell-sm     { font-size: 10px; }
        .pt-get-plan    { font-size: 10px; }
        @media (max-width: 480px) {
          .pt-label     { font-size: 11px; }
          .pt-label-sm  { font-size: 9px; }
          .pt-label-xs  { font-size: 8px; }
          .pt-account   { font-size: 14px; }
          .pt-fee       { font-size: 11px; }
          .pt-fee-orig  { font-size: 8px; }
          .pt-cell      { font-size: 9px; }
          .pt-cell-sm   { font-size: 8px; }
          .pt-get-plan  { font-size: 8px; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .pt-label     { font-size: 12px; }
          .pt-label-sm  { font-size: 10px; }
          .pt-account   { font-size: 17px; }
          .pt-fee       { font-size: 12px; }
          .pt-cell      { font-size: 10px; }
          .pt-cell-sm   { font-size: 9px; }
        }
      `}</style>

      {/* Table */}
      <div className="bg-white rounded-3xl border-2 border-blue-400 p-4 md:p-8">
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              borderCollapse: "collapse",
              tableLayout: "fixed",
              width: "100%",
              minWidth: `${LABEL_W + PLAN_W * plans.length}px`,
            }}
          >
            <colgroup>
              <col style={{ width: LABEL_W }} />
              {plans.map((_, i) => <col key={i} style={{ width: PLAN_W }} />)}
            </colgroup>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={rowIndex > 0 && rowIndex !== rows.length - 1 ? { borderBottom: "1px solid #e5e7eb" } : {}}
                >
                  {/* Sticky label — always fixed */}
                  <td
                    className={row.type === "header" || row.type === "fees" ? "pt-label" : "pt-label-sm"}
                    style={{
                      position: "sticky", left: 0,
                      backgroundColor: "#ffffff", zIndex: 20,
                      boxShadow: "8px 0 0 0 #ffffff",
                      width: LABEL_W, padding: "12px 10px 12px 4px",
                      textAlign: "left", fontWeight: 600,
                      color: row.type === "header" ? "#1D60E5" : "#111827",
                      verticalAlign: "middle", overflow: "hidden",
                    }}
                  >
                    {row.label}
                    {row.subtext && (
                      <div className="pt-label-xs" style={{ color: "#9ca3af", fontWeight: 400, marginTop: 2, lineHeight: 1.3 }}>
                        {row.subtext}
                      </div>
                    )}
                  </td>

                  {/* Plan cells */}
                  {plans.map((plan, planIndex) => (
                    <td
                      key={planIndex}
                      style={{ padding: "12px 6px", textAlign: "center", verticalAlign: "middle", backgroundColor: "#ffffff" }}
                    >
                      {/* Account size — fixed, no animation */}
                      {row.type === "header" && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                          <div className="pt-account" style={{ fontWeight: 700, color: "#111827" }}>{plan.account}</div>
                          <a
                            href="https://prop.qubercapital.com/register"
                            target="_blank" rel="noopener noreferrer"
                            className="pt-get-plan"
                            style={{
                              background: "#1D60E5", color: "white", padding: "4px 12px",
                              borderRadius: 999, fontWeight: 500,
                              whiteSpace: "nowrap", textDecoration: "none", display: "inline-block",
                            }}
                          >
                            Get Plan
                          </a>
                        </div>
                      )}

                      {row.type === "fees" && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                          <RollingNumber value={plan.fee} fontSize={14} fontWeight={700} color="#111827" direction={direction} />
                          <div className="pt-fee-orig" style={{
                            color: "#EB0000", textDecoration: "line-through",
                            background: "#FFD4D4", padding: "2px 8px", borderRadius: 999, whiteSpace: "nowrap",
                          }}>
                            <RollingNumber value={plan.originalFee} fontSize={9} fontWeight={600} color="#EB0000" direction={direction} />
                          </div>
                        </div>
                      )}

                      {row.type === "maxLoss" && (
                        <RollingNumber value={plan.maxLoss} fontSize={11} direction={direction} />
                      )}
                      {row.type === "dailyLoss" && (
                        <RollingNumber value={plan.dailyLoss} fontSize={11} direction={direction} />
                      )}
                      {row.type === "payout" && (
                        <span className="pt-cell-sm" style={{ fontWeight: 700, color: "#374151", lineHeight: 1.3, display: "block" }}>
                          {plan.payout}
                        </span>
                      )}
                      {row.type === "profitShare" && (
                        <RollingNumber value={plan.profitShare} fontSize={11} direction={direction} />
                      )}
                      {row.type === "scalping" && (
                        <span className="pt-cell" style={{ fontWeight: 700, color: "#16a34a" }}>{plan.scalping}</span>
                      )}
                      {row.type === "weekendHolding" && (
                        <span className="pt-cell" style={{ fontWeight: 700, color: "#16a34a" }}>{plan.weekendHolding}</span>
                      )}
                      {row.type === "profitLimit" && (
                        <span className="pt-cell" style={{ fontWeight: 700, color: "#374151" }}>{plan.profitLimit}</span>
                      )}
                      {row.type === "profitConsistency" && (
                        <span className="pt-cell-sm" style={{ fontWeight: 700, color: "#374151" }}>{plan.profitConsistency}</span>
                      )}
                      {row.type === "newsTrading" && (
                        <div style={{ display: "flex", justifyContent: "center" }}><CheckIcon /></div>
                      )}
                      {row.type === "ipRule" && (
                        <span className="pt-cell" style={{ fontWeight: 700, color: "#374151" }}>{plan.ipRule}</span>
                      )}
                      {row.type === "notAllowed" && (
                        <span className="pt-cell-sm" style={{ fontWeight: 600, color: "#dc2626" }}>Not Allowed</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
