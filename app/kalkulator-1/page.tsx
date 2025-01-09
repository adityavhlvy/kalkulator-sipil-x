"use client";

import React, { useState } from 'react';
import UploadFile from '@/app/kalkulator-1/UploadFile';
import InputFeff from '@/app/kalkulator-1/InputFeff';
import CalculationTable from '@/app/kalkulator-1/CalculationTable';
import LineChart from '@/app/kalkulator-1/LineChart';
import { CalculateFase1 } from '@/app/kalkulator-1/utils/CalculateFase1';

const HindcastingPage = () => {
    const [data, setData] = useState<any[]>([]); // Data hasil upload CSV
    const [feff, setFeff] = useState<number | null>(null); // Nilai Feff dari pengguna
    const [results, setResults] = useState<any[]>([]); // Hasil perhitungan

    const handleCalculate = () => {
        if (data.length > 0 && feff !== null) {
            const calculationResults = CalculateFase1(data, feff);
            setResults(calculationResults);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 p-8 text-white">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                <h1 className="text-3xl font-bold text-blue-400 mb-6">Kalkulator Hindcasting Gelombang</h1>
                <UploadFile setData={setData} />
                <InputFeff setFeff={setFeff} />
                <button
                    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-md hover:shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
                    onClick={handleCalculate}
                    disabled={data.length === 0 || feff === null}
                >
                    Hitung
                </button>
                {results.length > 0 && (
                    <div className="mt-8">
                        <CalculationTable results={results} />
                        <div className="mt-8">
                            <LineChart data={results} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HindcastingPage;