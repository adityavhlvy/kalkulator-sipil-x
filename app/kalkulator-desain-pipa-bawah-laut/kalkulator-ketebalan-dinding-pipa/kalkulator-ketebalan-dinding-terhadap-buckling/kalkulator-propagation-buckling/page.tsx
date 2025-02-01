"use client";

import React, { useState } from 'react';

const Kalkulator332 = () => {
    // State untuk input pengguna
    const [ID, setID] = useState<number | null>(null);
    const [P0max, setP0max] = useState<number | null>(null);
    const [fp, setFp] = useState<number | null>(null);
    const [sigmaY, setSigmaY] = useState<number | null>(null);

    // State untuk hasil perhitungan
    const [tpb, setTpb] = useState<number | null>(null);

    // Fungsi untuk menghitung tpb secara iteratif
    const calculateTpb = (ID: number, P0max: number, fp: number, sigmaY: number) => {
        const tolerance = 1e-6; // Toleransi untuk iterasi
        let tpb = 0; // Tebakan awal
        let prevTpb;
        let iterationCount = 0; // Untuk debugging

        // Hitung faktor
        const factor = P0max / (fp * 24 * sigmaY);

        do {
            prevTpb = tpb;
            tpb = (ID + 2 * tpb) * factor;

            // Debugging: Cetak nilai setiap iterasi
            console.log(`Iterasi ${iterationCount}: tpb = ${tpb}`);
            iterationCount++;
        } while (Math.abs(tpb - prevTpb) > tolerance && iterationCount < 1000); // Batasi iterasi maksimal

        return tpb;
    };

    // Fungsi untuk menghitung
    const handleCalculate = () => {
        if (
            ID !== null &&
            P0max !== null &&
            fp !== null &&
            sigmaY !== null
        ) {
            // Hitung tpb
            const tpbValue = calculateTpb(ID, P0max, fp, sigmaY);
            setTpb(tpbValue);

            // Debugging: Cetak nilai intermediate
            console.log("Nilai Intermediate:");
            console.log("factor:", P0max / (fp * 24 * sigmaY));
            console.log("tpbValue:", tpbValue);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Propagation Buckling</h1>

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

                    {/* Input P0max */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Maximum Pressure, P0max (Pa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setP0max(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input fp */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Fakto Kritis,fp
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setFp(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input sigmaY */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Yield strength, σy (MPa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setSigmaY(parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Tombol Hitung */}
                <button
                    className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
                    onClick={handleCalculate}
                    disabled={
                        ID === null ||
                        P0max === null ||
                        fp === null ||
                        sigmaY === null
                    }
                >
                    Hitung
                </button>

                {/* Hasil Perhitungan */}
                {tpb !== null && (
                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                tpb: <span className="text-blue-400">{tpb.toFixed(5)}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kalkulator332;