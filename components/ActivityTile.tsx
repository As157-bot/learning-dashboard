"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h3 className="font-semibold mb-4">
        Activity
      </h3>

      <div className="flex gap-2">
        {[40, 80, 60, 90, 50, 70, 100].map((h, i) => (
          <div
            key={i}
            className="w-4 rounded bg-white/70"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    </motion.article>
  );
}