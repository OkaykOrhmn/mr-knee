// app/works/[slug]/WorkDetailClient.tsx
"use client";

import { Work, getImage } from "@/data/works";
import Image from "next/image";
import { Calendar, Video } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
    >
      <Link href={`/works/${work.slug}`} className="block">
        <div className="aspect-[3/4] overflow-hidden">
          <Image
            src={getImage(work.id)}
            unoptimized
            alt={`${work.title}${work.date ? ` - ${work.date}` : ""}`}
            loading="eager"
            fill
            className=" object-cover scale-110 transition duration-700 group-hover:scale-120 "
          />
          {work.type === "video" && (
            <div className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[8px] md:text-xs font-bold text-white backdrop-blur flex flex-row gap-1 justify-center items-center">
              <Video className="w-3 h-3 md:w-4 md:h-4" /> ویدیو
            </div>
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0">
          <h3 className="text-lg font-bold text-white line-clamp-1">
            {work.title}
          </h3>
          <p className="text-sm text-white line-clamp-2 mt-1">
            {work.description}
          </p>
          <span className="mt-2 text-xs text-white/80 flex items-center gap-1.5">
            <Calendar className="h-4 w-4 mb-1" />
            {new Date(work.date).toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {/* برای موبایل که hover نداریم، overlay رو همیشه نشون میدیم */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/100 via-black/40 to-transparent p-2 md:p-5 opacity-100 md:opacity-0">
          <h3 className="text-[12px] font-bold text-white md:text-lg line-clamp-1">
            {work.title}
          </h3>
          <p className="text-[10px] text-white line-clamp-2">
            {work.description}
          </p>
          <span className="mt-2 text-[8px] text-white/70 md:mt-1 md:text-sm flex items-center gap-1">
            <Calendar className="h-2.5 w-2.5 mb-1" />
            {new Date(work.date).toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
