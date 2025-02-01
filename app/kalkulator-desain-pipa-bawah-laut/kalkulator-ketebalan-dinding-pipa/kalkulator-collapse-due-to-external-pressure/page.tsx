"use client";

import React, { useState } from 'react';

const Kalkulator31 = () => {
    // State untuk input pengguna
    const [Tcol, setTcol] = useState<number | null>(null);
    const [Hiw, setHiw] = useState<number | null>(null);
    const [OD, setOD] = useState<number | null>(null);
    const [ID, setID] = useState<number | null>(null);
    const [v, setV] = useState<number | null>(null);
    const [dmax, setDmax] = useState<number | null>(null);
    const [sigmaY, setSigmaY] = useState<number | null>(null);
    const [E, setE] = useState<number | null>(null);

    // State untuk hasil perhitungan
    const [Pemax, setPemax] = useState<number | null>(null);
    const [Py, setPy] = useState<number | null>(null);
    const [Pe, setPe] = useState<number | null>(null);
    const [Pcol, setPcol] = useState<number | null>(null);

    // Konstanta
    const rho_w = 1025; // kg/m^3
    const g = 9.81; // m/s^2

    // Fungsi untuk menghitung
    const handleCalculate = () => {
        if (
            Tcol !== null &&
            Hiw !== null &&
            OD !== null &&
            ID !== null &&
            v !== null &&
            dmax !== null &&
            sigmaY !== null &&
            E !== null
        ) {
            // Hitung Pemax
            const PemaxValue = (dmax + Hiw / 2) * rho_w * g;
            setPemax(PemaxValue);

            // Hitung Py
            const PyValue = (2 * sigmaY * Tcol) / (OD + 2 * Tcol);
            setPy(PyValue);

            // Hitung Pe
            const x = Tcol / (ID + 2 * Tcol);
            const PeValue = (2 * E * Math.pow(x, 3)) / (1 - Math.pow(v, 2));
            setPe(PeValue);

            // Hitung Pcol
            const PcolValue = (PyValue * PeValue) / Math.sqrt(Math.pow(PyValue, 2) + Math.pow(PeValue, 2));
            setPcol(PcolValue);

            // Debugging: Cetak nilai intermediate
            console.log("Nilai Intermediate:");
            console.log("x:", x);
            console.log("PyValue:", PyValue);
            console.log("PeValue:", PeValue);
            console.log("PcolValue:", PcolValue);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Collapse due to external pressure</h1>

                {/* Form Input dalam Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input Tcol */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Ketebalan kolaps, Tcol (inch)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setTcol(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Hiw */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Maximum Individual Height, Hiw (m)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setHiw(parseFloat(e.target.value))}
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

                    {/* Input OD */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Diameter luar pipa nominal, D (inch)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setOD(parseFloat(e.target.value))}
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

                    {/* Input v */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Poisson's Ratio, v
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setV(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input dmax */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Diameter maksimum, dmax (m)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setDmax(parseFloat(e.target.value))}
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
                        Tcol === null ||
                        Hiw === null ||
                        OD === null ||
                        ID === null ||
                        v === null ||
                        dmax === null ||
                        sigmaY === null ||
                        E === null
                    }
                >
                    Hitung
                </button>

                {/* Hasil Perhitungan */}
                {Pemax !== null && Py !== null && Pe !== null && Pcol !== null && (
                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                Pemax: <span className="text-blue-400">{Pemax.toFixed(5)} Pa</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                Py: <span className="text-blue-400">{Py.toFixed(5)} Pa</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                Pe: <span className="text-blue-400">{Pe.toFixed(5)} Pa</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                Pcol: <span className="text-blue-400">{Pcol.toFixed(5)} Pa</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kalkulator31;