"use client";

import React, { useState } from 'react';

const Kalkulator32 = () => {
    // State untuk input pengguna
    const [Pd, setPd] = useState<number | null>(null);
    const [Pmin, setPmin] = useState<number | null>(null);
    const [ID, setID] = useState<number | null>(null);
    const [fd, setFd] = useState<number | null>(null);
    const [sigmaY, setSigmaY] = useState<number | null>(null);
    const [Tdf, setTdf] = useState<number | null>(null);
    const [CA, setCA] = useState<number | null>(null);

    // State untuk hasil perhitungan
    const [ths, setThs] = useState<number | null>(null);
    const [t1, setT1] = useState<number | null>(null);

    // Fungsi untuk menghitung ths secara iteratif
    const calculateThs = (Pd: number, Pmin: number, ID: number, fd: number, sigmaY: number, Tdf: number, CA: number) => {
        const tolerance = 1e-6; // Toleransi untuk iterasi
        let ths = 0; // Tebakan awal
        let prevThs;

        do {
            prevThs = ths;
            ths = (Pd - Pmin) * ((ID + 2 * ths) / (2 * fd * sigmaY * Tdf));
        } while (Math.abs(ths - prevThs) > tolerance); // Iterasi sampai konvergen

        return ths;
    };

    // Fungsi untuk menghitung
    const handleCalculate = () => {
        if (
            Pd !== null &&
            Pmin !== null &&
            ID !== null &&
            fd !== null &&
            sigmaY !== null &&
            Tdf !== null &&
            CA !== null
        ) {
            // Hitung ths
            const thsValue = calculateThs(Pd, Pmin, ID, fd, sigmaY, Tdf, CA);
            setThs(thsValue);

            // Hitung t1
            const t1Value = thsValue + CA;
            setT1(t1Value);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Perhitungan Ketebalan Dinding Terhadap Hoop Stress</h1>

                {/* Form Input dalam Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input Pd */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Design Pressure, Pd (Pa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setPd(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Pmin */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Minimum Pressure, Pmin (Pa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setPmin(parseFloat(e.target.value))}
                        />
                    </div>

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

                    {/* Input fd */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Design Factor, fd
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setFd(parseFloat(e.target.value))}
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

                    {/* Input Tdf */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Design Factor Thickness, Tdf
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setTdf(parseFloat(e.target.value))}
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
                        Pd === null ||
                        Pmin === null ||
                        ID === null ||
                        fd === null ||
                        sigmaY === null ||
                        Tdf === null ||
                        CA === null
                    }
                >
                    Hitung
                </button>

                {/* Hasil Perhitungan */}
                {ths !== null && t1 !== null && (
                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                ths: <span className="text-blue-400">{ths.toFixed(5)} in</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                t1: <span className="text-blue-400">{t1.toFixed(5)} in</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kalkulator32;