import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

const currencies = [
  {
    code: "USD",
    label: "USD",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    code: "KHR",
    label: "KHR",
    flag: "https://flagcdn.com/kh.svg",
  },
];
const languages = [
  { code: "en", label: "English" },
  { code: "km", label: "Khmer" },
];

const Topbar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [openCurrency, setOpenCurrency] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [openLanguage, setOpenLanguage] = useState(false);
  const currencyRef = useRef(null);
  const languageRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setOpenCurrency(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setOpenLanguage(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-[#006699] text-white text-sm px-4 py-2 relative z-50">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <span className="mr-0 md:mr-4">📞 (+855) 096 614 3648</span>
          <span className="mr-0 md:mr-4">📧 khmer23shop@gmail.com</span>
          <a href="/store" className="underline mt-1 md:mt-0">
            Our Store
          </a>
        </div>

        {/* Language / Currency Selectors */}
        <div className="flex items-center gap-4">
          {/* Currency */}
          <div className="relative" ref={currencyRef}>
            <button
              onClick={() => setOpenCurrency(!openCurrency)}
              className="flex items-center gap-2 bg-gray-100 text-black px-3 py-1 rounded-full border"
            >
              <img
                src={selectedCurrency.flag}
                alt={selectedCurrency.code}
                className="w-4 h-4 rounded-sm"
              />
              {selectedCurrency.label} <FaAngleDown className="text-xs" />
            </button>

            {openCurrency && (
              <div className="absolute right-0 bg-white text-black rounded shadow-lg w-28 py-2 z-50">
                {currencies.map((cur, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedCurrency(cur);
                      setOpenCurrency(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1 hover:bg-gray-100 text-sm"
                  >
                    <img
                      src={cur.flag}
                      alt={cur.code}
                      className="w-4 h-4 rounded-sm"
                    />
                    {cur.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language */}
          <div className="relative" ref={languageRef}>
            <button
              onClick={() => setOpenLanguage(!openLanguage)}
              className="bg-gray-100 px-3 py-1 rounded-full border text-black"
            >
              {selectedLanguage.label}
              <FaAngleDown className="inline ml-1 text-xs" />
            </button>

            {openLanguage && (
              <div className="absolute right-0 bg-white text-black rounded shadow-lg w-28 py-2 z-50">
                {languages.map((lang, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setOpenLanguage(false);
                    }}
                    className="w-full px-3 py-1 hover:bg-gray-100 text-sm text-left"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
