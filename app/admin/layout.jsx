import React from "react";
import Navbar from "@/app/ui/admin/navbar";

function layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <nav className="md:w-1/6 md:min-h-screen bg-blue-400">
        <Navbar />
      </nav>
      <main className="md:w-5/6">{children}</main>
    </div>
  );
}

export default layout;
