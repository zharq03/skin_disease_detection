import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cekpenyakit from './pages/Cekpenyakit';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cek-penyakit" element={<Cekpenyakit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;