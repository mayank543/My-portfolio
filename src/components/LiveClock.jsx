import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="fixed top-2 left-2 sm:top-4 sm:left-4 text-xs sm:text-sm text-gray-400 z-50 font-light bg-black/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-md border border-gray-700/30">
      <span className="hidden sm:inline">Local time: </span>
      <span className="sm:hidden">🕐 </span>
      {formattedTime}
    </div>
  );
}

export default LiveClock;