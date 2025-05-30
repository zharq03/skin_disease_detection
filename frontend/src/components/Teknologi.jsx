function Teknologi() {
  return (
    <section className="py-12 bg-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-1/2 md:w-1/3">
          <img
            src="/images/Fr.png"
            alt="Teknologi"
            className="rounded-full object-cover w-full h-auto"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-black mb-6">Bagaimana cara kerjanya</h2>
          <p className="text-lg text-black mb-6">
            Untuk mengecek penyakit yang sedang anda derita cukup melakukan 3 hal ini 
          </p>
          <div className="flex flex-col gap-4">
            <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">1. Unggah Foto</h3>
                <p className="text-sm text-gray-700">
                  Ambil atau unggah gambar bagian kulit yang ingin diperiksa.
                </p>
              </div>
              <img
                src="/images/Fr.png"
                alt="Hybrid Approach"
                className="w-16 h-16 rounded"
              />
            </div>
            <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">2. Analisa Otomatis</h3>
                <p className="text-sm text-gray-700">
                  kami akan menganalisa dan mengklasifikasikan penyakit kulit.
                </p>
              </div>
              <img
                src="/images/Fr.png"
                alt="Support Vector Machine"
                className="w-16 h-16 rounded"
              />
            </div>
            <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">3. Lihat Hasil</h3>
                <p className="text-sm text-gray-700">
                  Dapatkan hasil, dan cari saran penanganan awal di internet.
                </p>
              </div>
              <img
                src="/images/Fr.png"
                alt="MobileNet"
                className="w-16 h-16 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teknologi;