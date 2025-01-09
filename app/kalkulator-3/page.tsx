import Link from 'next/link';
import Card from '@/components/Card'; // Pastikan path ini sesuai dengan struktur proyek Anda
import imageExample from '@/public/image.png'; // Ganti dengan gambar yang sesuai

export default function Kalkulator3() {
    // Data untuk setiap kalkulator
    const calculators = [
        {
            href: "kalkulator-3-3/kalkulator-3-3-1",
            imageSrc: imageExample.src,
            title: "Kalkulator 3-1",
            description: "Penjelasan singkat tentang kalkulator 3-3-1.",
        },
        {
            href: "kalkulator-3-3/kalkulator-3-3-2",
            imageSrc: imageExample.src,
            title: "Kalkulator 3-2",
            description: "Penjelasan singkat tentang kalkulator 3-3-2.",
        },
        {
            href: "kalkulator-3-3/kalkulator-3-3-3",
            imageSrc: imageExample.src,
            title: "Kalkulator 3-3",
            description: "Penjelasan singkat tentang kalkulator 3-3-3.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex flex-col items-center justify-center p-6">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center max-w-4xl w-full border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Kalkulator 3</h1>
                <p className="text-blue-300 mb-8 text-lg">
                    Pilih jenis kalkulator yang Anda butuhkan di bawah ini.
                </p>

                {/* Grid untuk Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {calculators.map((calculator, index) => (
                        <Link href={calculator.href} key={index}>
                            <Card
                                key={index}
                                href={calculator.href}
                                imageSrc={calculator.imageSrc}
                                title={calculator.title}
                                description={calculator.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}