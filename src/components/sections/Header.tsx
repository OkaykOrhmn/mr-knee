"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const mjLogo = "/mj-logo.webp";

export const navItems = [
  // { label: "صفحه اصلی", href: "#home" },
  // { label: "چرا Mr. Knee؟", href: "#why-us" },
  { label: "خدمات تخصصی", href: "/#services" },
  { label: "سوابق حرفه‌ای", href: "/#experiences" },
  { label: "نمونه کار‌ها", href: "/works" },
  // { label: "کتاب من", href: "#book" },
  { label: "فرآیند درمان", href: "/#treatment-process" },
  { label: "بیماری‌های قابل درمان", href: "/#treatable-conditions" },
  // { label: "سوالات متداول", href: "#faq" },
  { label: "آخرین مقالات", href: "/#articles" },
];

export const navItemsMobile = [
  { label: "صفحه اصلی", href: "/#home" },
  { label: "چرا Mr. Knee؟", href: "/#why-us" },
  { label: "خدمات تخصصی", href: "/#services" },
  { label: "سوابق حرفه‌ای", href: "/#experiences" },
  { label: "نمونه کار‌ها", href: "/works" },
  { label: "کتاب من", href: "/#book" },
  { label: "فرآیند درمان", href: "/#treatment-process" },
  { label: "بیماری‌های قابل درمان", href: "/#treatable-conditions" },
  { label: "سوالات متداول", href: "/#faq" },
  { label: "آخرین مقالات", href: "/#articles" },
];

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-background/50 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="rounded-lg border border-border/60 bg-white/10 p-2 backdrop-blur-sm transition hover:bg-white/20 lg:hidden"
            aria-label="open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/#home" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -8, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="grid h-12 w-12 place-items-center rounded-lg bg-primary/80 text-primary-foreground font-black p-2"
            >
              <Image
                src={mjLogo}
                alt="مشاور کسب و کار"
                className="h-full w-full object-cover"
                width={1000}
                height={1000}
              />
            </motion.div>
            <div className="leading-tight">
              <div className="text-sm font-black tracking-tight">
                Mr <span className="text-accent">KNEE</span>
              </div>
              <div className="text-[10px] text-muted-foreground">
                Dr Mohammad jamali
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
            تماس با من
          </a>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay & Panel */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Dark / Grey Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer Panel - slides from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full w-[300px] max-w-[80vw] bg-background/95 shadow-2xl backdrop-blur-md"
            >
              <div className="flex h-full flex-col">
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-border/40 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/80 text-primary-foreground font-black p-1.5">
                      <Image
                        src={mjLogo}
                        alt="مشاور کسب و کار"
                        className="h-full w-full object-cover"
                        width={400}
                        height={400}
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
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="rounded-full p-1.5 transition hover:bg-muted"
                    aria-label="close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Drawer Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-6">
                  <ul className="space-y-1">
                    {navItemsMobile.map((n, index) => (
                      <motion.li
                        key={n.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <a
                          href={n.href}
                          onClick={() => setIsDrawerOpen(false)}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
                        >
                          {n.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Drawer Footer */}
                <div className="border-t border-border/40 px-5 py-4">
                  <a
                    href="#contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                  >
                    تماس با من
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
