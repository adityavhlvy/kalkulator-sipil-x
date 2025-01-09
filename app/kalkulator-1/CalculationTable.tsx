type Result = {
    year: number;
    month: number;
    u10: number;
    tf: string;
    c: string;
    u3600: string;
    Rl: string;
    uw: string;
    uc: string;
    ua: string;
    H: string;
    Tm: string;
};

const convertToCSV = (data: Result[]) => {
    const header = [
        "Month-Year", "u10", "tf", "c", "u3600", "Rl", "uw", "uc", "ua", "H", "Tm"
    ];
    const rows = data.map(row => [
        `${String(row.month).padStart(2, '0')}-${row.year}`,
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

    const csvContent = [header, ...rows].map(e => e.join(",")).join("\n");
    return csvContent;
};

const downloadCSV = (data: Result[]) => {
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

const CalculationTable = ({ results }: { results: Result[] }) => (
    <div>
        <button
            onClick={() => downloadCSV(results)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-700 transition duration-300"
        >
            Download CSV
        </button>

        <table className="w-full mt-4 border-collapse border border-gray-600">
            <thead className="bg-gray-700">
                <tr>
                    <th className="border border-gray-600 px-4 py-2">Month-Year</th>
                    <th className="border border-gray-600 px-4 py-2">u10</th>
                    <th className="border border-gray-600 px-4 py-2">tf</th>
                    <th className="border border-gray-600 px-4 py-2">c</th>
                    <th className="border border-gray-600 px-4 py-2">u3600</th>
                    <th className="border border-gray-600 px-4 py-2">Rl</th>
                    <th className="border border-gray-600 px-4 py-2">uw</th>
                    <th className="border border-gray-600 px-4 py-2">uc</th>
                    <th className="border border-gray-600 px-4 py-2">ua</th>
                    <th className="border border-gray-600 px-4 py-2">H</th>
                    <th className="border border-gray-600 px-4 py-2">Tm</th>
                </tr>
            </thead>
            <tbody>
                {results.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-700 transition duration-200">
                        <td className="border border-gray-600 px-4 py-2">{`${String(row.month).padStart(2, '0')}-${row.year}`}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.u10}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.tf}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.c}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.u3600}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.Rl}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.uw}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.uc}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.ua}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.H}</td>
                        <td className="border border-gray-600 px-4 py-2">{row.Tm}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CalculationTable;