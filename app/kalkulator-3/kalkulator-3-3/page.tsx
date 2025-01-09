import Link from 'next/link';

export default function Kalkulator3() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
            <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-2xl w-full border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Kalkulator 3-3</h1>
                <p className="text-gray-600 mb-8 text-lg">
                    Pilih jenis kalkulator yang Anda butuhkan di bawah ini.
                </p>
                <ul className="space-y-4">
                    <li>
                        <Link
                            href="/kalkulator-3/kalkulator-3-3/kalkulator-3-3-1"
                            className="block bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
                        >
                            Kalkulator 3-3-1
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/kalkulator-3/kalkulator-3-3/kalkulator-3-3-2"
                            className="block bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
                        >
                            Kalkulator 3-3-2
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/kalkulator-3/kalkulator-3-3/kalkulator-3-3-3"
                            className="block bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg"
                        >
                            Kalkulator 3-3-3
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}