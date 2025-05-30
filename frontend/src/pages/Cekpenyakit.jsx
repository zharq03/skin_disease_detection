import { useState } from 'react';

function Cekpenyakit() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult('');
      setError('');
    }
  };

  const handlePredict = async () => {
    if (!image) {
      setError('Pilih gambar terlebih dahulu');
      return;
    }

    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    formData.append('image', fileInput.files[0]);
// tempat Backendnya atau tempat modulnya 
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setResult('');
      } else {
        setResult(data.prediction);
        setError('');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat memproses gambar');
      setResult('');
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-12 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Mulai Pemeriksaan Sekarang</h2>
        <p className="text-lg text-gray-600 mb-6">
          Foto akan diproses secara aman dan hasilnya ditampilkan dalam hitungan detik.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 w-full text-gray-600"
          />
          {image && (
            <img src={image} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />
          )}
          <button
            onClick={handlePredict}
            className="w-full bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Cek
          </button>
          {result && (
            <p className="mt-4 text-lg text-gray-800">
              Penyakit anda: <strong>{result}</strong>
            </p>
          )}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default Cekpenyakit;