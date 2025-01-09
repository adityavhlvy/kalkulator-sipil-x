import Card from "@/components/Card";
import imageExample from "@/public/image.png";

export default function Home() {
  // Data card (bisa diambil dari API atau didefinisikan manual)
  const cards = [
    {
      href: "/kalkulator-1",
      imageSrc: imageExample.src,
      title: "Kalkulator Hindcasting Gelombang",
      description: "Penjelasan singkat tentang kalkulator 1.",
    },
    {
      href: "/kalkulator-2",
      imageSrc: imageExample.src,
      title: "Kalkulator Inside Diameter",
      description: "Penjelasan singkat tentang kalkulator 2.",
    },
    {
      href: "/kalkulator-3",
      imageSrc: imageExample.src,
      title: "Kalkulator Ketebalan Dinding Pipa",
      description: "Penjelasan singkat tentang kalkulator 3.",
    },
    {
      href: "/kalkulator-4",
      imageSrc: imageExample.src,
      title: "Kalkulator Analisis Free-Span",
      description: "Penjelasan singkat tentang kalkulator 4.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
          Kalkulator-Sipil-X
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index} // Key unik untuk setiap card
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