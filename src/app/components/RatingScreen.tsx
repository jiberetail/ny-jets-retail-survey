import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";

interface RatingScreenProps {
  onComplete: () => void;
  onHome: () => void;
  onBack: () => void;
}

// Android-safe SVG icons
const IconSmile = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 13s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);
const IconMeh = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="8" y1="15" x2="16" y2="15"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);
const IconFrown = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);

const ratings = [
  { id: "satisfied", labelKey: "rating.satisfied", Icon: IconSmile, color: "#22c55e", bg: "linear-gradient(135deg,#16a34a,#22c55e)" },
  { id: "neutral", labelKey: "rating.neutral", Icon: IconMeh, color: "#9ca3af", bg: "linear-gradient(135deg,#6b7280,#9ca3af)" },
  { id: "dissatisfied", labelKey: "rating.dissatisfied", Icon: IconFrown, color: "#ef4444", bg: "linear-gradient(135deg,#dc2626,#ef4444)" },
];

export function RatingScreen({ onComplete, onHome, onBack }: RatingScreenProps) {
  const { t } = useLanguage();
  const [selectedRating, setSelectedRating] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { video.muted = true; video.volume = 0; }
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        onLoadedMetadata={(e) => { e.currentTarget.muted = true; e.currentTarget.volume = 0; }}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "rgba(18,87,64,0.15)" }} />
      <SurveyNav onBack={onBack} onHome={onHome} />

      {/* Logo */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="absolute left-0 right-0 z-20 flex justify-center" style={{ top: 0 }}>
        <img src={logoSrc} alt="Jets" style={{ width: "43%", objectFit: "contain" }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center px-6"
        style={{ paddingTop: "32%", paddingBottom: "3.1rem" }}>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-black text-white text-center mb-2 leading-tight" style={{ fontSize: "2.65rem", textShadow: "0 4px 18px rgba(0,0,0,0.7)" }}>
          {t("rating.title")}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-center mb-5" style={{ fontSize: "1.35rem", color: "rgba(255,255,255,0.86)", textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}>
          {t("rating.subtitle")}
        </motion.p>

        {/* Rating options */}
        <div className="flex flex-col w-full" style={{ gap: "1.15rem", marginBottom: "1rem", minHeight: 0 }}>
          {ratings.map((rating, index) => {
            const isSelected = selectedRating === rating.id;
            return (
              <motion.button key={rating.id}
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => setSelectedRating(rating.id)}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-xl shadow-lg flex flex-row items-center"
                style={{ height: "11.45rem", padding: "1.2rem 1.6rem", gap: "1.35rem", border: isSelected ? "3px solid #fff" : "2px solid rgba(255,255,255,0.8)" }}>
                <div className="absolute inset-0 transition-all duration-300" style={{
                  background: isSelected ? rating.bg : "rgba(255,255,255,0.76)",
                  backdropFilter: "blur(2px)"
                }} />
                <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: isSelected ? "#fff" : "#1e40af" }} />
                <div className="relative flex-shrink-0 rounded-full flex items-center justify-center"
                  style={{
                    width: "88px", height: "88px",
                    backgroundColor: isSelected ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.9)",
                    color: isSelected ? "#fff" : rating.color,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }}>
                  <rating.Icon />
                </div>
                <span className="relative font-black" style={{ fontSize: "2.72rem", lineHeight: 1.05, color: isSelected ? "#fff" : "#000" }}>
                  {t(rating.labelKey)}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Submit */}
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          onClick={() => selectedRating && onComplete()}
          disabled={!selectedRating}
          className="w-full rounded-2xl font-black text-white"
          style={{
            marginTop: "auto",
            fontSize: "1.95rem", padding: "1rem 0",
            background: selectedRating ? "linear-gradient(135deg,#000 0%,#125740 100%)" : "#ccc",
            cursor: selectedRating ? "pointer" : "not-allowed",
            border: selectedRating ? "2px solid #fff" : "2px solid rgba(255,255,255,0.45)",
            boxShadow: "0 5px 18px rgba(0,0,0,0.25)"
          }}>
          {t("rating.submit")}
        </motion.button>
      </div>
    </div>
  );
}
