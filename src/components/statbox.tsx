import "../style/dashboard.css";

// ============= StatBox Component =============
interface StatBoxProps {
  title: string;
  className?: string;
}

const StatBox: React.FC<StatBoxProps> = ({ title, className = '' }) => {
  return (
    <div className={`stat-box ${className}`}>
      <h3 className="stat-title">{title}</h3>
    </div>
  );
};

export default StatBox;