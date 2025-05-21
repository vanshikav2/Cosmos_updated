// src/ChartComponent.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 800 },
  { month: 'Mar', sales: 600 },
  { month: 'Apr', sales: 1200 },
  { month: 'May', sales: 1100 },
  { month: 'Jun', sales: 1600 },
];

function ChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartComponent;