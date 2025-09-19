// OneDrive\Рабочий стол\etutordiplom\src\app\(dashboard)\instructor\earning\page.tsx

import StatCard from "@/app/components/dashboard/instructor/EarningStatCard";
import RevenueChart from "@/app/components/dashboard/instructor/RevenueChart";
import WithdrawSection from "@/app/components/dashboard/instructor/WithdrawSection";
import { DollarSign, Banknote, Landmark, TrendingUp } from "lucide-react";

export default function MyEarningPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<DollarSign size={32} />}
          value="$13,804.00"
          label="Total Revenue"
          bgColor="bg-orange"
        />
        <StatCard
          icon={<Banknote size={32} />}
          value="$16,593.00"
          label="Current Balance"
          bgColor="bg-blue-500"
        />
        <StatCard
          icon={<Landmark size={32} />}
          value="$13,184.00"
          label="Total Withdrawals"
          bgColor="bg-yellow-500"
        />
        <StatCard
          icon={<TrendingUp size={32} />}
          value="$162.00"
          label="Today Revenue"
          bgColor="bg-green-500"
        />
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <RevenueChart />
        </div>
        <div className="lg:col-span-4">
          <WithdrawSection />
        </div>
      </div>
    </div>
  );
}
