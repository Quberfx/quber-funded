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

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl border-2 border-blue-400 p-4 md:p-8 overflow-x-auto">
        <table
          className="w-full border-collapse"
          style={{ tableLayout: "fixed" }}
        >
          <colgroup>
            {/* Mobile: ~26% for label, ~18.5% each for 4 plan cols = 100% */}
            {/* Desktop: 25% for label, 18.75% each for 4 plan cols = 100% */}
            <col style={{ width: "26%" }} />
            <col style={{ width: "18.5%" }} />
            <col style={{ width: "18.5%" }} />
            <col style={{ width: "18.5%" }} />
            <col style={{ width: "18.5%" }} />
          </colgroup>
          <tbody>
            {rows.map((row, rowIndex) => {
              const shouldShowBorder =
                rowIndex > 1 && rowIndex !== rows.length - 1;

              return (
                <tr
                  key={rowIndex}
                  className={shouldShowBorder ? "border-b border-gray-200" : ""}
                >
                  {/* Sticky label column — narrower on mobile */}
                  <td
                    className={`py-3 md:py-6 pl-1 pr-1 md:px-4 text-left font-semibold text-gray-900 sticky left-0 bg-white z-10 relative ${
                      row.type === "header" || row.type === "fees"
                        ? "text-xs md:text-2xl"
                        : "text-[9px] md:text-base"
                    }`}
                  >
                    {row.label}
                    {row.subtext && (
                      <div className="text-[7px] md:text-xs text-gray-400 font-normal mt-0.5 md:mt-1 leading-tight">
                        {row.subtext}
                      </div>
                    )}
                  </td>

                  {plans.map((plan, planIndex) => (
                    <td
                      key={planIndex}
                      className="py-3 md:py-6 px-0.5 md:px-4 text-center align-middle"
                    >
                      {row.type === "header" && (
                        <div className="flex flex-col items-center gap-1 md:gap-3">
                          <div className="text-base md:text-4xl font-bold text-gray-900">
                            {plan.account}
                          </div>
                          <button className="bg-[#1D60E5] text-white px-2 md:px-6 py-0.5 md:py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-[8px] md:text-sm whitespace-nowrap">
                            Get Plan
                          </button>
                        </div>
                      )}

                      {row.type === "fees" && (
                        <div className="flex flex-col items-center gap-0.5 md:gap-1">
                          <div className="text-xs md:text-lg font-bold text-gray-900">
                            {plan.fee}
                          </div>
                          <div className="text-[7px] md:text-xs text-[#EB0000] line-through bg-[#FFD4D4] px-1 md:px-3 py-0.5 md:py-1 rounded-full whitespace-nowrap">
                            {plan.originalFee}
                          </div>
                        </div>
                      )}

                      {row.type === "maxLoss" && (
                        <div className="text-[8px] md:text-sm text-gray-700 font-bold leading-tight">
                          {plan.maxLoss}
                        </div>
                      )}

                      {row.type === "dailyLoss" && (
                        <div className="text-[8px] md:text-sm text-gray-700 font-bold leading-tight">
                          {plan.dailyLoss}
                        </div>
                      )}

                      {row.type === "minDays" && (
                        <div className="text-[8px] md:text-sm text-gray-700 font-bold">
                          {plan.minDays}
                        </div>
                      )}

                      {row.type === "payout" && (
                        <div className="text-[8px] md:text-sm text-gray-700 font-bold leading-tight">
                          {plan.payout}
                        </div>
                      )}

                      {row.type === "check" && (
                        <div className="flex justify-center">
                          <svg
                            className="w-3 h-3 md:w-6 md:h-6 text-blue-500"
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
                        <div className="text-[8px] md:text-sm text-gray-700 font-bold">
                          {plan.profitShare}
                        </div>
                      )}

                      {row.type === "minWithdrawal" && (
                        <div className="text-[8px] md:text-sm text-gray-700 font-bold">
                          {plan.minWithdrawal}
                        </div>
                      )}

                      {row.type === "cross" && (
                        <div className="flex justify-center">
                          <svg
                            className="w-3 h-3 md:w-6 md:h-6 text-blue-500"
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
                        <div className="text-[8px] md:text-sm text-gray-700 font-bold">
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
