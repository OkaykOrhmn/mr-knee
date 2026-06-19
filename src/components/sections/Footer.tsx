"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import mjLogo from "@/assets/images/mj-logo.png";
import { navItems } from "./Header";
import BaleIcon from "@/assets/icons/bale.png";
import { TelegramIcon } from "@/assets/icons/Telegram";
import { WhatsAppIcon } from "@/assets/icons/WhatsApp";
import { InstagramIcon } from "@/assets/icons/Instagram";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[color:var(--color-brand-dark)] text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
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
            </a>
            <p className="text-sm leading-7 text-primary-foreground/70 pt-4">
              درمان تخصصی زانو بدون جراحی با بیش از ۱۰ سال تجربه در تیم‌های ملی
              و لیگ برتر.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {navItems.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">تماس با ما</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" /> شنبه تا پنجشنبه ۹ تا
                ۱۸
              </li>
              <a href="tel:+989132001925" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" /> ۹۸۹۱۳-۲۰۰-۱۹۲۵+
              </a>
              <a href="mailto:" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" /> hello@bosscoach.com
              </a>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" /> اصفهان ، نصف جهان
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold">شبکه‌های اجتماعی</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://ble.ir/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 p-2.5 place-items-center rounded-full bg-primary/30 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
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
                className="grid h-10 w-10 p-2.5 place-items-center rounded-full bg-primary/30 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                <TelegramIcon />
              </a>

              <a
                href="https://wa.me/+989132001925"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 p-2.5 place-items-center rounded-full bg-primary/30 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                <WhatsAppIcon />
              </a>

              <a
                href="https://instagram.com/mohammadjamali_official"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 p-2.5 place-items-center rounded-full bg-primary/30 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                <InstagramIcon />
              </a>
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
          © {new Date().getFullYear()} MR-KNEE (Mohammad Jamali) · تمامی حقوق
          محفوظ است.
        </div>
      </div>
    </footer>
  );
}
