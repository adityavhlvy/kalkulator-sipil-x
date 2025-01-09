"use client";

import React, { useState } from 'react';

const Kalkulator4 = () => {
    // State untuk input pengguna
    const [C_e, setC_e] = useState<number | null>(null);
    const [I, setI] = useState<number | null>(null);
    const [sigma_e, setSigma_e] = useState<number | null>(null);
    const [Ws, setWs] = useState<number | null>(null);
    const [Dtot, setDtot] = useState<number | null>(null);
    const [C1, setC1] = useState<number | null>(null);
    const [Weff, setWeff] = useState<number | null>(null);
    const [EI, setEI] = useState<number | null>(null);
    const [Vr, setVr] = useState<number | null>(null);
    const [Vrc1, setVrc1] = useState<number | null>(null);
    const [Vrc2, setVrc2] = useState<number | null>(null);
    const [US, setUS] = useState<number | null>(null);
    const [UD, setUD] = useState<number | null>(null);

    // State untuk hasil perhitungan
    const [results, setResults] = useState<{
        L_static: number | null;
        L_IL: number | null;
        L_CF_onset: number | null;
        L_CF_peak: number | null;
    }>({
        L_static: null,
        L_IL: null,
        L_CF_onset: null,
        L_CF_peak: null,
    });

    // Fungsi untuk menghitung semua rumus
    const handleCalculate = () => {
        if (
            C_e !== null &&
            I !== null &&
            sigma_e !== null &&
            Ws !== null &&
            Dtot !== null &&
            C1 !== null &&
            Weff !== null &&
            EI !== null &&
            Vr !== null &&
            Vrc1 !== null &&
            Vrc2 !== null &&
            US !== null &&
            UD !== null
        ) {
            // Hitung L_static
            const L_static = Math.sqrt((2 * (C_e * Math.PI) * I * sigma_e) / (Ws * Dtot));

            // Hitung L_IL
            const L_IL = Math.sqrt(
                (C1 / (2 * Math.PI)) * (Math.sqrt((EI) / Weff)) * Dtot * (Vr / (US + UD))
            );

            // Hitung L_CF_onset
            const L_CF_onset = Math.sqrt(
                (C1 / (2 * Math.PI)) * Math.sqrt((EI) / Weff) * Dtot * (Vrc1 / (US + UD))
            );

            // Hitung L_CF_peak
            const L_CF_peak = Math.sqrt(
                (C1 / (2 * Math.PI)) * Math.sqrt((EI) / Weff) * Dtot * (Vrc2 / (US + UD))
            );

            // Simpan hasil perhitungan
            setResults({
                L_static,
                L_IL,
                L_CF_onset,
                L_CF_peak,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Kalkulator 4</h1>

                {/* Form Input dalam Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input C_e */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            C_e
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setC_e(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input I */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            I
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setI(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input sigma_e */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            sigma_e
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setSigma_e(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Ws */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Ws
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setWs(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Dtot */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Dtot
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setDtot(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input C1 */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            C1
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setC1(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Weff */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Weff
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setWeff(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input EI */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            EI
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setEI(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Vr */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Vr
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setVr(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Vrc1 */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Vrc1
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setVrc1(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input Vrc2 */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Vrc2
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setVrc2(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input US */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            US
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setUS(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input UD */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            UD
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setUD(parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Tombol Hitung */}
                <button
                    className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
                    onClick={handleCalculate}
                    disabled={
                        C_e === null ||
                        I === null ||
                        sigma_e === null ||
                        Ws === null ||
                        Dtot === null ||
                        C1 === null ||
                        Weff === null ||
                        EI === null ||
                        Vr === null ||
                        Vrc1 === null ||
                        Vrc2 === null ||
                        US === null ||
                        UD === null
                    }
                >
                    Hitung
                </button>

                {/* Hasil Perhitungan */}
                {results.L_static !== null && (
                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                L_static: <span className="text-blue-400">{results.L_static.toFixed(5)}</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                L_IL: <span className="text-blue-400">{results.L_IL?.toFixed(5)}</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                L_CF_onset: <span className="text-blue-400">{results.L_CF_onset?.toFixed(5)}</span>
                            </p>
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg">
                            <p className="text-blue-300 font-semibold">
                                L_CF_peak: <span className="text-blue-400">{results.L_CF_peak?.toFixed(5)}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kalkulator4;