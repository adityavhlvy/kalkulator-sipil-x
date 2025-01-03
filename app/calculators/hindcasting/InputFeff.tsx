import React from 'react';

const InputFeff = ({ setFeff }: { setFeff: (value: number) => void }) => {
    return (
        <div className="mb-4">
            <label className="block font-medium mb-2">Nilai Feff</label>
            <input
                type="number"
                step="0.0001"
                className="border rounded px-2 py-1"
                onChange={(e) => setFeff(parseFloat(e.target.value))}
            />
        </div>
    );
};

export default InputFeff;
