import Card from "@/components/Card";
import imageExample from "@/public/image.png";

export default function kalkulatorDesainPipaBawahLaut() {
    // Data card (bisa diambil dari API atau didefinisikan manual)
    const cards = [
        {
            href: "kalkulator-desain-pipa-bawah-laut/kalkulator-inside-diameter",
            imageSrc: imageExample.src,
            title: "Kalkulator Inside Diameter",
            description: "Perhitungan untuk mendapatkan data Tinggi dan Periode Gelombang.",
        },
        {
            href: "kalkulator-desain-pipa-bawah-laut/kalkulator-ketebalan-dinding-pipa",
            imageSrc: imageExample.src,
            title: "Kalkulator Ketebalan Dinding Pipa",
            description: "Perhitungan untuk menentukan ukuran atau ketebalan diamter pipa bagian dalam.",
        },
        {
            href: "kalkulator-desain-pipa-bawah-laut/kalkulator-analisis-free-span",
            imageSrc: imageExample.src,
            title: "Kalkulator Analisis Free Span",
            description: "Perhitungan untuk menentukan ukuran atau ketebalan diamter pipa bagian dalam.",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
                    Kalkulator-Sipil-X
                </h1>
                {/* Flexbox container to center the cards */}
                <div className="flex justify-center items-center flex-wrap gap-6">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            href={card.href}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
