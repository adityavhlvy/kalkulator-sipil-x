import Image from "next/image";
import Link from "next/link";

interface CardProps {
    href: string; // Link tujuan
    imageSrc: string; // Sumber gambar (sebagai string)
    title: string; // Judul card
    description: string; // Deskripsi card
}

const Card = ({ href, imageSrc, title, description }: CardProps) => {
    return (
        <Link href={href} passHref>
            <div className="p-3 h-72 w-64 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-gray-50">
                <div className="h-full flex flex-col justify-start">
                    {/* Bagian Gambar */}
                    <div className="relative w-full h-36 rounded-lg overflow-hidden">
                        <Image
                            src={imageSrc} // Menggunakan imageSrc sebagai string
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Bagian Teks */}
                    <div className="mt-2">
                        {/* Judul Card */}
                        <h3 className="text-lg font-semibold text-gray-800 text-left">
                            {title}
                        </h3>

                        {/* Deskripsi Card */}
                        <p className="text-sm text-gray-600 text-left mt-1">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;