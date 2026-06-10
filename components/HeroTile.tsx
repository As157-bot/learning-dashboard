"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h3 className="font-semibold">
        Activity
      </h3>

      <div className="mt-6 flex gap-2 items-end h-24">
        {[20, 40, 70, 35, 90, 55, 80].map(
          (height, index) => (
            <div
              key={index}
              className="w-6 rounded bg-white"
              style={{ height }}
            />
          )
        )}
      </div>
    </motion.article>
  );
}