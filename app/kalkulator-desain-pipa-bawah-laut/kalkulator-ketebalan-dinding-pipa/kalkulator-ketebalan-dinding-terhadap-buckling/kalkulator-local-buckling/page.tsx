"use client";

import React, { useState } from 'react';

const Kalkulator333 = () => {
    // State untuk input pengguna
    const [P_d, setP_d] = useState<number | null>(null);
    const [ID, setID] = useState<number | null>(null);
    const [tib, setTib] = useState<number | null>(null);
    const [P_min, setP_min] = useState<number | null>(null);
    const [E, setE] = useState<number | null>(null);
    const [alpha, setAlpha] = useState<number | null>(null);
    const [T_opr, setT_opr] = useState<number | null>(null);
    const [T_ins, setT_ins] = useState<number | null>(null);
    const [sigma_Y, setSigma_Y] = useState<number | null>(null);
    const [v, setV] = useState<number | null>(null);
    const [Pe_max, setPe_max] = useState<number | null>(null);
    const [eta_xp, setEta_xp] = useState<number | null>(null);
    const [eta_yp, setEta_yp] = useState<number | null>(null);

    // State untuk hasil perhitungan
    const [results, setResults] = useState<Record<string, number> | null>(null);

    // Fungsi untuk menghitung semua rumus
    const handleCalculate = () => {
        if (
            P_d !== null &&
            ID !== null &&
            tib !== null &&
            P_min !== null &&
            E !== null &&
            alpha !== null &&
            T_opr !== null &&
            T_ins !== null &&
            sigma_Y !== null &&
            v !== null &&
            Pe_max !== null &&
            eta_xp !== null &&
            eta_yp !== null
        ) {
            // Hitung semua rumus
            const sigma_end = (P_d * (Math.PI / 4) * ID) / ((Math.PI / 4) * ((ID + 2 * tib) ** 2 - ID ** 2));
            const sigma_poisson = (v * (P_d * ID - P_min * (ID + 2 * tib))) / (2 * tib);
            const sigma_p = sigma_end + sigma_poisson;
            const sigma_t = E * alpha * (T_opr - T_ins);
            const sigma_M = 0.72 * sigma_Y;
            const sigma_N = sigma_p + sigma_t;
            const sigma_x = sigma_M + sigma_N;
            const sigma_xcr_N = sigma_Y * (1 - 0.001 * (((ID + 2 * tib) / tib) - 20));
            const sigma_xcr_M = sigma_Y * (1.35 - 0.0045 * ((ID + 2 * tib) / tib));
            const sigma_xcr = ((sigma_N / sigma_x) * sigma_xcr_N) + ((sigma_M / sigma_x) * sigma_xcr_M);
            const sigma_hs = ((Pe_max - P_d) * (ID + 2 * tib)) / (2 * tib);
            const sigma_hscr = E * ((tib / ((ID + 2 * tib) - tib)) ** 2);
            const sigma_hs_crit = 1 + ((300 / (ID + 2 * tib)) * (sigma_hs / sigma_hscr));
            const wall_thickness_check = ((sigma_x / (eta_xp * sigma_hscr)) ** sigma_hs) + (sigma_hs / (eta_yp * sigma_hscr));

            // Simpan hasil perhitungan
            setResults({
                sigma_end,
                sigma_poisson,
                sigma_p,
                sigma_t,
                sigma_M,
                sigma_N,
                sigma_x,
                sigma_xcr_N,
                sigma_xcr_M,
                sigma_xcr,
                sigma_hs,
                sigma_hscr,
                sigma_hs_crit,
                wall_thickness_check,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Local Buckling</h1>

                {/* Form Input dalam Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input P_d */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Design Pressure, Pd (Pa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setP_d(parseFloat(e.target.value))}
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

                    {/* Input tib */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Initial Buckling Thickness, tib (inch)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setTib(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input P_min */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Minimum Pressure, Pmin (Pa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setP_min(parseFloat(e.target.value))}
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

                    {/* Input alpha */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Koefisien Ekspansi Termal Material, α
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setAlpha(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input T_opr */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Temperature Operational, Topr (°C)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setT_opr(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input T_ins */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Temperature Instalation, Tins (°C)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setT_ins(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input sigma_Y */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Yield strength, σy (MPa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setSigma_Y(parseFloat(e.target.value))}
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

                    {/* Input Pe_max */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Maximum External Pressure, Pe_max (Pa)
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setPe_max(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input eta_xp */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Permissible Usage Factor for Longitudinal Stress, ηxp
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setEta_xp(parseFloat(e.target.value))}
                        />
                    </div>

                    {/* Input eta_yp */}
                    <div>
                        <label className="block text-blue-300 text-sm font-semibold mb-2">
                            Permissible Usage Factor for Hoop Stress, ηyp
                        </label>
                        <input
                            type="number"
                            step="0.001"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            onChange={(e) => setEta_yp(parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                {/* Tombol Hitung */}
                <button
                    className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
                    onClick={handleCalculate}
                    disabled={
                        P_d === null ||
                        ID === null ||
                        tib === null ||
                        P_min === null ||
                        E === null ||
                        alpha === null ||
                        T_opr === null ||
                        T_ins === null ||
                        sigma_Y === null ||
                        v === null ||
                        Pe_max === null ||
                        eta_xp === null ||
                        eta_yp === null
                    }
                >
                    Hitung
                </button>

                {/* Hasil Perhitungan */}
                {results && (
                    <div className="mt-6 space-y-4">
                        {Object.entries(results).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-700 rounded-lg">
                                <p className="text-blue-300 font-semibold">
                                    {key}: <span className="text-blue-400">{value.toFixed(5)}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Kalkulator333;