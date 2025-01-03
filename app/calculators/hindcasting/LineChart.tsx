import React from 'react';
import {
    LineChart as RechartsLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const LineChart = ({ data }: { data: any[] }) => {
    const formattedData = data.map(entry => ({
        ...entry,
        month: `${String(entry.month).padStart(2, '0')}-${entry.year}`,
    }));

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Visualisasi H dan Tm</h2>

            {/* Line Chart for H */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Grafik H (Height)</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="H" stroke="#8884d8" name="H (Height)" dot={false} />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>

            {/* Line Chart for Tm */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Grafik Tm (Period)</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Tm" stroke="#82ca9d" name="Tm (Period)" dot={false} />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineChart;
