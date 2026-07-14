import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";

interface DiscountScreenProps {
  onComplete: () => void;
  onHome: () => void;
  onBack: () => void;
}

export function DiscountScreen({ onComplete, onHome, onBack }: DiscountScreenProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (video) { video.muted = true; video.volume = 0; }
  }, []);

  const handleSubmit = () => {
    if (email.includes("@")) {
      onComplete();
    }
  };

  return (
    <div className="relative h-full w-full bg-white overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        onLoadedMetadata={(e) => { e.currentTarget.muted = true; e.currentTarget.volume = 0; }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "rgba(18,87,64,0.15)" }} />
      <SurveyNav onBack={onBack} onHome={onHome} />

      {/* Logo */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="absolute left-0 right-0 z-20 flex justify-center" style={{ top: 0 }}>
        <img src={logoSrc} alt="Jets" style={{ width: "55%", objectFit: "contain" }} />
      </motion.div>

      {/* Content — sits right under logo */}
      <div className="relative z-10 h-full flex flex-col items-center px-8"
        style={{ paddingTop: "50%", paddingBottom: "12%", gap: "5%" }}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="font-black text-white text-center leading-tight w-full"
          style={{ fontSize: "4.5rem" }}>
          {t("discount.titleLine1")}<br />{t("discount.titleLine2")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-white font-semibold text-center w-full"
          style={{ fontSize: "2.6rem" }}>
          {t("discount.emailPrompt")}
        </motion.p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("discount.emailPlaceholder")}
          className="w-full rounded-xl bg-white border-2 border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all shadow-sm"
          style={{ fontSize: "2.4rem", padding: "1.4rem 1.5rem" }}
        />

        <button
          onClick={handleSubmit}
          disabled={!email.includes("@")}
          className="w-full font-black text-white rounded-xl transition-all"
          style={{
            fontSize: "2.6rem",
            padding: "1.6rem 0",
            backgroundColor: email.includes("@") ? "#125740" : "rgba(18,87,64,0.4)",
            border: "2px solid white",
          }}
        >
          {t("general.continue")}
        </button>

      </div>
    </div>
  );
}
