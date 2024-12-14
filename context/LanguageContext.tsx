"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Supported languages
type Language = "en" | "hi" | "ar" | "zh" | "ja";

// Centralized translation data (Optional, if you need it)
const translations: Record<string, Record<string, string>> = {
  en: { title: "Welcome!", content: "This is your multilingual app." },
  hi: { title: "स्वागत है!", content: "यह आपकी बहुभाषी ऐप है।" },
  ar: { title: "أهلا بك!", content: "هذا هو تطبيقك متعدد اللغات." },
  zh: { title: "欢迎！", content: "这是您的多语言应用程序。" },
  ja: { title: "ようこそ！", content: "これはあなたの多言語アプリです。" },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: typeof translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    // Retrieve the language from localStorage only on client-side
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage as Language); // Update language after component mounts
    } else {
      setLanguage("en"); // Default language
    }
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language); // Store selected language in localStorage
    }
  }, [language]);

  if (!language) {
    // Prevent rendering until the language is initialized
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
};
