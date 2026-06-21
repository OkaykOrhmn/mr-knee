"use client";

import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Headphones,
  Compass,
  Lightbulb,
  PlusIcon,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Quote,
  Star,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import {
  fadeUp,
  fadeRightRTL,
  fadeLeftRTL,
  stagger,
  zoomIn,
} from "@/lib/animations";

// تصاویر
import heroPortrait from "@/assets/images/hero-portrait.png";
import articleInnovation from "@/assets/images/article-innovation.jpg";
import articleSkills from "@/assets/images/article-skills.jpg";
import articleStrategy from "@/assets/images/article-strategy.jpg";
import bookCover from "@/assets/images/book.png";
import sportsDoctor from "@/assets/images/sports-doctor.jpeg";
import strengthCoach from "@/assets/images/strength-coach.jpeg";
import universityProfessor from "@/assets/images/university-professor.jpeg";
import rehabSpecialist from "@/assets/images/rehab-specialist.jpeg";
import nationalTeamCoach from "@/assets/images/national-team-coach.jpeg";
import footballCoach from "@/assets/images/football-coach.jpeg";
import handballPlayer from "@/assets/images/handball-player.jpeg";
import nationalTeamPlayer from "@/assets/images/national-team-player.jpeg";
import BaleIcon from "@/assets/icons/bale.png";
import { TelegramIcon } from "@/assets/icons/Telegram";
import { WhatsAppIcon } from "@/assets/icons/WhatsApp";
import { InstagramIcon } from "@/assets/icons/Instagram";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

// ============================================================
// داده‌ها
// ============================================================
const whyUs = [
  {
    icon: CheckCircle2,
    title: "بیش از ۱۰ سال تجربه تخصصی",
    desc: "تجربه درمان، توانبخشی و بازگشت ورزشکاران و افراد عادی به فعالیت بدون درد.",
  },
  {
    icon: Headphones,
    title: "درمان شخصی‌سازی شده",
    desc: "هر برنامه درمانی و تمرینی متناسب با شرایط، هدف و سطح فعالیت شما طراحی می‌شود.",
  },
  {
    icon: Lightbulb,
    title: "رویکرد علمی و بدون جراحی",
    desc: "اولویت ما درمان اصولی و غیرتهاجمی است و تنها در صورت نیاز جراحی پیشنهاد می‌شود.",
  },
  {
    icon: Compass,
    title: "همراهی تا بازگشت کامل",
    desc: "از کاهش درد تا بازگشت به ورزش یا فعالیت روزمره، در تمام مراحل کنار شما هستیم.",
  },
];

const experiences = [
  {
    img: sportsDoctor,
    title: "آسیب‌شناس ورزشی",
    period: "۱۴۰۲ - اکنون",
    desc: "تشخیص، درمان و پیشگیری از آسیب‌های ورزشی با تمرکز بر بازگشت ایمن ورزشکار به رقابت.",
  },
  {
    img: strengthCoach,
    title: "مربی بدنسازی حرفه‌ای",
    period: "۱۴۰۰ - ۱۴۰۲",
    desc: "طراحی و اجرای برنامه‌های تمرینی اختصاصی برای ورزشکاران حرفه‌ای و تیم‌های ملی.",
  },
  {
    img: universityProfessor,
    title: "استاد دانشگاه (علوم ورزشی)",
    period: "۱۳۹۹ - ۱۴۰۰",
    desc: "تدریس دروس تخصصی علوم ورزشی و هدایت علمی دانشجویان در مسیر پژوهش.",
  },
  {
    img: rehabSpecialist,
    title: "درمانگر و متخصص توانبخشی",
    period: "۱۳۹۸ - ۱۳۹۹",
    desc: "درمان و توانبخشی آسیب‌های ورزشی با روش‌های فیزیوتراپی و بازگشت ایمن ورزشکاران به تمرین.",
  },
  {
    img: nationalTeamCoach,
    title: "مربیگری تیم‌های ملی",
    period: "۱۳۹۷ - ۱۳۹۸",
    desc: "طراحی استراتژی‌های تیمی و آماده‌سازی ورزشکاران برای رقابت‌های بین‌المللی.",
  },
  {
    img: footballCoach,
    title: "مربی فوتبال",
    period: "۱۳۹۶ - ۱۳۹۷",
    desc: "آموزش تکنیک‌ها و تاکتیک‌های فوتبال به بازیکنان جوان و توسعه مهارت‌های تیمی.",
  },
  {
    img: handballPlayer,
    title: "بازیکن هندبال (سطح لیگ برتر)",
    period: "۱۳۹۵ - ۱۳۹۶",
    desc: "شرکت در مسابقات لیگ برتر و تمرین در سطح حرفه‌ای با تمرکز بر عملکرد تخصصی.",
  },
  {
    img: nationalTeamPlayer,
    title: "بازیکن تیم ملی (دوران حرفه‌ای)",
    period: "۱۳۹۰ - ۱۳۹۵",
    desc: "حضور در تیم ملی و کسب تجربه در بالاترین سطح رقابت‌های ملی و بین‌المللی.",
  },
];

const services = [
  {
    name: "مکانوتراپی تخصصی زانو",
    desc: "درمان و توانبخشی آسیب‌های زانو قبل و بعد از جراحی با استفاده از جدیدترین متدهای مکانوتراپی، تمرینات اصلاحی و برنامه‌های اختصاصی.",
  },
  {
    name: "بدنسازی ورزشی حرفه‌ای",
    desc: "طراحی برنامه‌های بدنسازی اختصاصی برای تمامی رشته‌های ورزشی با هدف افزایش عملکرد، پیشگیری از آسیب و بازگشت ایمن به تمرینات.",
  },
  {
    name: "آسیب‌شناسی و درمان اصلاحی",
    desc: "ارزیابی دقیق الگوهای حرکتی، تشخیص ناهنجاری‌های اسکلتی-عضلانی و ارائه برنامه درمانی برای کاهش درد و بهبود عملکرد.",
  },
  {
    name: "مشاوره تخصصی و آموزش",
    desc: "برگزاری کارگاه‌های آموزشی و ارائه مشاوره تخصصی به ورزشکاران، مربیان و دانشجویان حوزه علوم ورزشی و توانبخشی.",
  },
];

const testimonials = [
  {
    name: "سروش کلامی",
    role: "مدیر کسب‌وکار",
    text: "با راهنمایی‌های تیم بسکوچ، توانستم کسب‌وکارم را به سطح جدیدی برسانم. واقعا توصیه می‌کنم.",
  },
  {
    name: "ملیکا عیدی",
    role: "کارآفرین",
    text: "مشاوران دقیق و حرفه‌ای، با راهکارهای کاربردی. در زمان کوتاهی نتیجه گرفتم.",
  },
  {
    name: "کیانوش رحمانزایی",
    role: "پارگی زانو ACL",
    text: "مشاوران دقیق و حرفه‌ای، با راهکارهای کاربردی. در زمان کوتاهی نتیجه گرفتم.",
  },
];

const works = [
  {
    img: articleInnovation,
    title: "علی ارغشی",
    date: "بازتوانی زانو بدون عمل از کهگلویه و بویراحمد",
  },
  {
    img: articleSkills,
    title: "محمد جعفری",
    date: "فوتبالیست برای بازتوانی زانو مراجعه کردند بعد از عمل رباط صلیبی و مینیسک",
  },
  {
    img: articleStrategy,
    title: "حجت اسکینی",
    date: "آسیب جفت زانو و بازتوانی بعد از عمل جراحی رباط و مینیسک زانوی راست و شکستگی و جراحی کشکک زانوی چپ",
  },
  {
    img: articleStrategy,
    title: "حجت اسکینی",
    date: "آسیب جفت زانو و بازتوانی بعد از عمل جراحی رباط و مینیسک زانوی راست و شکستگی و جراحی کشکک زانوی چپ",
  },
  {
    img: articleStrategy,
    title: "صدرا موسوی",
    date: "فوتبالیست برای بازتوانی زانو Acl , minisc",
  },
  {
    img: articleStrategy,
    title: "پیمان کاظمی",
    date: "بازتوانی زانو از کانادا",
  },
  {
    img: articleStrategy,
    title: "نیل فراخانی",
    date: "تمرینات پیش فصل ملی پوش هندبال",
  },
  {
    img: articleStrategy,
    title: "نسترن فراهانی",
    date: "تمرینات پیش فصل ملی پوش هندبال",
  },
  {
    img: articleStrategy,
    title: "علبرضا حیدری",
    date: " بازتوانی زانو بازیکن حرفه‌ای فوتبال صاحلی",
  },
];

const book = {
  title: "نویسنده کتاب آقای زانو",
  subtitle: "راهنمای جامع درمان، توانبخشی و سلامت زانو",
  description:
    "این کتاب حاصل سال‌ها تجربه در درمان آسیب‌های زانو، مکانوتراپی، توانبخشی ورزشکاران حرفه‌ای و آموزش علمی است. اگر به دنبال شناخت صحیح مشکلات زانو و روش‌های اصولی درمان و پیشگیری هستید، این کتاب راهنمای کاملی برای شما خواهد بود.",
  image: bookCover,
  buyLink: "#",
};

const treatableConditions = [
  { name: "پارگی ACL", slug: "acl" },
  { name: "آسیب مینیسک", slug: "meniscus" },
  { name: "آرتروز زانو", slug: "arthritis" },
  { name: "زانوی دوندگان", slug: "runner-knee" },
  { name: "درد کشکک", slug: "patellar-pain" },
  { name: "رباط داخلی", slug: "mcl" },
  { name: "رباط خارجی", slug: "lcl" },
  { name: "تاندون کشکک", slug: "patellar-tendon" },
  { name: "ساییدگی زانو", slug: "knee-osteoporosis" },
  { name: "درد جلوی زانو", slug: "anterior-knee-pain" },
  { name: "خشکی زانو", slug: "knee-stiffness" },
  { name: "تورم زانو", slug: "knee-swelling" },
];

const articles = [
  {
    title: "علت درد زانو و روش‌های درمان آن",
    excerpt:
      "درد زانو می‌تواند ناشی از عوامل مختلفی مانند آسیب‌های ورزشی، آرتروز، یا مشکلات ساختاری باشد...",
    slug: "knee-pain-causes",
    image: articleInnovation,
  },
  {
    title: "پارگی ACL؛ از تشخیص تا بازگشت به ورزش",
    excerpt:
      "پارگی رباط صلیبی قدامی یکی از شایع‌ترین آسیب‌های زانو در ورزشکاران است...",
    slug: "acl-injury-guide",
    image: articleSkills,
  },
  {
    title: "درمان مینیسک بدون جراحی",
    excerpt:
      "آسیب مینیسک زانو می‌تواند با روش‌های غیرتهاجمی مانند مکانوتراپی و تمرینات اصلاحی درمان شود...",
    slug: "meniscus-treatment",
    image: articleStrategy,
  },
  {
    title: "آرتروز زانو و راهکارهای مدیریت آن",
    excerpt:
      "آرتروز زانو یک بیماری دژنراتیو است که با افزایش سن و فشار زیاد روی مفصل ایجاد می‌شود...",
    slug: "knee-arthritis-management",
    image: articleStrategy,
  },
  {
    title: "تمرینات قدرتی برای پیشگیری از آسیب زانو",
    excerpt:
      "تقویت عضلات اطراف زانو می‌تواند از بروز بسیاری از آسیب‌های رایج جلوگیری کند...",
    slug: "knee-strength-training",
    image: articleStrategy,
  },
];

const faqItems = [
  {
    q: "آیا پارگی ACL بدون جراحی درمان می‌شود؟",
    a: "بله، در بسیاری از موارد پارگی ACL با روش‌های غیرجراحی مانند مکانوتراپی، تمرینات اصلاحی و توانبخشی قابل درمان است. البته بسته به شدت آسیب و سطح فعالیت بیمار، ممکن است جراحی نیز توصیه شود. در کلینیک آقای زانو، ابتدا روی درمان غیرتهاجمی تمرکز می‌کنیم.",
  },
  {
    q: "مکانوتراپی چیست و چگونه به درمان زانو کمک می‌کند؟",
    a: "مکانوتراپی نوعی درمان فیزیکی است که با استفاده از دستگاه‌های مکانیکی و تمرینات هدفمند، به بازسازی بافت‌های آسیب‌دیده، کاهش درد و بهبود عملکرد مفصل کمک می‌کند. این روش به ویژه برای توانبخشی پس از آسیب‌های ورزشی و جراحی بسیار مؤثر است.",
  },
  {
    q: "چقدر طول می‌کشد تا به ورزش برگردم؟",
    a: "مدت زمان بازگشت به ورزش به نوع آسیب، شدت آن و پایبندی به برنامه توانبخشی بستگی دارد. به طور معمول، برای آسیب‌های خفیف تا متوسط بین ۴ تا ۱۲ هفته و برای آسیب‌های شدیدتر مانند پارگی ACL ممکن است ۶ تا ۹ ماه طول بکشد. برنامه درمانی شما به صورت شخصی‌سازی شده طراحی می‌شود.",
  },
  {
    q: "بعد از عمل ACL چه تمرین‌هایی لازم است؟",
    a: "پس از عمل جراحی ACL، تمرینات توانبخشی شامل بازگرداندن دامنه حرکتی، تقویت عضلات چهارسر و همسترینگ، و تمرینات تعادلی و پلایومتریک می‌شود. این تمرینات باید تحت نظارت متخصص فیزیوتراپی یا مکانوتراپیست انجام شود تا از بازگشت ایمن اطمینان حاصل شود.",
  },
  {
    q: "آیا درد زانو با ورزش بدتر می‌شود؟",
    a: "در برخی موارد، ورزش نامناسب یا بیش از حد می‌تواند درد زانو را تشدید کند. اما با برنامه تمرینی صحیح و متناسب با شرایط شما، ورزش می‌تواند به تقویت عضلات اطراف زانو و کاهش درد کمک کند. مهم است که تمرینات را زیر نظر متخصص انجام دهید.",
  },
  {
    q: "چه زمانی برای تشخیص مشکل زانو به MRI نیاز است؟",
    a: "MRI معمولاً در مواردی تجویز می‌شود که معاینه بالینی و عکس‌برداری ساده نتواند علت دقیق مشکل را مشخص کند. برای آسیب‌های رباطی، مینیسک، یا ضایعات استخوانی، MRI تصویر دقیقی از بافت‌های نرم ارائه می‌دهد.",
  },
  {
    q: "آیا آرتروز زانو قابل درمان است؟",
    a: "آرتروز زانو یک بیماری مزمن است که درمان قطعی ندارد، اما با روش‌های مختلفی مانند فیزیوتراپی، مکانوتراپی، کاهش وزن، و تزریق‌های مفصلی می‌توان علائم آن را کنترل کرد و پیشرفت آن را به تأخیر انداخت. در موارد شدید، جراحی تعویض مفصل ممکن است لازم شود.",
  },
  {
    q: "هزینه درمان در کلینیک آقای زانو چگونه است؟",
    a: "هزینه درمان بستگی به نوع خدمات، تعداد جلسات و پیچیدگی مشکل شما دارد. برای دریافت اطلاعات دقیق، می‌توانید با شماره کلینیک تماس بگیرید یا از طریق فرم مشاوره رایگان، اطلاعات اولیه را دریافت کنید. ما سعی می‌کنیم برنامه‌های درمانی مقرون‌به‌صرفه ارائه دهیم.",
  },
  {
    q: "آیا برنامه درمانی آنلاین هم دارید؟",
    a: "بله، برای بیمارانی که امکان حضور در کلینیک را ندارند، برنامه‌های توانبخشی آنلاین شامل آموزش تمرینات، مشاوره و نظارت از راه دور ارائه می‌شود. این برنامه‌ها تحت نظر مستقیم متخصص طراحی و پیگیری می‌شوند.",
  },
  {
    q: "آیا ورزشکاران حرفه‌ای نیز به کلینیک شما مراجعه می‌کنند؟",
    a: "بله، ما با ورزشکاران حرفه‌ای از رشته‌های مختلف مانند فوتبال، هندبال، والیبال و ورزش‌های رزمی همکاری داشته‌ایم. بسیاری از بازیکنان لیگ برتر و تیم‌های ملی برای درمان و توانبخشی به ما مراجعه کرده‌اند.",
  },
  {
    q: "آیا درمان‌های شما برای سالمندان نیز مناسب است؟",
    a: "قطعاً. برنامه‌های درمانی ما برای تمام گروه‌های سنی از جمله سالمندان طراحی می‌شود. با توجه به نیازهای خاص این گروه، تمرینات با شدت مناسب و با هدف کاهش درد، بهبود تعادل و افزایش کیفیت زندگی تجویز می‌شود.",
  },
  {
    q: "چند جلسه درمان برای بهبودی کامل نیاز است؟",
    a: "تعداد جلسات درمانی بستگی به نوع و شدت آسیب دارد. به طور میانگین، برای آسیب‌های حاد، ۸ تا ۱۲ جلسه مکانوتراپی و تمرینات اصلاحی توصیه می‌شود. در موارد مزمن یا پس از جراحی، ممکن است به ۲۰ جلسه یا بیشتر نیاز باشد. برنامه درمانی شما پس از ارزیابی دقیق مشخص می‌شود.",
  },
];

// ============================================================
// کامپوننت‌های بخش‌ها
// ============================================================

// --- HERO ---
function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
        <motion.div variants={fadeRightRTL} className="order-2 lg:order-1">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">
              وقتشه بدون درد و با اطمینان حرکت کنی!
            </span>
          </div>
          <h1 className="text-4xl font-black leading-[1.15] text-[color:var(--color-brand-dark)] sm:text-5xl lg:text-6xl">
            درمان و توانبخشی
            <br />
            <span className="text-primary">تخصصی زانو</span>
          </h1>
          <h2 className="pt-2 text-2xl font-bold text-[color:var(--color-brand-dark)] sm:text-3xl">
            با محمد جمالی (آقای زانو)
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            با بیش از ۱۰ سال تجربه در آسیب‌شناسی ورزشی، مکانوتراپی زانو و همکاری
            با تیم‌های ملی و لیگ برتر، به شما کمک می‌کنم تا درد را کاهش دهید،
            عملکرد زانوی خود را بازیابی کنید و با اطمینان به فعالیت‌های روزمره
            یا ورزش حرفه‌ای بازگردید.
          </p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {[
              { href: "https://ble.ir/", icon: BaleIcon, alt: "بله" },
              {
                href: "https://t.me/+989132001925",
                icon: TelegramIcon,
                alt: "تلگرام",
              },
              {
                href: "https://wa.me/+989132001925",
                icon: WhatsAppIcon,
                alt: "واتساپ",
              },
              {
                href: "https://instagram.com/mohammadjamali_official",
                icon: InstagramIcon,
                alt: "اینستاگرام",
              },
              {
                href: "mailto:youremail@example.com",
                icon: FaEnvelope,
                alt: "ایمیل",
              },
              { href: "tel:+989132001925", icon: FaPhone, alt: "تلفن" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 p-2.5 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
              >
                {typeof item.icon === "function" ? (
                  <item.icon size={30} />
                ) : (
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    width={1000}
                    height={1000}
                    priority
                  />
                )}
              </Link>
            ))}
          </motion.div>

          <div className="mt-10 hidden gap-1 text-primary lg:flex" aria-hidden>
            {[...Array(5)].map((_, i) => (
              <ArrowLeft
                key={i}
                className={`h-4 w-4 ${i > 0 ? "opacity-" + (70 - i * 15) : ""}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div variants={zoomIn} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute -left-2 bottom-6 h-40 w-40 rounded-full border-[14px] border-accent" />
            <span className="absolute -left-4 top-6 text-3xl font-black text-primary">
              ×
            </span>
            <span className="absolute right-6 top-2 text-3xl font-black text-primary">
              ×
            </span>
            <div className="absolute inset-4 overflow-hidden rounded-[42%_58%_38%_62%/55%_45%_55%_45%] bg-primary wave-pattern">
              <Image
                src={heroPortrait}
                alt="محمد جمالی - آقای زانو - متخصص توانبخشی زانو"
                className="h-full w-full object-cover"
                width={896}
                height={1024}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// --- WHY US ---
function WhyUsSection() {
  return (
    <motion.section
      id="why-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="relative py-20"
    >
      <motion.div
        variants={fadeRightRTL}
        className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10"
      >
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground wave-pattern">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">چرا Mr. Knee؟</span>
          </div>
          <h2 className="text-3xl font-black leading-snug sm:text-4xl">
            تخصص، تجربه و درمان <br /> برای بازگشت قدرتمند شما
          </h2>
          <p className="mt-6 text-sm leading-7 text-primary-foreground/80">
            با سال‌ها تجربه در تیم‌های ملی، لیگ برتر و توانبخشی صدها بیمار و
            ورزشکار، هدف ما تنها کاهش درد نیست؛ بلکه بازگرداندن عملکرد طبیعی،
            افزایش کیفیت زندگی و پیشگیری از آسیب‌های مجدد است.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((f) => (
            <motion.div
              variants={fadeUp}
              key={f.title}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

// --- SERVICES ---
function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">خدمات تخصصی</span>
          </div>
          <h2 className="text-3xl font-black text-[color:var(--color-brand-dark)] sm:text-4xl">
            خدمات تخصصی سلامت زانو و عملکرد ورزشی
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            با تکیه بر بیش از ۱۰ سال تجربه در تیم‌های ملی، لیگ برتر و حوزه
            آسیب‌شناسی ورزشی، خدمات تخصصی برای درمان، پیشگیری از آسیب و ارتقای
            عملکرد ورزشکاران و افراد عادی ارائه می‌شود.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s, i) => (
            <motion.div
              variants={fadeUp}
              key={s.name}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl p-7 ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                i === 0
                  ? "bg-primary text-primary-foreground ring-primary shadow-xl shadow-primary/20"
                  : "bg-[color:var(--color-brand-soft)] ring-border"
              }`}
            >
              <div
                className={`absolute left-6 top-4 text-6xl font-black opacity-10 ${
                  i === 0 ? "text-white" : "text-primary"
                }`}
              >
                0{i + 1}
              </div>
              <div
                className={`relative mb-4 text-xs font-bold ${
                  i === 0 ? "text-accent" : "text-primary"
                }`}
              >
                خدمت تخصصی
              </div>
              <h3 className="relative text-xl font-black leading-8">
                {s.name}
              </h3>
              <p
                className={`relative mt-4 text-sm leading-7 ${
                  i === 0
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- ABOUT (محمد جمالی) ---
function AboutSection() {
  return (
    <section className="bg-[color:var(--color-brand-soft)]/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <motion.div variants={fadeRightRTL}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-accent" />
              <span className="text-sm font-bold text-accent">درباره ما</span>
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">
              محمد جمالی؛ <span className="text-primary">آقای زانو</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
              <p>
                محمد جمالی، متخصص توانبخشی و آسیب‌شناسی ورزشی، با بیش از یک دهه
                تجربه درخشان در زمینه درمان و بازتوانی آسیب‌های زانو، به‌عنوان
                یکی از برجسته‌ترین متخصصان این حوزه در ایران شناخته می‌شود.
                ایشان با همکاری با تیم‌های ملی و باشگاه‌های لیگ برتر،
                توانسته‌اند صدها ورزشکار و بیمار عادی را به زندگی بدون درد و
                فعالیت ورزشی بازگردانند.
              </p>
              <p>
                رویکرد ایشان بر پایه علم روز، تمرینات اصلاحی، مکانوتراپی و درمان
                غیرتهاجمی استوار است. هدف اصلی، نه فقط کاهش درد، بلکه اصلاح
                ریشه‌ای مشکلات حرکتی و پیشگیری از عود مجدد آسیب می‌باشد.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeLeftRTL} className="grid grid-cols-2 gap-4">
            {[
              { label: "سال تجربه", value: "۱۰+" },
              { label: "بیمار", value: "۳۰۰۰+" },
              { label: "تیم ورزشی", value: "۲۰+" },
              { label: "رضایت بیماران", value: "۹۵٪" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-card p-6 text-center shadow ring-1 ring-border"
              >
                <div className="text-4xl font-black text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- EXPERIENCES ---
function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="relative bg-gradient-to-b from-background to-[color:var(--color-brand-soft)]/30 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">سوابق حرفه‌ای</span>
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            مسیر تخصصی من در یک نگاه
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            بیش از یک دهه تجربه در ورزش و درمان تخصصی زانو
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="relative"
        >
          {/* خط عمودی برای موبایل */}
          <div className="absolute right-4 top-0 h-[98%] w-0.5 bg-primary/20 md:hidden " />

          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((exp, index) => (
              <motion.div
                variants={fadeUp}
                key={exp.title}
                className="group relative flex flex-col"
              >
                {/* دایره نشانگر تایم‌لاین - برای موبایل سمت راست */}
                <div className="absolute right-0 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30 md:static md:mx-auto md:mb-4 md:h-12 md:w-12 md:text-base">
                  <span className="text-xs font-bold text-primary-foreground md:text-sm">
                    {index + 1}
                  </span>
                </div>

                {/* خط اتصال افقی برای دسکتاپ */}
                {index < experiences.length && (
                  <div className="absolute left-1/2 top-[30px] hidden h-0.5 w-full -translate-x-1/2 bg-primary/20 lg:block " />
                )}

                {/* کارت */}
                <div
                  className={`relative mx-0 md:mx-4 my-8 md:my-0 rounded-2xl bg-card/80  shadow-lg shadow-primary/5 backdrop-blur-sm ring-1 ring-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 md:ml-0 lg:mt-8 md:aspect-[3/4] ${
                    index < 4 ? "md:mb-12" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-primary/80 border border-primary rounded-xl flex items-center gap-1.5 px-2 py-1 text-xs text-primary-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="pt-1">{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex flex-col p-4">
                    <h3 className="mt-4 text-base font-bold md:text-lg">
                      {exp.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground md:text-sm">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- WORKS ---
function WorksSection() {
  return (
    <section id="works" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-accent" />
              <span className="text-sm font-bold text-accent">
                نمونه کار‌ها
              </span>
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">
              نگاهی به دستاورد‌های من
            </h2>
          </div>
          <Link href="#about" className="text-sm font-bold text-primary">
            مشاهده همه
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {works.map((work, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={work.img}
                  alt={`${work.title}${work.date ? ` - ${work.date}` : ""}`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0">
                <h3 className="text-lg font-bold text-white">{work.title}</h3>
                <p className="mt-1 text-sm text-white/80">{work.date}</p>
              </div>

              {/* برای موبایل که hover نداریم، overlay رو همیشه نشون میدیم */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5 opacity-100 md:opacity-0">
                <h3 className="text-base font-bold text-white md:text-lg">
                  {work.title}
                </h3>
                <p className="mt-0.5 text-xs text-white/70 md:mt-1 md:text-sm">
                  {work.date}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="flex h-full cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-border bg-primary/5 p-8 text-sm font-bold text-primary transition hover:border-primary/40 hover:bg-primary/10"
          >
            <PlusIcon className="h-8 w-8" />
            <h6 className="text-lg font-bold">مشاهده بیشتر</h6>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- BOOK ---
function BookSection() {
  return (
    <section id="book" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] bg-primary text-primary-foreground">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRightRTL}
            className="relative grid items-center gap-14 px-8 py-14 lg:grid-cols-2 lg:px-16"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                📖 جدیدترین کتاب
              </div>
              <h2 className="text-4xl font-black leading-tight lg:text-5xl">
                {book.title}
              </h2>
              <p className="mt-4 text-xl text-primary-foreground/90">
                {book.subtitle}
              </p>
              <p className="mt-8 max-w-xl leading-8 text-primary-foreground/80">
                {book.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={book.buyLink}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-24 py-3 font-bold text-accent-foreground transition hover:brightness-95"
                >
                  خرید کتاب
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <motion.div
              variants={fadeLeftRTL}
              className="relative flex justify-center"
            >
              <div className="absolute h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
              <Image
                src={book.image}
                alt="کتاب آقای زانو - محمد جمالی - درمان و توانبخشی زانو"
                width={850}
                height={1050}
                className="relative w-full drop-shadow-[0_30px_50px_rgba(0,0,0,.35)] transition duration-500 hover:scale-105 lg:w-140"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIALS ---
function TestimonialsSection() {
  return (
    <section className="bg-[color:var(--color-brand-soft)]/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">
              درباره ما می‌گویند
            </span>
            <span className="h-[2px] w-10 bg-accent" />
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            منتظر تماس شما هستیم!
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              variants={fadeUp}
              key={t.name}
              className="relative rounded-2xl bg-card p-7 shadow-md ring-1 ring-border"
            >
              <Quote className="absolute bottom-5 left-5 h-10 w-10 text-primary/10" />
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 font-black text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ms-auto flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                {t.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- TREATMENT PROCESS ---
function TreatmentProcessSection() {
  const steps = [
    {
      step: "۱",
      title: "ارزیابی دقیق زانو",
      desc: "معاینه بالینی و بررسی تصاویر تشخیصی برای شناسایی دقیق مشکل",
    },
    {
      step: "۲",
      title: "تشخیص علت درد",
      desc: "تعیین علت اصلی آسیب و طراحی نقشه درمانی متناسب",
    },
    {
      step: "۳",
      title: "طراحی برنامه اختصاصی",
      desc: "برنامه‌ای شامل مکانوتراپی، تمرینات اصلاحی و راهکارهای پیشگیری",
    },
    {
      step: "۴",
      title: "بازگشت به ورزش",
      desc: "بازیابی کامل عملکرد و بازگشت ایمن به فعالیت‌های ورزشی",
    },
  ];

  return (
    <section id="treatment-process" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">فرآیند درمان</span>
            <span className="h-[2px] w-10 bg-accent" />
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            درمان شما در ۴ مرحله
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-8 md:grid-cols-4"
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="relative rounded-2xl bg-[color:var(--color-brand-soft)] p-6 text-center ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-black text-primary-foreground shadow-lg shadow-primary/25">
                {item.step}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.desc}
              </p>
              {parseInt(item.step) < 4 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-3xl font-black text-primary/30 md:block">
                  ←
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- TREATABLE CONDITIONS ---
function TreatableConditionsSection() {
  return (
    <section
      id="treatable-conditions"
      className="bg-[color:var(--color-brand-soft)]/50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">
              بیماری‌های قابل درمان
            </span>
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            چه مشکلاتی را می‌توانیم درمان کنیم؟
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            از آسیب‌های حاد ورزشی تا مشکلات مزمن زانو، ما با روش‌های غیرتهاجمی و
            علمی به درمان شما کمک می‌کنیم.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-3"
        >
          {treatableConditions.map((cond) => (
            <motion.a
              key={cond.slug}
              variants={fadeUp}
              // href={`/services/${cond.slug}`}
              href="#services"
              className="inline-flex items-center rounded-full bg-card px-6 py-2.5 text-sm font-medium text-foreground shadow-sm ring-1 ring-border transition hover:bg-primary hover:text-primary-foreground hover:ring-primary"
            >
              {cond.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- NO SURGERY (چرا بدون جراحی) ---
function NoSurgerySection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="prose prose-lg max-w-none text-foreground"
        >
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            چرا همیشه جراحی بهترین انتخاب نیست؟
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              بسیاری از بیماران تصور می‌کنند که تنها راه درمان آسیب‌های جدی
              زانو، جراحی است. اما در کلینیک آقای زانو، ما معتقدیم که درمان
              غیرتهاجمی و توانبخشی تخصصی می‌تواند در بسیاری از موارد به اندازه
              جراحی مؤثر باشد و حتی مزایای بیشتری داشته باشد.
            </p>
            <p>
              <strong>دلایل انتخاب روش‌های غیرجراحی:</strong>
            </p>
            <ul className="list-disc space-y-2 pr-6">
              <li>
                <strong>دوره نقاهت کوتاه‌تر:</strong> بیماران سریع‌تر به
                فعالیت‌های روزمره بازمی‌گردند.
              </li>
              <li>
                <strong>عوارض کمتر:</strong> خطر عفونت، خونریزی و عوارض بیهوشی
                وجود ندارد.
              </li>
              <li>
                <strong>حفظ بافت طبیعی:</strong> با تقویت عضلات و اصلاح الگوهای
                حرکتی، عملکرد مفصل بهبود می‌یابد.
              </li>
              <li>
                <strong>پیشگیری از آسیب مجدد:</strong> تمرینات اصلاحی و
                آگاهی‌بخشی، خطر عود آسیب را کاهش می‌دهد.
              </li>
            </ul>
            <p>
              البته در مواردی که آسیب بسیار شدید است یا درمان غیرجراحی پاسخ‌دهی
              کافی نداشته باشد، جراحی به‌عنوان گزینه نهایی مطرح می‌شود. اما
              همیشه اولین قدم، ارزیابی دقیق و تلاش برای درمان اصولی و بدون جراحی
              است.
            </p>
            <p>
              با روش‌های مدرن مکانوتراپی، تمرینات اصلاحی و برنامه‌های توانبخشی
              پیشرفته، بسیاری از بیماران با مشکلاتی مانند پارگی ACL، آسیب
              مینیسک، آرتروز و دردهای مزمن زانو، بدون نیاز به عمل جراحی بهبود
              یافته‌اند.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- CTA ---
function CTASection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
        <h2 className="text-3xl font-black sm:text-4xl">
          همین امروز برای ارزیابی زانو اقدام کنید
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          با یک جلسه مشاوره رایگان، مشکل زانوی خود را دقیق بشناسید و بهترین مسیر
          درمانی را انتخاب کنید.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-bold text-accent-foreground transition hover:brightness-95"
          >
            <Phone className="h-5 w-5" />
            رزرو مشاوره
          </Link>
          <Link
            href="tel:+989132001925"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-3 font-bold backdrop-blur transition hover:bg-white/20"
          >
            <FaPhone />
            تماس فوری
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
    id="faq"
    className="bg-[color:var(--color-brand-soft)]/50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-accent" />
            <span className="text-sm font-bold text-accent">سوالات متداول</span>
            <span className="h-[2px] w-10 bg-accent" />
          </div>
          <h2 className="text-3xl font-black sm:text-4xl">
            پاسخ به سوالات شما
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="rounded-2xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-right"
              >
                <span className="text-lg font-bold">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-base leading-7 text-muted-foreground">
                  {item.a}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- ARTICLES ---
function ArticlesSection() {
  return (
    <section
    id="articles"
    className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-accent" />
              <span className="text-sm font-bold text-accent">
                آخرین مقالات
              </span>
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">
              جدیدترین مطالب آموزشی
            </h2>
          </div>
          <Link href="#" className="text-sm font-bold text-primary">
            مشاهده همه مقالات →
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {articles.slice(0, 4).map((article) => (
            <motion.article
              variants={fadeUp}
              key={article.slug}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="line-clamp-2 text-base font-bold leading-7">
                  {article.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-4 inline-block text-sm font-bold text-primary"
                >
                  مطالعه بیشتر ←
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- SEO CONTENT ---
function SeoContentSection() {
  return (
    <section className="bg-[color:var(--color-brand-soft)]/30 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="prose prose-lg max-w-none text-foreground"
        >
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            درمان تخصصی زانو با متدهای نوین
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              <strong>درمان زانو</strong> یکی از مهم‌ترین حوزه‌های فیزیوتراپی و
              توانبخشی ورزشی است که با پیشرفت علم، روش‌های متنوعی برای آن ارائه
              شده است. در کلینیک تخصصی آقای زانو، ما با بهره‌گیری از جدیدترین
              متدهای <strong>مکانوتراپی</strong> و تمرینات اصلاحی، به درمان طیف
              گسترده‌ای از آسیب‌ها و مشکلات زانو می‌پردازیم.
            </p>
            <h3 className="text-2xl font-bold">پارگی ACL و روش‌های درمان آن</h3>
            <p>
              <strong>پارگی رباط صلیبی قدامی (ACL)</strong> یکی از شایع‌ترین
              آسیب‌های ورزشی است که اغلب در ورزش‌های با تغییر جهت ناگهانی مانند
              فوتبال، بسکتبال و اسکی رخ می‌دهد. درمان{" "}
              <strong>ACL بدون جراحی</strong> با استفاده از تمرینات قدرتی،
              تعادلی و مکانوتراپی در بسیاری از موارد ممکن است. با این حال، در
              موارد پارگی کامل و ناپایداری شدید، جراحی بازسازی ACL توصیه می‌شود.
            </p>
            <h3 className="text-2xl font-bold">
              آسیب مینیسک و گزینه‌های درمانی
            </h3>
            <p>
              <strong>مینیسک</strong> زانو به‌عنوان ضربه‌گیر عمل می‌کند و آسیب
              به آن می‌تواند باعث درد، تورم و قفل شدن زانو شود.
              <strong>درمان مینیسک بدون جراحی</strong> با تمرینات تقویتی و
              مکانوتراپی در آسیب‌های خفیف تا متوسط مؤثر است. در پارگی‌های شدید
              که با قفل شدن همراه باشند، جراحی آرتروسکوپی ممکن است ضروری باشد.
            </p>
            <h3 className="text-2xl font-bold">آرتروز زانو؛ مدیریت و کنترل</h3>
            <p>
              <strong>آرتروز زانو</strong> یک بیماری دژنراتیو است که با تحلیل
              غضروف مفصل همراه است. اگرچه درمان قطعی برای آرتروز وجود ندارد، اما
              با روش‌هایی مانند <strong>مکانوتراپی</strong>، کاهش وزن، تزریقات
              مفصلی و تمرینات هدفمند می‌توان علائم را کاهش داد و پیشرفت بیماری
              را به تأخیر انداخت.
            </p>
            <h3 className="text-2xl font-bold">درد کشکک و سندرم پاتلوفمورال</h3>
            <p>
              <strong>درد جلوی زانو</strong> که اغلب به‌عنوان سندرم پاتلوفمورال
              شناخته می‌شود، در ورزشکاران و افراد فعال بسیار شایع است. این مشکل
              معمولاً با ضعف عضلات چهارسر ران، عدم تعادل عضلانی و الگوهای حرکتی
              نادرست مرتبط است. تمرینات اصلاحی و مکانوتراپی می‌تواند به بهبود
              این وضعیت کمک کند.
            </p>
            <h3 className="text-2xl font-bold">
              مکانوتراپی چیست و چگونه عمل می‌کند؟
            </h3>
            <p>
              <strong>مکانوتراپی</strong> یا درمان مکانیکی، روشی است که با
              استفاده از دستگاه‌های خاص و تمرینات کنترل‌شده، به بازسازی بافت‌های
              آسیب‌دیده، کاهش التهاب و بهبود عملکرد مفصل کمک می‌کند. این روش
              به‌ویژه برای توانبخشی پس از آسیب‌های ورزشی و جراحی‌های زانو بسیار
              مؤثر است.
            </p>
            <p>
              در کلینیک آقای زانو، ما برنامه‌های درمانی را بر اساس آخرین
              یافته‌های علمی و با در نظر گرفتن نیازهای فردی هر بیمار طراحی
              می‌کنیم. هدف ما نه تنها کاهش درد، بلکه اصلاح ریشه‌ای عوامل
              ایجادکننده مشکل و پیشگیری از عود مجدد آسیب است.
            </p>
            <p>
              اگر شما نیز از <strong>درد زانو</strong>، تورم، خشکی یا ناپایداری
              رنج می‌برید، همین امروز با ما تماس بگیرید تا با ارزیابی دقیق،
              بهترین روش درمانی را برای شما انتخاب کنیم.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- CONTACT ---
function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 bg-accent" />
          <span className="text-sm font-bold text-accent">تماس با ما</span>
          <span className="h-[2px] w-10 bg-accent" />
        </div>
        <h2 className="text-3xl font-black sm:text-4xl">در ارتباط باشید</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
          <Link href="tel:+989132001925" className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <span>۰۹۱۳۲۰۰۱۹۲۵</span>
          </Link>
          <Link
            href="mailto:youremail@example.com"
            className="flex items-center gap-2"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span>info@mrknee.ir</span>
          </Link>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>اصفهان ، نصف جهان</span>
          </div>
        </div>
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { href: "https://ble.ir/", icon: BaleIcon, alt: "بله" },
            {
              href: "https://t.me/+989132001925",
              icon: TelegramIcon,
              alt: "تلگرام",
            },
            {
              href: "https://wa.me/+989132001925",
              icon: WhatsAppIcon,
              alt: "واتساپ",
            },
            {
              href: "https://instagram.com/mohammadjamali_official",
              icon: InstagramIcon,
              alt: "اینستاگرام",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 p-2.5 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
            >
              {typeof item.icon === "function" ? (
                <item.icon />
              ) : (
                <Image
                  src={item.icon}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  width={1000}
                  height={1000}
                />
              )}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// PAGE
// ============================================================
export default function Home() {
  return (
    <>
      <JsonLd faqItems={faqItems} />
      <main
        id="home"
        className="min-h-screen overflow-x-hidden bg-background text-foreground"
      >
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <AboutSection />
        <ExperiencesSection />
        <WorksSection />
        <BookSection />
        <TestimonialsSection />
        <TreatmentProcessSection />
        <TreatableConditionsSection />
        <NoSurgerySection />
        <CTASection />
        <FAQSection />
        <ArticlesSection />
        <SeoContentSection />
        <ContactSection />
      </main>
    </>
  );
}
