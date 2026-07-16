"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  content: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email,phone, content } = data;

  // اعتبارسنجی ساده سمت سرور
  if (!name || !email || !content || !phone) {
    throw new Error("لطفاً تمام فیلدها را پر کنید.");
  }

  // ساخت transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // محتوای ایمیل
  const mailOptions = {
    from: `"وب‌سایت آقای زانو" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `پیام جدید از طرف ${name}`,
    html: `
      <div dir="rtl" style="font-family:Tahoma, sans-serif; max-width:600px; margin:auto; padding:20px; background:#f9f9f9; border-radius:8px;">
        <h2 style="color:#2b6cb0;">📩 پیام جدید از فرم تماس</h2>
        <p><strong>نام:</strong> ${name}</p>
        <p><strong>ایمیل:</strong> ${email}</p>
        <p><strong>شماره موبایل:</strong> ${phone}</p>
        <p><strong>پیام:</strong></p>
        <p style="background:white; padding:15px; border-radius:8px;">${content}</p>
        <hr />
        <small>این ایمیل از وب‌سایت شما ارسال شده است.</small>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "پیام شما با موفقیت ارسال شد." };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("خطا در ارسال ایمیل. لطفاً دوباره تلاش کنید.");
  }
}