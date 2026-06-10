"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Activity",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const [active, setActive] =
    useState("Dashboard");

  return (
    <nav className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4">
      <h2 className="mb-6 text-xl font-bold">
        Learning Hub
      </h2>

      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() =>
                setActive(item.name)
              }
              className="relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left"
            >
              {active === item.name && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 rounded-xl bg-white/10"
                />
              )}

              <Icon
                size={18}
                className="relative z-10"
              />

              <span className="relative z-10">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}