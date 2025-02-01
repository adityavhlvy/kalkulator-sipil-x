export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-6">
            <div className="max-w-4xl w-full text-center space-y-8">
                <h1 className="text-4xl font-extrabold text-blue-400 mb-4">Tentang Kalkulator-Sipil-X</h1>

                <p className="text-lg text-gray-300 italic max-w-3xl mx-auto mb-8">
                    "Perhitungan yang presisi untuk membangun masa depan yang kokoh. Untuk setiap insinyur sipil, kami menyediakan alat yang membantu."
                </p>

                {/* Deskripsi Aplikasi */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-green-400 mb-3">Apa itu Kalkulator-Sipil-X?</h2>
                    <p className="text-md text-gray-300">
                        Kalkulator-Sipil-X adalah aplikasi web inovatif yang dirancang untuk memudahkan perhitungan teknik sipil secara cepat dan akurat. Dibuat oleh <span className="text-blue-400 font-semibold">Kelompok Keren Banget</span>, aplikasi ini memadukan keahlian teknik sipil dan teknologi untuk memberikan solusi efisien bagi para profesional dan mahasiswa sipil.
                    </p>
                </div>

                {/* Batasan Kalkulator */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-red-400 mb-3">Batasan Kalkulator Ini</h2>
                    <ul className="text-md text-gray-300 list-disc list-inside">
                        <li>🔍 Perhitungan didasarkan pada model standar dan mungkin tidak mencakup semua kondisi lapangan.</li>
                        <li>⚙️ Kalkulator ini cocok untuk perhitungan dasar dan menengah, namun disarankan untuk verifikasi dengan metode lain pada proyek besar.</li>
                        <li>📊 Hasil perhitungan dapat bervariasi tergantung pada data yang dimasukkan.</li>
                    </ul>
                </div>

                {/* Tim Pengembang */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-green-400 mb-3">Tim Pengembang</h2>
                    <p className="text-md text-gray-300 mb-4">
                        <span className="font-semibold text-blue-400">Kelompok Keren Banget</span> adalah tim kreatif yang terdiri dari para ahli di bidang teknik sipil dan ilmu komputer.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-blue-400">Anggota Teknik Sipil</h3>
                            <ul className="space-y-2">
                                <li>Syawaldi Saputra</li>
                                <li>Ucup</li>
                                <li>Amat</li>
                                <li>Yuli</li>
                                <li>Anton</li>
                            </ul>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-green-400">Pengembang Aplikasi</h3>
                            <p>Adit (Ilmu Komputer) - Pengembang utama dan perancang sistem.</p>
                        </div>
                    </div>
                </div>

                {/* Footer / Motivasi */}
                <div className="mt-8">
                    <p className="text-md text-gray-400 italic">
                        "Bangunan yang kokoh dimulai dengan perhitungan yang tepat. Kami hadir untuk membuat perhitungan lebih mudah dan cepat."
                    </p>
                </div>
            </div>
        </div>
    );
}
