import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";

interface FeedbackScreenProps {
  onComplete: () => void;
  onHome: () => void;
  onBack: () => void;
}

// Android-safe SVG icons as inline components
const IconSearch = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconCard = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);
const IconClock = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconHelp = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconFrown = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);
const IconMsg = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const feedbackOptions = [
  { key: "feedback.option1", Icon: IconSearch, color: "#f97316" },
  { key: "feedback.option2", Icon: IconCard, color: "#3b82f6" },
  { key: "feedback.option3", Icon: IconClock, color: "#f59e0b" },
  { key: "feedback.option4", Icon: IconHelp, color: "#10b981" },
  { key: "feedback.option5", Icon: IconFrown, color: "#a855f7" },
  { key: "feedback.option6", Icon: IconMsg, color: "#06b6d4" },
];

export function FeedbackScreen({ onComplete, onHome, onBack }: FeedbackScreenProps) {
  const { t } = useLanguage();
  const [selectedFeedback, setSelectedFeedback] = useState<string[]>([]);
  const [showOtherModal, setShowOtherModal] = useState(false);
  const [otherText, setOtherText] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { video.muted = true; video.volume = 0; }
  }, []);

  const handleFeedbackToggle = (key: string) => {
    if (key === "feedback.option6") { setShowOtherModal(true); return; }
    setSelectedFeedback(prev =>
      prev.includes(key) ? prev.filter(f => f !== key) : [...prev, key]
    );
  };

  const handleOtherSubmit = () => {
    if (otherText.trim()) {
      if (!selectedFeedback.includes("feedback.option6"))
        setSelectedFeedback(prev => [...prev, "feedback.option6"]);
      setShowOtherModal(false);
    }
  };

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
          {t("feedback.title")}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-center mb-5" style={{ fontSize: "1.35rem", color: "rgba(255,255,255,0.86)", textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}>
          {t("feedback.subtitle")}
        </motion.p>

        {/* Grid */}
        <div
          className="grid grid-cols-2 w-full"
          style={{ gap: "0.85rem", marginBottom: "1rem", height: "43rem", flexShrink: 0, gridTemplateRows: "repeat(3, minmax(0, 1fr))" }}
        >
          {feedbackOptions.map((option, index) => {
            const isSelected = selectedFeedback.includes(option.key);
            return (
              <motion.button key={option.key}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                onClick={() => handleFeedbackToggle(option.key)}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center"
                style={{ padding: "0.7rem 0.7rem", minHeight: 0, border: isSelected ? "3px solid #fff" : "2px solid rgba(255,255,255,0.9)" }}>
                <div className="absolute inset-0 transition-all duration-300" style={{
                  background: isSelected ? "linear-gradient(135deg,#000 0%,#125740 100%)" : "rgba(255,255,255,0.92)"
                }} />
                <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: isSelected ? "#fff" : "#1e40af" }} />
                <div className="relative flex flex-col items-center justify-center gap-3">
                  <div style={{
                    color: isSelected ? "#fff" : option.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "64px", height: "64px",
                    borderRadius: "50%",
                    backgroundColor: isSelected ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.9)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }}>
                    <option.Icon />
                  </div>
                  <span className="font-black text-center" style={{ fontSize: "1.34rem", lineHeight: 1.14, color: isSelected ? "#fff" : "#000" }}>
                    {t(option.key)}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Submit */}
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          onClick={() => selectedFeedback.length > 0 && onComplete()}
          disabled={selectedFeedback.length === 0}
          className="w-full rounded-2xl font-black text-white"
          style={{
            marginTop: "auto",
            fontSize: "1.95rem", padding: "1rem 0",
            background: selectedFeedback.length > 0 ? "linear-gradient(135deg,#000 0%,#125740 100%)" : "#ccc",
            cursor: selectedFeedback.length > 0 ? "pointer" : "not-allowed",
            border: selectedFeedback.length > 0 ? "2px solid #fff" : "2px solid rgba(255,255,255,0.45)",
            boxShadow: "0 5px 18px rgba(0,0,0,0.25)"
          }}>
          {t("general.continue")}
        </motion.button>
      </div>

      {/* Other Modal */}
      <AnimatePresence>
        {showOtherModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 z-40 flex items-center justify-center p-8"
            onClick={() => setShowOtherModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 w-full relative">
              <button onClick={() => setShowOtherModal(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6 text-gray-600" />
              </button>
              <h3 style={{ fontSize: "2.8rem", fontWeight: 900, marginBottom: "1.5rem" }}>{t("feedback.modalTitle")}</h3>
              <textarea value={otherText} onChange={(e) => setOtherText(e.target.value)}
                placeholder={t("feedback.modalPlaceholder")}
                className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none mb-5"
                style={{ height: "180px", fontSize: "2rem" }} autoFocus />
              <button onClick={handleOtherSubmit} disabled={!otherText.trim()}
                className="w-full rounded-2xl font-black text-white"
                style={{ fontSize: "2.2rem", padding: "1.2rem", background: otherText.trim() ? "#125740" : "#ccc" }}>
                {t("feedback.submit")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
