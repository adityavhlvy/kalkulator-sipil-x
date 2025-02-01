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
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Visualisasi H dan Tm</h2>

            {/* Line Chart for H */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Grafik H (Height)</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                        <XAxis dataKey="month" stroke="#CBD5E0" />
                        <YAxis stroke="#CBD5E0" />
                        <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '8px' }} />
                        <Legend />
                        <Line type="monotone" dataKey="H" stroke="#8884d8" name="H (Height)" dot={false} />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>

            {/* Line Chart for Tm */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">Grafik Tm (Period)</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <RechartsLineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                        <XAxis dataKey="month" stroke="#CBD5E0" />
                        <YAxis stroke="#CBD5E0" />
                        <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none', borderRadius: '8px' }} />
                        <Legend />
                        <Line type="monotone" dataKey="Tm" stroke="#82ca9d" name="Tm (Period)" dot={false} />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LineChart;