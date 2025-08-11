import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sleepData = [
  { day: "Mon", hours: 6 },
  { day: "Tue", hours: 7 },
  { day: "Wed", hours: 5 },
  { day: "Thu", hours: 8 },
  { day: "Fri", hours: 7 },
  { day: "Sat", hours: 6 },
  { day: "Sun", hours: 7.5 },
];

export default function SleepChart() {
  return (
    <div className="h-64">
      <h3 className="text-lg font-bold mb-2">Sleep Duration (Last 7 days)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sleepData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="hours" stroke="#34d399" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
