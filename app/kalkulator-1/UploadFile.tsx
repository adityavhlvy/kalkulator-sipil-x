import React from 'react';

const UploadFile = ({ setData }: { setData: (data: any[]) => void }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const rows = text.split('\n').slice(1); // Skip header
        const parsedData = rows.map(row => {
          const [year, month, u10] = row.split(',');
          return {
            year: parseInt(year),
            month: parseInt(month),
            u10: parseFloat(u10),
          };
        });
        setData(parsedData);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2 text-blue-300">Upload File CSV</label>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition duration-300"
      />
    </div>
  );
};

export default UploadFile;