// app/works/[slug]/WorkDetailClient.tsx
"use client";

import { Work, getImage, getVideo } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Heart,
  MessageCircle,
  MapPin,
  Tag,
  User,
  ArrowLeft,
} from "lucide-react";

import WorkCard from "./WorkCard";

interface WorkDetailClientProps {
  work: Work;
  relatedWorks: Work[];
}

export default function WorkDetailClient({
  work,
  relatedWorks,
}: WorkDetailClientProps) {
  return (
    <>
      <div className="overflow-hidden rounded-3xl bg-card shadow-xl">
        {/* تصویر یا ویدیو */}
        <div className="relative aspect-[3/4] md:aspect-video w-full overflow-hidden bg-black/5">
          {work.type === "video" ? (
            <div className="w-full h-full bg-black">
              <video
                src={getVideo(work.id)}
                controls
                preload="metadata"
                poster={work.image}
                className="w-full h-full object-contain bg-black"
              />
            </div>
          ) : (
            <Image
              unoptimized
              src={getImage(work.id)}
              alt={work.title}
              width={1200}
              height={800}
              loading="eager"
              className="h-full w-full object-cover"
            />
          )}

          <div className="absolute top-4 left-4 flex gap-2">
            {/* {work.type === "video" && (
              <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white backdrop-blur  flex flex-row gap-1 justify-center items-center">
                <Video className="w-3 h-3 md:w-4 md:h-4" /> ویدیو
              </span>
            )} */}
          </div>
        </div>

        {/* محتوا */}
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black sm:text-4xl">{work.title}</h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {work.description}
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-500" />
                {work.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4 text-blue-500" />
                {work.comments}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 border-y border-border py-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(work.date).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {work.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {work.location}
              </span>
            )}
            <Link
              href={work.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary hover:underline"
            >
              <span>مشاهده در اینستاگرام</span>
              <ArrowLeft className="h-3 w-3" />
            </Link>
          </div>

          {/* هشتگ‌ها */}
          {work.hashtags.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                <Tag className="h-4 w-4" /> هشتگ‌ها
              </h4>
              <div className="flex flex-wrap gap-2">
                {work.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* افراد تگ شده */}
          {work.taggedUsers.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                <User className="h-4 w-4" /> افراد تگ شده
              </h4>
              <div className="flex flex-wrap gap-2">
                {work.taggedUsers.map((user) => (
                  <Link
                    href={`https://www.instagram.com/${user}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={user}
                    className="rounded-full bg-muted px-3 py-1 text-xs"
                  >
                    @{user}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* کارهای مرتبط */}
      {relatedWorks.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-black mb-6">نمونه کارهای مشابه</h2>
          <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
            {relatedWorks.map((rel, index) => (
              <WorkCard work={rel} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
