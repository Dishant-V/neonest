import FeedingChartWidget from "../components/widgets/FeedingChartWidget";
import RecentActivityWidget from "../components/widgets/RecentActivityWidget";
import SleepChartWidget from "../components/widgets/SleepChartWidget";
import GrowthTrackingWidget from "../components/widgets/GrowthTrackingWidget";
import AchievementsWidget from "../components/widgets/AchievementsWidget";
import AISuggestionsWidget from "../components/widgets/AISuggestionsWidget";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <RecentActivityWidget />
      <FeedingChartWidget />
      <SleepChartWidget />
      <GrowthTrackingWidget />
      <AchievementsWidget />
      <AISuggestionsWidget />
    </div>
  );
}
