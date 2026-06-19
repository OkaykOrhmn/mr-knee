"use client";

import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Headphones,
  Compass,
  Lightbulb,
  Clock,
  Quote,
  Star,
  PlusIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  fadeUp,
  fadeRightRTL,
  fadeLeftRTL,
  stagger,
  zoomIn,
} from "@/lib/animations";
import { FaEnvelope, FaPhone } from "react-icons/fa";

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

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-background text-foreground">
      {/* HERO */}
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
            <h1 className="text-2xl font-bold text-[color:var(--color-brand-dark)] sm:text-3xl pt-2">
              با محمد جمالی (آقای زانو)
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              با بیش از ۱۰ سال تجربه در آسیب‌شناسی ورزشی، مکانوتراپی زانو و
              همکاری با تیم‌های ملی و لیگ برتر، به شما کمک می‌کنم تا درد را کاهش
              دهید، عملکرد زانوی خود را بازیابی کنید و با اطمینان به فعالیت‌های
              روزمره یا ورزش حرفه‌ای بازگردید.
            </p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-[color:var(--color-brand-dark)]"
              >
                دوره‌های آموزشی
                <ArrowLeft className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10">
                  <Phone className="h-4 w-4" />
                </span>
                مشاوره رایگان
              </a> */}

              <a
                href="https://ble.ir/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-2.5 rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
              >
                <Image
                  src={BaleIcon}
                  alt="بله"
                  className="h-full w-full object-cover"
                  width={1000}
                  height={1000}
                />
              </a>
              <a
                href="https://t.me/+989132001925"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-2 rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
              >
                <TelegramIcon />
              </a>

              <a
                href="https://wa.me/+989132001925"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-2 rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
              >
                <WhatsAppIcon />
              </a>

              <a
                href="https://instagram.com/mohammadjamali_official"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary p-2 rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
              >
                <InstagramIcon />
              </a>

              <a
                href="mailto:youremail@example.com"
                className="bg-primary p-2.5 rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
              >
                <FaEnvelope size={30} />
              </a>

              <a
                href="tel:+989132001925"
                className="bg-primary p-2.5 rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
              >
                <FaPhone size={30} />
              </a>
            </motion.div>
            <div
              className="mt-10 hidden gap-1 text-primary lg:flex"
              aria-hidden
            >
              <ArrowLeft className="h-4 w-4" />
              <ArrowLeft className="h-4 w-4 opacity-70" />
              <ArrowLeft className="h-4 w-4 opacity-50" />
              <ArrowLeft className="h-4 w-4 opacity-30" />
              <ArrowLeft className="h-4 w-4 opacity-15" />
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

      {/* WHY US */}
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
              <span className="text-sm font-bold text-accent">
                چرا Mr. Knee؟
              </span>
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
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
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

      {/* EXPERIENCES */}
      <section
        id="experiences"
        className="bg-[color:var(--color-brand-soft)]/50 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-accent" />
                <span className="text-sm font-bold text-accent">
                  سوابق حرفه‌ای
                </span>
              </div>
              <h2 className="text-3xl font-black sm:text-4xl">
                بیش از یک دهه تجربه در ورزش و درمان تخصصی زانو
              </h2>
            </div>
            <a href="#about" className="text-sm font-bold text-primary">
              مشاهده رزومه →
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {experiences.map((c) => (
              <motion.article
                variants={fadeUp}
                key={c.title}
                className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {c.period}
                  </div>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
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
                className={`group relative overflow-hidden rounded-2xl p-7 ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
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

      {/* BOOK */}
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
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-primary-foreground backdrop-blur">
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
                <div className="mt-10 flex flex-wrap gap-4 ">
                  <a
                    href={book.buyLink}
                    className=" inline-flex items-center gap-2 rounded-full bg-accent px-24 py-3 font-bold text-accent-foreground transition hover:brightness-95"
                  >
                    خرید کتاب
                    <ArrowLeft className="h-4 w-4" />
                  </a>
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

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="bg-[color:var(--color-brand-soft)]/50 py-20"
      >
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
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary font-black">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                  <div className="ms-auto flex text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
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

      {/* WORKS */}
      <section id="works" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
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
            <a href="#about" className="text-sm font-bold text-primary">
              مشاهده همه
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-5"
          >
            {works.map((a) => (
              <motion.article
                variants={fadeUp}
                key={a.title}
                className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold leading-7">{a.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {a.date}
                  </p>
                </div>
              </motion.article>
            ))}
            <motion.article
              variants={fadeUp}
              className="flex flex-col h-full items-center justify-center rounded-2xl border-2 border-dashed border-border text-sm font-bold text-primary transition hover:border-primary/40 bg-primary/10 hover:shadow-xl hover:shadow-primary/5 cursor-pointer p-8 gap-4"
            >
              <PlusIcon />
              {/* مشاهده بیشتر */}
              <h6 className="text-lg font-bold">مشاهده بیشتر</h6>
            </motion.article>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
