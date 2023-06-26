import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
  const languageContextValue = useContext(LanguageContext);

  if (languageContextValue === null) {
    return null;
  }

  const { language, setLanguage } = languageContextValue;

  const languages = [
    { name: "english", code: "en" },
    { name: "arabic", code: "ar" },
    { name: "chinese", code: "zh" },
    { name: "dutch", code: "nl" },
    { name: "malayalam", code: "ml" },
    { name: "french", code: "fr" },
    { name: "spanish", code: "es" },
  ];

  const languageOptions = languages.map((language) => (
    <option key={language.code} value={language.code}>
      {language.name}
    </option>
  ));

  const handleSelect = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <footer className="h-52 border-t border-black p-2">
      <select
        value={language}
        onChange={handleSelect}
        className="border border-black mb-4 font-noto-sans-georgian capitalize"
      >
        {languageOptions}
      </select>
      <div className="font-domine w-fit underline hover:no-underline cursor-pointer">
        Back to top
      </div>
      <div className="container mx-auto px-2">
        <div className="text-center mt-8 font-noto-sans-georgian">
          The Morning Post &copy; 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
