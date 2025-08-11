import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const feedingData = [
  { day: "Mon", feeds: 8 },
  { day: "Tue", feeds: 7 },
  { day: "Wed", feeds: 9 },
  { day: "Thu", feeds: 6 },
  { day: "Fri", feeds: 8 },
  { day: "Sat", feeds: 7 },
  { day: "Sun", feeds: 10 },
];

export default function FeedingChart() {
  return (
    <div className="h-64">
      <h3 className="text-lg font-bold mb-2">Feeding Trends (7 days)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={feedingData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="feeds" fill="#60a5fa" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
