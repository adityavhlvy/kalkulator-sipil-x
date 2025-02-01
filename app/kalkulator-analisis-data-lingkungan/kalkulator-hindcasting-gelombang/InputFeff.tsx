import React from 'react';

const InputFeff = ({ setFeff }: { setFeff: (value: number) => void }) => {
    return (
        <div className="mb-6">
            <label className="block text-lg font-medium mb-2 text-blue-300">Nilai Feff</label>
            <input
                type="number"
                step="0.0001"
                className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                onChange={(e) => setFeff(parseFloat(e.target.value))}
            />
        </div>
    );
};

export default InputFeff;