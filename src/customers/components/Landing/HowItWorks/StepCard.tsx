interface Props {
  title: string;
  description: string;
  color: string;
}

export const StepCard = ({ title, description, color }: Props) => {
  return (
    <div className={`p-6 rounded-lg text-white text-center ${color}`}>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
