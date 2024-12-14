"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value as typeof language;
    setLanguage(selectedLanguage);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select" className="mr-2">
        Select Language:
      </label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
        className="p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ar">Arabic</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
