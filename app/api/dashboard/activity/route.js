export async function GET() {
  return Response.json({
    lastFed: "3 hrs ago",
    lastSleep: "6 hrs",
    lastMemory: "Today",
  });
}
