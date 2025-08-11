"use client";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { API_BASE } from "../../lib/apiBase";

export default function FeedingChartWidget() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/dashboard/feeding")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-semibold">Feeding Trends</h2>
        <p className="text-sm text-gray-500">No feeding data available</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Feeding Trends</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
