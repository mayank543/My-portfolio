// components/PageContainer.jsx
import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
};

export default PageContainer;