import React from 'react';

// Fungsi untuk mengonversi data ke format CSV
const convertToCSV = (data: any[]) => {
    const header = [
        "Month-Year", "u10", "tf", "c", "u3600", "Rl", "uw", "uc", "ua", "H", "Tm"
    ];
    const rows = data.map(row => [
        `${row.month.toString().padStart(2, '0')}-${row.year}`,
        row.u10,
        row.tf,
        row.c,
        row.u3600,
        row.Rl,
        row.uw,
        row.uc,
        row.ua,
        row.H,
        row.Tm
    ]);

    // Gabungkan header dan rows
    const csvContent = [header, ...rows].map(e => e.join(",")).join("\n");
    return csvContent;
};

// Fungsi untuk memulai unduhan CSV
const downloadCSV = (data: any[]) => {
    const csvContent = convertToCSV(data);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "hasil_perhitungan.csv");
        link.click();
    }
};

const CalculationTable = ({ results }: { results: any[] }) => (
    <div>
        {/* Tombol untuk mengunduh CSV */}
        <button
            onClick={() => downloadCSV(results)}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
            Download CSV
        </button>

        <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Month-Year</th>
                    <th className="border border-gray-300 px-4 py-2">u10</th>
                    <th className="border border-gray-300 px-4 py-2">tf</th>
                    <th className="border border-gray-300 px-4 py-2">c</th>
                    <th className="border border-gray-300 px-4 py-2">u3600</th>
                    <th className="border border-gray-300 px-4 py-2">Rl</th>
                    <th className="border border-gray-300 px-4 py-2">uw</th>
                    <th className="border border-gray-300 px-4 py-2">uc</th>
                    <th className="border border-gray-300 px-4 py-2">ua</th>
                    <th className="border border-gray-300 px-4 py-2">H</th>
                    <th className="border border-gray-300 px-4 py-2">Tm</th>
                </tr>
            </thead>
            <tbody>
                {results.map((row, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">
                            {`${row.month.toString().padStart(2, '0')}-${row.year}`}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{row.u10}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.tf}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.c}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.u3600}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.Rl}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.uw}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.uc}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.ua}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.H}</td>
                        <td className="border border-gray-300 px-4 py-2">{row.Tm}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CalculationTable;