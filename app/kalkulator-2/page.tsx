"use client";

import React, { useState } from 'react';

const Kalkulator2 = () => {
    // State untuk input pengguna
    const [Qb, setQb] = useState<number | null>(null);
    const [Pb, setPb] = useState<number | null>(null);
    const [Tb, setTb] = useState<number | null>(null);
    const [G, setG] = useState<number | null>(null);
    const [L, setL] = useState<number | null>(null);
    const [Tave, setTave] = useState<number | null>(null);
    const [Zave, setZave] = useState<number | null>(null);
    const [P1, setP1] = useState<number | null>(null);
    const [P2, setP2] = useState<number | null>(null);
    const [E, setE] = useState<number | null>(null);

    // State untuk hasil perhitungan
    const [D, setD] = useState<number | null>(null);

    // Fungsi untuk menghitung D
    const calculateD = (
        Qb: number,
        Pb: number,
        Tb: number,
        G: number,
        L: number,
        Tave: number,
        Zave: number,
        P1: number,
        P2: number,
        E: number
    ) => {
        const part1 = (Qb / 435.83) * Math.pow(Pb / Tb, 1.0788);
        const numerator = Math.pow(G, 0.8539) * L * Tave * Zave;
        const denominator = Math.pow(P1, 2) - Math.pow(P2, 2) - E;
        const part2 = Math.pow(numerator / denominator, 0.5394);
        const DValue = Math.pow(part1 * part2, 1 / 2.6182);
        return DValue;
    };

    // Fungsi untuk menghitung
    const handleCalculate = () => {
        if (
            Qb !== null &&
            Pb !== null &&
            Tb !== null &&
            G !== null &&
            L !== null &&
            Tave !== null &&
            Zave !== null &&
            P1 !== null &&
            P2 !== null &&
            E !== null
        ) {
            const DValue = calculateD(Qb, Pb, Tb, G, L, Tave, Zave, P1, P2, E);
            setD(DValue);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Kalkulator 3-2</h1>

                {/* Form Input dalam Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input Qb */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Qb
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setQb(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Pb */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Pb
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setPb(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Tb */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Tb
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setTb(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input G */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            G
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setG(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input L */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            L
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setL(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Tave */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Tave
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setTave(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Zave */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Zave
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setZave(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input P1 */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            P1
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setP1(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input P2 */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            P2
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setP2(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input E */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            E
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setE(parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Tombol Hitung */}
                <button
                    className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
                    onClick={handleCalculate}
                    disabled={
                        Qb === null ||
                        Pb === null ||
                        Tb === null ||
                        G === null ||
                        L === null ||
                        Tave === null ||
                        Zave === null ||
                        P1 === null ||
                        P2 === null ||
                        E === null
                    }
                >
                    Hitung
                </button>

                {/* Hasil Perhitungan */}
                {D !== null && (
                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                D: <span className="text-blue-400">{D.toFixed(5)} in</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kalkulator2;