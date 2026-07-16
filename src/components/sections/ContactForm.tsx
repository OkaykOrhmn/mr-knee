"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Send, Loader2, AlertCircle, CheckCircle } from "lucide-react";


// Server action ایمپورت شود (همان فایل actions/contact.ts)
import { sendContactEmail } from "@/app/actions/contact";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const result = await sendContactEmail(formData);
      setStatus("success");
      setStatusMessage(result.message);
      setFormData({ name: "",phone: "", email: "", content: "" }); // پاک کردن فرم
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
      setStatus("error");
      setStatusMessage( error.message ??  "خطایی رخ داد. لطفاً دوباره تلاش کنید.");
      console.log(error);
    }
  };

  return (
     <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-card p-8 shadow-lg ring-1 ring-border"
          >
            <h3 className="mb-6 text-xl font-bold">ارسال پیام</h3>

            <form onSubmit={handleSubmit} className="space-y-5 text-start" noValidate>
              {/* فیلد نام */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">نام شما</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="نام و نام خانوادگی"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              {/* فیلد ایمیل */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">ایمیل شما</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@mail.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">شماره شما</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+98 913 123 4567"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  dir="ltr"
                />
              </div>

              {/* فیلد پیام */}
              <div>
                <label htmlFor="content" className="mb-1.5 block text-sm font-medium">متن پیام</label>
                <textarea
                  id="content"
                  name="content"
                  rows={4}
                  value={formData.content}
                  onChange={handleChange}
                  required
                  
                  placeholder="پیام خود را بنویسید..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-y"
                ></textarea>
              </div>

              {/* دکمه ارسال */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition hover:bg-[color:var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    ارسال پیام
                  </>
                )}
              </button>

              {/* پیام‌های بازخورد */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-700 border border-green-200"
                >
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700 border border-red-200"
                >
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
  );
}

export default ContactForm;