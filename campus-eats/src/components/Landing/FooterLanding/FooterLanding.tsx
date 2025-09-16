export const FooterLanding = () => {
  return (
    <footer className="bg-black text-white py-10 text-center">
      <div className="text-2xl font-bold mb-4">CampusEats</div>
      <p className="text-sm">From Cafeteria To Crib</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-orange-400">Facebook</a>
        <a href="#" className="hover:text-orange-400">Twitter</a>
        <a href="#" className="hover:text-orange-400">Instagram</a>
      </div>
      <p className="mt-6 text-xs text-gray-400">© 2025 CampusEats. All rights reserved.</p>
    </footer>
  );
};
