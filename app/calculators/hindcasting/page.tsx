'use client';

import React, { useState } from 'react';
import UploadFile from '@/app/calculators/hindcasting/UploadFile';
import InputFeff from '@/app/calculators/hindcasting/InputFeff';
import CalculationTable from '@/app/calculators/hindcasting/CalculationTable';
import LineChart from '@/app/calculators/hindcasting/LineChart';
import { CalculateFase1 } from '@/app/calculators/hindcasting/utils/CalculateFase1';

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
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Kalkulator Hindcasting Gelombang</h1>
            <UploadFile setData={setData} />
            <InputFeff setFeff={setFeff} />
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleCalculate}
                disabled={data.length === 0 || feff === null}
            >
                Hitung
            </button>
            {results.length > 0 && (
                <>
                    <CalculationTable results={results} />
                    <LineChart data={results} />
                </>
            )}
        </div>
    );
};

export default HindcastingPage;
