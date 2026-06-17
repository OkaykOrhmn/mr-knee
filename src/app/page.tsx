import Image from "next/image";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  // Instagram,
  Send,
  // Linkedin,
  CheckCircle2,
  Headphones,
  Compass,
  Lightbulb,
  Clock,
  Quote,
  Star,
  Menu,
} from "lucide-react";
import mjLogo from "@/assets/images/mj-logo.png";
import heroPortrait from "@/assets/images/hero-portrait.png";
import courseSales from "@/assets/images/course-sales.jpg";
import courseManagement from "@/assets/images/course-management.jpg";
import courseImport from "@/assets/images/course-import.jpg";
import articleInnovation from "@/assets/images/article-innovation.jpg";
import articleSkills from "@/assets/images/article-skills.jpg";
import articleStrategy from "@/assets/images/article-strategy.jpg";

const navItems = [
  { label: "صفحه اصلی", href: "#home" },
  { label: "دوره‌های آموزشی", href: "#courses" },
  { label: "مشاوره", href: "#services" },
  { label: "مقالات", href: "#articles" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

const whyUs = [
  {
    icon: CheckCircle2,
    title: "تدوین طرح‌های تخصصی",
    desc: "تیم متخصص ما طرح‌های فنی و تجاری شما را با دقت تدوین می‌کند.",
  },
  {
    icon: Headphones,
    title: "همراهی ۲۴ ساعته با مشتری",
    desc: "پشتیبانی همیشگی در طول مسیر راه‌اندازی کسب‌وکار.",
  },
  {
    icon: Lightbulb,
    title: "طراحی نقشه راه متناسب",
    desc: "نقشه راهی منحصر به فرد متناسب با هدف شما.",
  },
  {
    icon: Compass,
    title: "تصمیم‌های هوشمند",
    desc: "نگاه واقع‌بینانه و دقیق برای تصمیم‌گیری در کسب‌وکار.",
  },
];

const courses = [
  {
    img: courseSales,
    title: "دوره آموزشی فروش حداکثری",
    hours: "۲۸ ساعت آموزش",
    desc: "در این دوره با تکنیک‌های نوین فروش و اصول مذاکره فروش حرفه‌ای آشنا می‌شوید.",
  },
  {
    img: courseManagement,
    title: "دوره فروش و مدیریت ساختار سازمانی",
    hours: "۲۸ ساعت آموزش",
    desc: "اصول مدیریت تیم فروش و طراحی ساختار سازمانی متناسب با اهداف.",
  },
  {
    img: courseImport,
    title: "دوره آموزشی واردات مستقیم از چین",
    hours: "۲۴ ساعت آموزش",
    desc: "از صفر تا صد واردات مستقیم، مذاکره با تامین‌کنندگان و ترخیص کالا.",
  },
];

const services = [
  { name: "Brand Book", desc: "طراحی هویت بصری برند، لوگو، رنگ و فونت‌بندی." },
  { name: "Business Plan", desc: "تدوین طرح کسب‌وکار جامع و قابل اجرا." },
  { name: "Marketing Plan", desc: "استراتژی بازاریابی و کانال‌های ارتباطی." },
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
];

const articles = [
  {
    img: articleInnovation,
    title: "افزایش بهره‌وری در محیط کار",
    date: "soroush_wp",
  },
  {
    img: articleSkills,
    title: "مهارت‌های لازم برای موفقیت شغلی",
    date: "soroush_wp",
  },
  {
    img: articleStrategy,
    title: "راهکارهای مدیریت استرس کاری",
    date: "soroush_wp",
  },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-2">
            <div className="grid h-12 w-12 place-items-center  rounded-lg bg-primary/80 text-primary-foreground font-black p-2">
              <Image
                src={mjLogo}
                alt="مشاور کسب و کار"
                className="h-full w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-black tracking-tight">
                Mr <span className="text-accent">KNEE</span>
              </div>
              <div className="text-[10px] text-muted-foreground">
                Dr Mohammad jamali
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/80 transition hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            ورود / ثبت نام
          </a>
          <button
            className="rounded-lg border border-border p-2 lg:hidden"
            aria-label="menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          {/* Text (RTL: right column visually) */}
          <div className="order-2 lg:order-1">
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
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              با بیش از ۱۰ سال تجربه در آسیب‌شناسی ورزشی، مکانوتراپی زانو و
              همکاری با تیم‌های ملی و لیگ برتر، به شما کمک می‌کنم تا درد را کاهش
              دهید، عملکرد زانوی خود را بازیابی کنید و با اطمینان به فعالیت‌های
              روزمره یا ورزش حرفه‌ای بازگردید.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
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
              </a>
            </div>
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
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* Orange ring */}
              <div className="absolute -left-2 bottom-6 h-40 w-40 rounded-full border-[14px] border-accent" />
              <span className="absolute -left-4 top-6 text-3xl font-black text-primary">
                ×
              </span>
              <span className="absolute right-6 top-2 text-3xl font-black text-primary">
                ×
              </span>
              {/* Blue blob */}
              <div className="absolute inset-4 overflow-hidden rounded-[42%_58%_38%_62%/55%_45%_55%_45%] bg-primary wave-pattern">
                <Image
                  src={heroPortrait}
                  alt="مشاور کسب و کار"
                  className="h-full w-full object-cover"
                  width={896}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground wave-pattern">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-accent" />
              <span className="text-sm font-bold text-accent">
                چرا محصول ما؟
              </span>
            </div>
            <h2 className="text-3xl font-black leading-snug sm:text-4xl">
              ما با ارائه خدمات تخصصی،
              <br />
              مسیر رشد شما را هموار می‌کنیم
            </h2>
            <p className="mt-6 text-sm leading-7 text-primary-foreground/80">
              تیم متخصص ما با سال‌ها تجربه در صنایع مختلف، بهترین راهکارهای
              مناسب کسب‌وکار شما را ارائه می‌دهد.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition hover:brightness-95"
            >
              مشاوره رایگان
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyUs.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        id="courses"
        className="bg-[color:var(--color-brand-soft)]/50 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-accent" />
                <span className="text-sm font-bold text-accent">
                  دوره‌های آموزشی
                </span>
              </div>
              <h2 className="text-3xl font-black sm:text-4xl">
                دوره‌های پیشنهادی برای رشد شما
              </h2>
            </div>
            <a href="#" className="text-sm font-bold text-primary">
              مشاهده همه →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.title}
                className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition hover:shadow-xl hover:shadow-primary/10"
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
                    {c.hours}
                  </div>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {c.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)]"
                  >
                    مشاهده دوره
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-accent" />
              <span className="text-sm font-bold text-accent">
                خدمات مشاوره ما
              </span>
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">
              سه ستون اصلی برای ساختن یک برند موفق
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.name}
                className={`relative overflow-hidden rounded-2xl p-7 ring-1 transition hover:-translate-y-1 ${
                  i === 1
                    ? "bg-primary text-primary-foreground ring-primary shadow-xl shadow-primary/20"
                    : "bg-[color:var(--color-brand-soft)] text-foreground ring-border"
                }`}
              >
                <div
                  className={`mb-3 text-xs font-bold ${i === 1 ? "text-accent" : "text-primary"}`}
                >
                  ۰{i + 1}
                </div>
                <h3 className="text-xl font-black">مشاوره {s.name}</h3>
                <p
                  className={`mt-3 text-sm leading-6 ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center gap-1.5 text-xs font-bold ${i === 1 ? "text-accent" : "text-primary"}`}
                >
                  مشاوره دریافت کنید
                  <ArrowLeft className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="about"
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
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-accent" />
                <span className="text-sm font-bold text-accent">
                  مقالات آموزشی
                </span>
              </div>
              <h2 className="text-3xl font-black sm:text-4xl">
                آخرین یادداشت‌های ما
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:shadow-xl hover:shadow-primary/10"
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
                  <div className="mb-2 text-xs text-muted-foreground">
                    @{a.date}
                  </div>
                  <h3 className="text-base font-bold leading-7">{a.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-[color:var(--color-brand-dark)] text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary font-black">
                  B
                </div>
                <div>
                  <div className="text-base font-black">
                    BOSS <span className="text-accent">COACH</span>
                  </div>
                  <div className="text-[10px] text-primary-foreground/60">
                    Business & Education
                  </div>
                </div>
              </div>
              <p className="text-sm leading-7 text-primary-foreground/70">
                مجموعه‌ای از مدرس‌ها در کنار شما برای تدوین و اجرای طرح‌های فنی
                و تجاری.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold">دسترسی سریع</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#home" className="hover:text-accent">
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#articles" className="hover:text-accent">
                    مقالات
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold">تماس با ما</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" /> شنبه تا پنجشنبه ۹ تا
                  ۱۸
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" /> ۰۲۱-۲۳۴۵۶۷۸
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" /> hello@bosscoach.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" /> تهران، خیابان آزادی
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold">شبکه‌های اجتماعی</h4>
              <div className="flex items-center gap-3">
                {[Send].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="social"
                    className="grid h-10 w-10 place-items-center rounded-full bg-primary/30 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-primary/20 p-4 text-xs leading-6 text-primary-foreground/70">
                نماد و مجوز الکترونیک <br />
                <span className="font-bold text-primary-foreground">
                  e-namad · samandehi
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} BOSS COACH · تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </div>
  );
}
