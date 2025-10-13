import StatBox from "../components/statbox";
import "../style/dashboard.css";

// ============= Dashboard Stats Component =============
const DashboardStats: React.FC = () => {
  const stats = [
    { id: 1, title: "Today's Orders" },
    { id: 2, title: "Pending Orders" },
    { id: 3, title: "Menu Items" },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <StatBox key={stat.id} title={stat.title} />
      ))}
    </div>
  );
};

export default DashboardStats;