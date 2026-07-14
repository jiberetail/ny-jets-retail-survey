import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";

interface LanguageLocationScreenProps {
  onContinue: () => void;
  onHome: () => void;
  onBack: () => void;
}

const languages = [
  { code: "en", name: "English", flagImg: "us" },
  { code: "es", name: "Español", flagImg: "es" },
  { code: "de", name: "Deutsch", flagImg: "de" },
  { code: "pt", name: "Português", flagImg: "br" },
];

const locations = [
  { id: "us", labelKey: "country.us", flag: "us" },
  { id: "ca", labelKey: "country.ca", flag: "ca" },
  { id: "de", labelKey: "country.de", flag: "de" },
  { id: "uk", labelKey: "country.uk", flag: "gb-eng" },
];

const mexicanStates = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
  "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato",
  "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León",
  "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
  "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas",
  "Ciudad de México"
];

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

export function LanguageLocationScreen({ onContinue, onHome, onBack }: LanguageLocationScreenProps) {
  const { language, setLanguage, t } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string>("");
  const [step, setStep] = useState<"language" | "location">("language");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to be muted
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  }, []);

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    setLanguage(code as "en" | "es" | "de" | "pt");
    setTimeout(() => {
      setStep("location");
    }, 500);
  };

  const handleLocationSelect = (id: string) => {
    setSelectedLocation(id);
    setSelectedState(""); // Reset state selection when country changes

    if (id !== "us") {
      setTimeout(() => {
        onContinue();
      }, 400);
    }
  };

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    // Auto-continue after state selection
    setTimeout(() => {
      onContinue();
    }, 400);
  };

  const requiresStateSelection = selectedLocation === "us";
  const stateList = usStates;

  const handleBackButton = () => {
    if (step === "location") {
      // On location step, go back to language step
      setStep("language");
    } else {
      // On language step, go back to welcome screen
      onBack();
    }
  };

  return (
    <div className="relative h-full w-full bg-white overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        onLoadedMetadata={(e) => {
          e.currentTarget.muted = true;
          e.currentTarget.volume = 0;
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Light overlay for better contrast */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(18,87,64,0.16) 42%, rgba(0,0,0,0.28))" }} />
      <SurveyNav onBack={handleBackButton} onHome={onHome} />

      {/* Jets Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 right-0 z-20 flex justify-center"
        style={{ top: "0px" }}
      >
        <img src={logoSrc} alt="Jets" style={{ width: "46%", objectFit: "contain" }} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center px-8" style={{ paddingTop: "36%" }}>
        {step === "language" ? (
          <motion.div
            key="language"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-black text-white text-center mb-3"
              style={{ fontSize: "4.25rem", textShadow: "0 4px 18px rgba(0,0,0,0.65)" }}
            >
              {t("lang.selectLanguage")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-white mb-6 font-semibold"
              style={{ fontSize: "2.15rem", textShadow: "0 3px 12px rgba(0,0,0,0.7)" }}
            >
              {t("lang.chooseLanguage")}
            </motion.p>

            <div className="flex flex-col gap-4 w-full">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className="relative overflow-hidden rounded-xl"
                  style={{ height: "9rem" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 transition-all duration-300 shadow-lg" style={{
                    background: selectedLanguage === lang.code
                      ? "linear-gradient(135deg, #000000 0%, #125740 100%)"
                      : "rgba(255,255,255,0.93)",
                    border: selectedLanguage === lang.code ? "3px solid #fff" : "3px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
                  }} />
                  <div className="absolute left-0 top-0 bottom-0 w-3 transition-all duration-300" style={{
                    background: selectedLanguage === lang.code ? "#fff" : "#1e40af",
                  }} />
                  <div className="relative h-full flex items-center justify-center gap-5">
                    <img src={`https://flagcdn.com/w80/${lang.flagImg}.png`} alt={lang.name} style={{ width: "3rem", height: "2.1rem", objectFit: "cover", borderRadius: "4px" }} />
                    <span className="font-black tracking-tight transition-all duration-300" style={{
                      fontSize: "2.8rem",
                      color: selectedLanguage === lang.code ? "#fff" : "#000",
                    }}>
                      {lang.name}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="location"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-black text-white text-center mb-3"
              style={{ fontSize: "4.25rem", textShadow: "0 4px 18px rgba(0,0,0,0.65)" }}
            >
              {t("lang.selectLocation")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-white mb-6 font-semibold"
              style={{ fontSize: "2.15rem", textShadow: "0 3px 12px rgba(0,0,0,0.7)" }}
            >
              {t("lang.chooseCountry")}
            </motion.p>

            <div className="flex flex-col gap-4 w-full mb-6">
              {locations.map((location, index) => (
                <div key={location.id}>
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    onClick={() => handleLocationSelect(location.id)}
                    className="relative overflow-hidden rounded-xl w-full"
                    style={{ height: "8.5rem" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 transition-all duration-300 shadow-lg" style={{
                      background: selectedLocation === location.id
                        ? "linear-gradient(135deg, #000000 0%, #125740 100%)"
                        : "rgba(255,255,255,0.94)",
                      border: selectedLocation === location.id ? "3px solid #fff" : "3px solid rgba(255,255,255,0.9)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
                    }} />
                    <div className="absolute left-0 top-0 bottom-0 w-3 transition-all duration-300" style={{
                      background: selectedLocation === location.id ? "#fff" : "#1e40af",
                    }} />
                    <div className="relative h-full flex items-center justify-center gap-5">
                      <img src={`https://flagcdn.com/w80/${location.flag}.png`} alt={t(location.labelKey)} style={{ width: "3rem", height: "2.1rem", objectFit: "cover", borderRadius: "4px" }} />
                      <span className="font-black tracking-tight transition-all duration-300" style={{
                        fontSize: "2.75rem",
                        color: selectedLocation === location.id ? "#fff" : "#000",
                      }}>
                        {t(location.labelKey)}
                      </span>
                    </div>
                  </motion.button>

                  {/* State dropdown appears inline under US button */}
                  {location.id === "us" && requiresStateSelection && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3"
                    >
                      <select
                        value={selectedState}
                        onChange={(e) => handleStateSelect(e.target.value)}
                        className="w-full px-6 bg-white border-2 border-gray-300 rounded-xl text-black appearance-none cursor-pointer focus:outline-none shadow-lg"
                        style={{
                          height: "6.2rem",
                          fontSize: "2.2rem",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1.5rem center",
                          backgroundSize: "2rem",
                        }}
                      >
                        <option value="">{t("lang.selectStatePlaceholder")}</option>
                        {stateList.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
