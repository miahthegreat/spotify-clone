import React from "react";

function MainLayout({ children }) {
  return (
    <main className="absolute ml-48 bg-gradient-to-b from-[#2e393b] to-[#121212] inset-0 h-[calc(100%-9rem)] mt-12 mb-24 overflow-y-auto">
      {children}
    </main>
  );
}

export default MainLayout;
