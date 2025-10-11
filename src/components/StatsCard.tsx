interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  color?: string;
}

export default function StatsCard({ value, label, icon, color = 'ada-pink' }: StatsCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:border-ada-pink/50 transition-all duration-300">
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}
      <div className={`text-4xl font-bold text-${color} mb-2`}>{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}

