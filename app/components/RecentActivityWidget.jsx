"use client";
import { useEffect, useState } from "react";
import { API_BASE } from "../../lib/apiBase";

export default function RecentActivityWidget() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/dashboard/activity`)
      .then((res) => res.json())
      .then(setActivity)
      .catch(console.error);
  }, []);

  if (!activity) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <p className="text-gray-500 text-sm">Loading activity summary...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
      <ul className="text-sm text-gray-700">
        <li>Last fed: {activity.lastFed}</li>
        <li>Baby slept: {activity.sleepDuration}</li>
      </ul>
    </div>
  );
}
