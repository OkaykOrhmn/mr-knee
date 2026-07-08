"use client";

import { works, categories } from "@/data/works";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";
import { useState } from "react";
import WorkCard from "@/components/works/WorkCard";

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWorks = works.filter((work) => {
    const matchCategory = selectedCategory
      ? work.category === selectedCategory
      : true;
    const matchSearch =
      work.title.includes(searchTerm) || work.description.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* هدر */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">
              گالری نمونه کارها
            </span>
          </div>
          <h1 className="text-4xl font-black sm:text-5xl">
            نمونه کارهای تخصصی
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            مجموعه‌ای از درمان‌های موفق، تمرینات تخصصی و همکاری با ورزشکاران
            حرفه‌ای و تیم‌های ملی
          </p>
        </motion.div>

        {/* فیلتر و جستجو */}
        <div className="mb-10 flex flex-wrap items-start flex-col gap-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-full bg-card px-4 py-2 pl-10 text-sm ring-1 ring-border focus:ring-2 focus:ring-primary outline-none w-full "
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Search className="h-4 w-4" />
            </span>
          </div>
          {/* {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent"
            >
              <X className="h-3 w-3" />
              {selectedCategory}
            </button>
          )} */}

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${!selectedCategory ? "bg-primary text-primary-foreground" : "bg-card text-foreground ring-1 ring-border"}`}
            >
              همه
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedCategory === cat ? "bg-primary text-primary-foreground" : "bg-card text-foreground ring-1 ring-border"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* لیست کارت‌ها */}
        {filteredWorks.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            <p>نتیجه‌ای یافت نشد.</p>
          </div>
        ) : (
          <div
           
            className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredWorks.map((work, index) => (
              <WorkCard work={work} key={index} />
            ))}
          </div>
        )}

        {/* لینک برگشت */}
        <div className="mt-12">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            <ArrowRight className="h-4 w-4" />
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </main>
  );
}
