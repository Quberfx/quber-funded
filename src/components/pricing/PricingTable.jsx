export default function PricingTable() {
  const plans = [
    {
      account: "$5k",
      fee: "$144.99",
      originalFee: "$299.99",
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
      fee: "$289.99",
      originalFee: "$599.99",
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
      fee: "$739.99",
      originalFee: "$1499.99",
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
      fee: "$1489.99",
      originalFee: "$2999.99",
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
      subtext: "(Restrictions 5 + 5 min Major News )",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl border-2 border-blue-400 p-8 overflow-x-auto">
        <table
          className="w-full border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <colgroup>
            <col style={{ width: "25%" }} />
            <col style={{ width: "18.75%" }} />
            <col style={{ width: "18.75%" }} />
            <col style={{ width: "18.75%" }} />
            <col style={{ width: "18.75%" }} />
          </colgroup>
          <tbody>
            {rows.map((row, rowIndex) => {
              // No border for "Accounts" (index 0) and "Fees" (index 1)
              const shouldShowBorder =
                rowIndex > 1 && rowIndex !== rows.length - 1;

              return (
                <tr
                  key={rowIndex}
                  className={`${
                    shouldShowBorder ? "border-b border-gray-200" : ""
                  }`}
                >
                  {/* Row Label */}
                  <td
                    className={`py-6 px-4 text-left font-semibold text-gray-900 ${row.type === "header" || row.type === "fees" ? "text-2xl" : ""}`}
                  >
                    {row.label}
                    {row.subtext && (
                      <div className="text-xs text-gray-400 font-normal mt-1">
                        {row.subtext}
                      </div>
                    )}
                  </td>

                  {/* Plan Columns */}
                  {plans.map((plan, planIndex) => (
                    <td
                      key={planIndex}
                      className="py-6 px-4 text-center align-middle"
                    >
                      {row.type === "header" && (
                        <div className="flex flex-col items-center gap-3">
                          <div className="text-4xl font-bold text-gray-900">
                            {plan.account}
                          </div>
                          <button className="bg-[#1D60E5] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm">
                            Get Plan
                          </button>
                        </div>
                      )}

                      {row.type === "fees" && (
                        <div className="flex flex-col items-center gap-1">
                          <div className="text-lg font-bold text-gray-900">
                            {plan.fee}
                          </div>
                          <div className="text-xs text-[#EB0000] line-through bg-[#FFD4D4] px-3 py-1 rounded-full">
                            Fee: {plan.originalFee}
                          </div>
                        </div>
                      )}

                      {row.type === "maxLoss" && (
                        <div className="text-sm text-gray-700 font-bold">
                          {plan.maxLoss}
                        </div>
                      )}

                      {row.type === "dailyLoss" && (
                        <div className="text-sm text-gray-700 font-bold">
                          {plan.dailyLoss}
                        </div>
                      )}

                      {row.type === "minDays" && (
                        <div className="text-sm text-gray-700 font-bold">
                          {plan.minDays}
                        </div>
                      )}

                      {row.type === "payout" && (
                        <div className="text-sm text-gray-700 font-bold">
                          {plan.payout}
                        </div>
                      )}

                      {row.type === "check" && (
                        <div className="flex justify-center">
                          <svg
                            className="w-6 h-6 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}

                      {row.type === "profitShare" && (
                        <div className="text-sm text-gray-700 font-bold">
                          {plan.profitShare}
                        </div>
                      )}

                      {row.type === "minWithdrawal" && (
                        <div className="text-sm text-gray-700 font-bold">
                          {plan.minWithdrawal}
                        </div>
                      )}

                      {row.type === "cross" && (
                        <div className="flex justify-center">
                          <svg
                            className="w-6 h-6 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      )}

                      {row.type === "profitLimit" && (
                        <div className="text-sm text-gray-700 font-bold">
                          {plan.profitLimit}
                        </div>
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
  );
}
