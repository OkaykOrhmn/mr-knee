interface JsonLdProps {
  faqItems?: Array<{ q: string; a: string }>;
}

export default function JsonLd({ faqItems = [] }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://mrknee.ir/#organization",
        name: "کلینیک تخصصی آقای زانو",
        alternateName: "Mr. Knee Clinic",
        description:
          "درمان و توانبخشی تخصصی زانو با بیش از ۱۰ سال تجربه در زمینه آسیب‌شناسی ورزشی و مکانوتراپی.",
        url: "https://mrknee.ir",
        telephone: "+989132001925",
        email: "info@mrknee.ir",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IR",
        },
        founder: {
          "@type": "Person",
          name: "محمد جمالی",
          jobTitle: "متخصص توانبخشی زانو",
        },
        knowsAbout: [
          "زانو",
          "ACL",
          "مینیسک",
          "آرتروز",
          "مکانوتراپی",
          "توانبخشی ورزشی",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mrknee.ir/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "خانه",
            item: "https://mrknee.ir",
          },
          // { "@type": "ListItem", position: 2, name: "درمان زانو", item: "https://mrknee.ir/services" },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://mrknee.ir/#service",
        name: "مکانوتراپی و توانبخشی زانو",
        provider: { "@id": "https://mrknee.ir/#organization" },
        description:
          "ارائه خدمات تخصصی مکانوتراپی، تمرینات اصلاحی و توانبخشی برای درمان آسیب‌های زانو، ACL، مینیسک و آرتروز.",
        areaServed: "IR",
        serviceType: "Physiotherapy",
      },
      // ======== FAQ Page ========
      ...(faqItems.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": "https://mrknee.ir/#faq",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
