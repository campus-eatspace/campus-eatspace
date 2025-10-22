export default function Footer() {
  return (
  <footer className="bg-black text-gray-300 py-4 text-center text-sm rounded-lg border border-gray-800/60">
      <p>
        CampusEats <span className="text-orange-500">From Cafeteria To Crib</span>
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:opacity-80">
          <img src="/src/assets/whatsapp.png" alt="WhatsApp" className="h-5 w-5 inline-block" />
        </a>
        <a href="#" className="hover:opacity-80">
          <img src="/src/assets/twitter.png" alt="X" className="h-5 w-5 inline-block" />
        </a>
        <a href="#" className="hover:opacity-80">
          <img src="/src/assets/linkedin.png" alt="LinkedIn" className="h-5 w-5 inline-block" />
        </a>
      </div>
      <p className="mt-2">All Rights Reserved</p>
    </footer>
  );
}
