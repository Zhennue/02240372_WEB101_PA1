import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 fixed">
      <h2 className="text-xl font-bold">CrazyGames</h2>
      <nav className="mt-4">
        <ul>
          <li className="py-2"><Link href="/pages/home.js">Home</Link></li>
          <li className="py-2"><Link href="/pages/explore.js">Explore</Link></li>
          <li className="py-2"><Link href="/pages/upload.js">Upload</Link></li>
          <li className="py-2"><Link href="C:\Users\LENOVO\OneDrive\Documents\WEB101 (FrontEnd)\SS2025_WEB101_02240372\Assignment (CRazY GaMEs)\my-crazygames\pages\profile.js">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;