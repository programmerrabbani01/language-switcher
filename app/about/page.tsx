"use client";

import { useLanguage } from "@/context/LanguageContext";

const AboutPage = () => {
  const { language, translations } = useLanguage();
  const { title, content } = translations[language]; // Fetch translation dynamically

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default AboutPage;
