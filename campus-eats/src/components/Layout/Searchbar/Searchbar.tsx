export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-2">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none px-2"
      />
      <button className="text-gray-500 hover:text-orange-500">🔔</button>
    </div>
  );
}
