import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const growthData = [
  { month: "1", height: 50, weight: 3.2 },
  { month: "2", height: 54, weight: 4.1 },
  { month: "3", height: 58, weight: 5.0 },
  { month: "4", height: 62, weight: 5.8 },
  { month: "5", height: 65, weight: 6.5 },
];

export default function GrowthChart() {
  return (
    <div className="h-64">
      <h3 className="text-lg font-bold mb-2">Growth Tracking (Height vs Age)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={growthData}>
          <XAxis dataKey="month" label={{ value: "Months", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Height (cm)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="height" stroke="#f472b6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
