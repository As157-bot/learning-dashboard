"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Database,
  Brain,
  Rocket,
  FileCode,
} from "lucide-react";

const icons = {
  BookOpen,
  Code,
  Database,
  Brain,
  Rocket,
  FileCode,
};

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

export default function CourseCard({
  course,
}: {
  course: Course;
}) {
  const Icon =
  icons[course.icon_name as keyof typeof icons] ||
  BookOpen;

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
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 hover:border-cyan-500/40 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl" />
      <div className="flex items-center gap-3">
        <Icon size={24} />

        <h3 className="font-semibold">
          {course.title}
        </h3>
      </div>

      <p className="mt-2 text-zinc-400">
        {course.progress}% Complete
      </p>

      <div className="mt-4 h-2 rounded-full bg-zinc-800">
        <motion.div
          className="h-2 rounded-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{
            duration: 1.2,
          }}
        />
      </div>
    </motion.article>
  );
}