interface Props {
  title: string;
  description: string;
}

export const FeatureCard = ({ title, description }: Props) => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};
