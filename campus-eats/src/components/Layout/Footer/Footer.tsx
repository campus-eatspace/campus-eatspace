export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-4 mt-6 text-center text-sm">
      <p>
        CampusEats <span className="text-orange-500">From Cafeteria To Crib</span>
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-white">WhatsApp</a>
        <a href="#" className="hover:text-white">X</a>
        <a href="#" className="hover:text-white">LinkedIn</a>
      </div>
      <p className="mt-2">All Rights Reserved</p>
    </footer>
  );
}
