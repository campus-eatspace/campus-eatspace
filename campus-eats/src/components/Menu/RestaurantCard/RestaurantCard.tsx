interface Props {
  name: string;
}

export default function RestaurantCard({ name }: Props) {
  return (
    <div className="bg-white shadow rounded-lg p-4 text-center font-medium hover:bg-gray-50 cursor-pointer">
      {name}
    </div>
  );
}
