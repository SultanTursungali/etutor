interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
}

const StatCard = ({ icon, value, label, bgColor }: StatCardProps) => (
  <div
    className={`features-card flex items-center gap-4 p-6 rounded-lg shadow-sm text-white ${bgColor}`}
  >
    <div className="icon">{icon}</div>
    <div className="info">
      <h6 className="text-2xl font-bold">{value}</h6>
      <p className="opacity-90">{label}</p>
    </div>
  </div>
);

export default StatCard;
