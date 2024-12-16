'use client';

import React, { useState } from 'react';
import Link from 'next/link';  // Import Next.js Link component
import { FiMenu, FiHome, FiUser, FiCalendar, FiFileText, FiBarChart2 } from 'react-icons/fi';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // Navigation items
  const navItems = [
    { id: 1, label: 'Home', icon: <FiHome />, link: '/mentorDashboard' },
    { id: 2, label: 'Profile', icon: <FiUser />, link: '/mentorDashboard/screens/Profile' },
    { id: 3, label: 'Sessions', icon: <FiCalendar />, link: '/mentorDashboard/screens/Sessions' },
    { id: 4, label: 'Resources', icon: <FiFileText />, link: '/mentorDashboard/screens/Resources' },
    { id: 5, label: 'Analytics', icon: <FiBarChart2 />, link: '/mentorDashboard/screens/Analytics' },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-gray-800 text-white h-full transition-all duration-300 fixed top-16`}
    >
      {/* Toggle Button */}
      <div
        className="flex items-center justify-center h-12 cursor-pointer hover:bg-gray-700"
        onClick={toggleSidebar}
      >
        <FiMenu size={24} />
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4 flex flex-col items-center">
        <ul className="space-y-2 w-full">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer group w-full justify-center"
            >
              {/* Removed <a> tag, directly using Link for navigation */}
              <Link href={item.link} className="flex items-center w-full">
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`ml-4 text-sm ${
                    isCollapsed ? 'hidden' : 'inline-block'
                  } group-hover:text-primary`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
