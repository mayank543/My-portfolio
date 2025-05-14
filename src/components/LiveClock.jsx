// src/components/LiveClock.jsx
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
    <div className="fixed top-4 left-4 text-sm text-gray-400 z-50 font-light">
      Local time: {formattedTime}
    </div>
  );
}

export default LiveClock;