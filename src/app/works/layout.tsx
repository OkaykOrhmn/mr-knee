import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'نمونه کارهای آقای زانو | درمان و توانبخشی تخصصی زانو',
  description: 'گالری نمونه کارهای محمد جمالی (آقای زانو) شامل درمان‌های موفق بازتوانی زانو، تمرینات پیش فصل و همکاری با ورزشکاران حرفه‌ای و تیم‌های ملی.',
  keywords: 'نمونه کار آقای زانو, بازتوانی زانو, توانبخشی ورزشی, درمان ACL, محمد جمالی',
  openGraph: {
    title: 'نمونه کارهای تخصصی آقای زانو',
    description: 'بیش از ۵۰ نمونه کار موفق در حوزه درمان زانو، بدنسازی و توانبخشی ورزشکاران حرفه‌ای',
    images: ['/og-works.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   {children}</>
  );
}
