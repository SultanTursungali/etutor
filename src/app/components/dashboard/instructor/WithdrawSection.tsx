"use client";
import { MoreVertical } from "lucide-react";

const WithdrawHistoryItem = ({
  date,
  method,
  amount,
  status,
  statusColor,
}: {
  date: string;
  method: string;
  amount: string;
  status: string;
  statusColor: string;
}) => (
  <tr className="border-b">
    <td className="py-4 px-2 text-sm text-secondary">{date}</td>
    <td className="py-4 px-2 text-sm text-secondary">{method}</td>
    <td className="py-4 px-2 text-sm text-secondary">{amount}</td>
    <td className={`py-4 px-2 text-sm font-semibold ${statusColor}`}>
      <div className="flex items-center justify-between">
        {status}
        <div className="relative">
          <button
            className="p-1 rounded-full hover:bg-gray-200"
            onClick={(e) =>
              e.currentTarget.nextElementSibling?.classList.toggle("hidden")
            }
          >
            <MoreVertical size={16} />
          </button>
          <ul className="dropdown-menu absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-10 hidden">
            <li>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                href="#"
              >
                Cancel Withdraw
              </a>
            </li>
          </ul>
        </div>
      </div>
    </td>
  </tr>
);

const WithdrawSection = () => {
  return (
    <div className="card card-activity bg-white rounded-lg shadow-sm h-full flex flex-col">
      <div className="card-header p-6 border-b">
        <h2 className="card-title text-xl font-bold">Withdraw your money</h2>
      </div>
      <div className="card-body p-6 flex-grow">
        <div className="mb-6">
          <h5 className="font-semibold mb-2">Payment method:</h5>
          <div className="p-4 border rounded-md text-sm text-secondary">
            Payment methods and balance will be shown here.
          </div>
        </div>
        <div className="mb-4">
          <h5 className="font-semibold">Withdrawal History</h5>
        </div>
        <div className="withdraw-history-table overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-2 font-semibold text-sm text-secondary">
                  Date
                </th>
                <th className="py-2 px-2 font-semibold text-sm text-secondary">
                  Method
                </th>
                <th className="py-2 px-2 font-semibold text-sm text-secondary">
                  Amount
                </th>
                <th className="py-2 px-2 font-semibold text-sm text-secondary">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <WithdrawHistoryItem
                date="21 Sep, 2021"
                method="Mastercard"
                amount="$250.00"
                status="Pending"
                statusColor="text-yellow-500"
              />
              <WithdrawHistoryItem
                date="19 Sep, 2021"
                method="Visa"
                amount="$150.00"
                status="Completed"
                statusColor="text-green-500"
              />
              <WithdrawHistoryItem
                date="15 Sep, 2021"
                method="Visa"
                amount="$300.00"
                status="Canceled"
                statusColor="text-red-500"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawSection;
