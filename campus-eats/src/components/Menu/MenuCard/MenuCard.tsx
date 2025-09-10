interface Props {
  title: string;
  price?: string;
}

export default function MenuCard({ title, price }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{title}</h3>
        {price && <p className="text-sm text-gray-500">{price}</p>}
      </div>
      <button className="bg-orange-500 text-white rounded-full p-2">🛒</button>
    </div>
  );
}
