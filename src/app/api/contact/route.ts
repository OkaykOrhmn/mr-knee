import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, content } = req.body;

  if (!name || !email || !content) {
    return res.status(400).json({ error: "تمام فیلدها الزامی هستند." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT === "465",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"وب‌سایت" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `پیام جدید از ${name}`,
      html: `<div dir="rtl">... (همان قالب ایمیل) ...</div>`,
    });

    res.status(200).json({ success: true, message: "پیام ارسال شد." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "خطا در ارسال ایمیل." });
  }
}