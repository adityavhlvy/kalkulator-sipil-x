import React from 'react';

const UploadFile = ({ setData }: { setData: (data: number) => void }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const csvData = event.target?.result as string;
        const parsedData = csvData
          .split('\n')
          .slice(1)
          .map((row) => {
            const [year, month, u10] = row.split(',').map((val) => parseFloat(val));
            return { year, month, u10 };
          });
        setData(parsedData);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">Upload File CSV</label>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadFile;
