import React from "react";
import FloatingBar from "../components/FloatingBar";

function AlternatePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to my Other Side.</h1>
      <p className="text-gray-400 mt-2">This is the alternate version of me, where things are a bit different...</p>
      
      {/* Floating Bar (Persists on both pages) */}
      <FloatingBar />
    </div>
  );
}

export default AlternatePage;