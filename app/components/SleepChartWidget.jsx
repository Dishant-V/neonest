"use client";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { API_BASE } from "../../lib/apiBase";

export default function SleepChartWidget() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/dashboard/sleep`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-semibold">Sleep Duration</h2>
        <p className="text-sm text-gray-500">No sleep data available</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Sleep Duration (Last 7 Days)</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
