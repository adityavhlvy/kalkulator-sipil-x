"use client";

import React, { useState } from 'react';

const Kalkulator331 = () => {
    // State untuk input pengguna
    const [ID, setID] = useState<number | null>(null);
    const [Pmax, setPmax] = useState<number | null>(null);
    const [fp, setFp] = useState<number | null>(null);
    const [E, setE] = useState<number | null>(null);
    const [CA, setCA] = useState<number | null>(null);

    // State untuk hasil perhitungan
    const [tib, setTib] = useState<number | null>(null);
    const [t2, setT2] = useState<number | null>(null);

    // Fungsi untuk menghitung tib secara iteratif
    const calculateTib = (ID: number, Pmax: number, fp: number, E: number) => {
        const tolerance = 1e-6; // Toleransi untuk iterasi
        let tib = 0; // Tebakan awal
        let prevTib;
        let iterationCount = 0; // Untuk debugging

        // Hitung faktor
        const factor = Math.pow(Pmax / (fp * 24 * E), 0.484);

        do {
            prevTib = tib;
            tib = (ID + 2 * tib) * factor;

            // Debugging: Cetak nilai setiap iterasi
            console.log(`Iterasi ${iterationCount}: tib = ${tib}`);
            iterationCount++;
        } while (Math.abs(tib - prevTib) > tolerance && iterationCount < 1000); // Batasi iterasi maksimal

        return tib;
    };

    // Fungsi untuk menghitung
    const handleCalculate = () => {
        if (
            ID !== null &&
            Pmax !== null &&
            fp !== null &&
            E !== null &&
            CA !== null
        ) {
            // Hitung tib
            const tibValue = calculateTib(ID, Pmax, fp, E);
            setTib(tibValue);

            // Hitung t2
            const t2Value = tibValue + CA;
            setT2(t2Value);

            // Debugging: Cetak nilai intermediate
            console.log("Nilai Intermediate:");
            console.log("factor:", Math.pow(Pmax / (fp * 24 * E), 0.484));
            console.log("tibValue:", tibValue);
            console.log("t2Value:", t2Value);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Perhitungan Initiation Buckling</h1>

                {/* Form Input dalam Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input ID */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Diameter dalam pipa, ID (inch)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setID(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Pmax */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Maximum Pressure, Pmax (Pa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setPmax(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input fp */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Fakto Kritis, fp
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setFp(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input E */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Young Modulus, E (MPa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setE(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input CA */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Corrosion Allowance, CA (inch)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setCA(parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Tombol Hitung */}
                <button
                    className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
                    onClick={handleCalculate}
                    disabled={
                        ID === null ||
                        Pmax === null ||
                        fp === null ||
                        E === null ||
                        CA === null
                    }
                >
                    Hitung
                </button>

                {/* Hasil Perhitungan */}
                {tib !== null && t2 !== null && (
                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                tib: <span className="text-blue-400">{tib.toFixed(3)}</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                t2: <span className="text-blue-400">{t2.toFixed(3)}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kalkulator331;