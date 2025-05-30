import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-600 to-blue-200 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">skin disease detection</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Beranda</Link>
          <Link to="/cek-penyakit" className="hover:underline">Cek Penyakit</Link>

        </div>
      </nav>
    </header>
  );
}

export default Header;