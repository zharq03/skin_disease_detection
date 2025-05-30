function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-blue-600 min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-white text-left mb-4">Selamat Datang</h2>
          <h3 className="text-2xl font-semibold text-white text-left mb-4">Di skin disease detection</h3>
          <p className="text-lg text-white text-left mb-6">
            Web ini di rancang untuk Mendeteksi Penyakit Kulit yang anda derita <br />
            dengan teknologi AI, anda dapat mengetahui penyait khusunya pada bagian kulit luar anda</p>
          <div className="flex justify-left gap-4">
            <a
              href="/cek-penyakit"
              className="bg-blue-600 text-white py-1 px-8 rounded-full hover:bg-teal-700 transition"
            >
              Cek
            </a>
            <a
              href="/lihat"
              className="bg-white text-blue-600 py-1 px-7 rounded-full border border-teal-600 hover:bg-gray-100 transition"
            >
              Lihat
            </a>
          </div>
        </div>
        <div className="w-72 h-72">
          <img
            src="/images/Frame.png"
            alt="Wajah"
            className="rounded-[20px] object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;