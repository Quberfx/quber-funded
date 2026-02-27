export default function PricingTable() {
  const plans = [
    {
      account: "$5k",
      fee: "$144",
      originalFee: "$299",
      maxLoss: "10% ($500)",
      dailyLoss: "5% ($250)",
      minDays: "1",
      payout: "DAY1st & Weekly thereafter",
      profitShare: "Upto 70%",
      minWithdrawal: "ONLY 1%",
      profitLimit: "UNLIMITED",
    },
    {
      account: "$10k",
      fee: "$289",
      originalFee: "$599",
      maxLoss: "10% ($1000)",
      dailyLoss: "5% ($500)",
      minDays: "1",
      payout: "DAY1st & Weekly thereafter",
      profitShare: "Upto 70%",
      minWithdrawal: "ONLY 1%",
      profitLimit: "UNLIMITED",
    },
    {
      account: "$25k",
      fee: "$739",
      originalFee: "$1499",
      maxLoss: "10% ($2500)",
      dailyLoss: "5% ($1,250)",
      minDays: "1",
      payout: "DAY1st & Weekly thereafter",
      profitShare: "Upto 70%",
      minWithdrawal: "ONLY 1%",
      profitLimit: "UNLIMITED",
    },
    {
      account: "$50k",
      fee: "$1489",
      originalFee: "$2999",
      maxLoss: "10% ($5,000)",
      dailyLoss: "5% ($2,500)",
      minDays: "1",
      payout: "DAY1st & Weekly thereafter",
      profitShare: "Upto 70%",
      minWithdrawal: "ONLY 1%",
      profitLimit: "UNLIMITED",
    },
  ];

  const rows = [
    { label: "Accounts", type: "header" },
    { label: "Fees", type: "fees" },
    { label: "Maximum Loss Limit", type: "maxLoss" },
    { label: "Daily Loss Limit", type: "dailyLoss" },
    { label: "MIN Trading Days", type: "minDays" },
    { label: "Payout Cycle", type: "payout" },
    { label: "Daily/Weekend Holding", type: "check" },
    { label: "Profit Sharing", type: "profitShare" },
    { label: "Min Withdrawal", type: "minWithdrawal" },
    { label: "Profit Consistency", type: "cross" },
    { label: "Profit Limit", type: "profitLimit" },
    {
      label: "News Trading",
      type: "check",
      subtext: "Allow 5 min before and 5 min after ( Major News )",
    },
  ];

  // On mobile: 120px label + 120px per plan col = 600px total
  // A ~390px screen shows: 120px label + ~2 full plan cols (240px) = 360px, rest scrolls
  const LABEL_W = 120;
  const PLAN_W = 120;

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl border-2 border-blue-400 p-4 md:p-8">
        {/* 
          KEY: overflow-x:auto must be on a direct wrapper of the table,
          NOT on an ancestor that clips the sticky positioning context.
        */}
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
              {plans.map((_, i) => (
                <col key={i} style={{ width: PLAN_W }} />
              ))}
            </colgroup>
            <tbody>
              {rows.map((row, rowIndex) => {
                const shouldShowBorder =
                  rowIndex > 1 && rowIndex !== rows.length - 1;

                return (
                  <tr
                    key={rowIndex}
                    style={
                      shouldShowBorder
                        ? { borderBottom: "1px solid #e5e7eb" }
                        : {}
                    }
                  >
                    {/* ── Sticky label cell ── */}
                    <td
                      style={{
                        position: "sticky",
                        left: 0,
                        // Solid white background is the ONLY reliable way to mask content scrolling behind
                        backgroundColor: "#ffffff",
                        zIndex: 20,
                        // White box-shadow bleeds a few extra px to cover any sub-pixel gaps
                        boxShadow: "8px 0 0 0 #ffffff",
                        width: LABEL_W,
                        padding: "12px 10px 12px 4px",
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#111827",
                        fontSize:
                          row.type === "header" || row.type === "fees"
                            ? "14px"
                            : "11px",
                        verticalAlign: "middle",
                        // Clip content that might overflow this cell itself
                        overflow: "hidden",
                      }}
                    >
                      {row.label}
                      {row.subtext && (
                        <div
                          style={{
                            fontSize: "9px",
                            color: "#9ca3af",
                            fontWeight: 400,
                            marginTop: 2,
                            lineHeight: 1.3,
                          }}
                        >
                          {row.subtext}
                        </div>
                      )}
                    </td>

                    {/* ── Plan data cells ── */}
                    {plans.map((plan, planIndex) => (
                      <td
                        key={planIndex}
                        style={{
                          padding: "12px 6px",
                          textAlign: "center",
                          verticalAlign: "middle",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        {row.type === "header" && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 8,
                            }}
                          >
                            <div
                              style={{
                                fontSize: 22,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              {plan.account}
                            </div>
                            <a
                              href="https://prop.qubercapital.com/register"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                background: "#1D60E5",
                                color: "white",
                                padding: "4px 12px",
                                borderRadius: 999,
                                border: "none",
                                cursor: "pointer",
                                fontWeight: 500,
                                fontSize: 10,
                                whiteSpace: "nowrap",
                                textDecoration: "none",
                                display: "inline-block",
                              }}
                            >
                              Get Plan
                            </a>
                          </div>
                        )}

                        {row.type === "fees" && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 4,
                            }}
                          >
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#111827",
                              }}
                            >
                              {plan.fee}
                            </div>
                            <div
                              style={{
                                fontSize: 9,
                                color: "#EB0000",
                                textDecoration: "line-through",
                                background: "#FFD4D4",
                                padding: "2px 8px",
                                borderRadius: 999,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {plan.originalFee}
                            </div>
                          </div>
                        )}

                        {row.type === "maxLoss" && (
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#374151",
                            }}
                          >
                            {plan.maxLoss}
                          </span>
                        )}

                        {row.type === "dailyLoss" && (
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#374151",
                            }}
                          >
                            {plan.dailyLoss}
                          </span>
                        )}

                        {row.type === "minDays" && (
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#374151",
                            }}
                          >
                            {plan.minDays}
                          </span>
                        )}

                        {row.type === "payout" && (
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: "#374151",
                              lineHeight: 1.3,
                              display: "block",
                            }}
                          >
                            {plan.payout}
                          </span>
                        )}

                        {row.type === "check" && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}

                        {row.type === "profitShare" && (
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#374151",
                            }}
                          >
                            {plan.profitShare}
                          </span>
                        )}

                        {row.type === "minWithdrawal" && (
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#374151",
                            }}
                          >
                            {plan.minWithdrawal}
                          </span>
                        )}

                        {row.type === "cross" && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}

                        {row.type === "profitLimit" && (
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#374151",
                            }}
                          >
                            {plan.profitLimit}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
