// app/works/[slug]/page.tsx
import { works } from "@/data/works";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WorkDetailClient from "@/components/works/WorkDetailClient";

// تولید مسیرهای استاتیک
export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

// متادیتا
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return { title: "نمونه کار یافت نشد" };

  return {
    title: `${work.title} | نمونه کار آقای زانو`,
    description:
      work.description ||
      `نمونه کار تخصصی ${work.category} توسط محمد جمالی (آقای زانو)`,
    keywords: work.hashtags.join(", "),
    openGraph: {
      title: `${work.title} - آقای زانو`,
      description: work.description,
      images: [work.image],
    },
  };
}

// صفحه اصلی (سرور)
export default async function SingleWorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return notFound();

  const relatedWorks = works
    .filter((w) => w.category === work.category && w.id !== work.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-row justify-between items-center mb-6">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary "
          >
            <ArrowRight className="h-4 w-4" />
            بازگشت به نمونه کارها
          </Link>

          <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white backdrop-blur">
            {work.category}
          </span>
        </div>

        {/* 👇 تمام محتوای تعاملی و متحرک در کلاینت رندر می‌شود */}
        <WorkDetailClient work={work} relatedWorks={relatedWorks} />
      </div>
    </main>
  );
}
