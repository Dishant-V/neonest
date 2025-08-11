"use client";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { API_BASE } from "../../lib/apiBase";

export default function GrowthTrackingWidget() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/dashboard/growth`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-semibold">Growth Tracking</h2>
        <p className="text-sm text-gray-500">No growth data available</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Growth Tracking (Height & Weight)</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="height" stroke="#ff7300" strokeWidth={2} />
          <Line type="monotone" dataKey="weight" stroke="#387908" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
