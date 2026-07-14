import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";

interface ThankYouScreenProps {
  onReset: () => void;
}

export function ThankYouScreen({ onReset }: ThankYouScreenProps) {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState(60);
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = bgVideoRef.current;
    if (video) { video.muted = true; video.volume = 0; }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(interval); setTimeout(() => onReset(), 0); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [onReset]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video ref={bgVideoRef} autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          onLoadedMetadata={(e) => { e.currentTarget.muted = true; e.currentTarget.volume = 0; }}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(18,87,64,0.15)" }} />
      </div>

      <motion.div
        className="relative z-40 h-full flex flex-col items-center text-center"
        style={{ padding: "0 8% 4.1rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
          style={{ width: "100%" }}
        >
          <img src={logoSrc} alt="Jets" style={{ width: "56%", objectFit: "contain" }} />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col items-center"
          style={{ marginTop: "8%", gap: "1.85rem" }}
        >
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: "8rem",
              height: "8rem",
              color: "#ffffff",
              background: "linear-gradient(135deg,#16a34a,#125740)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
            }}
          >
            <CheckCircle2 style={{ width: "5.1rem", height: "5.1rem" }} />
          </div>

          <h1 className="font-black text-white"
            style={{ fontSize: "8.1rem", lineHeight: 0.95, textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
            {t("thankyou.title")}
          </h1>

          <p className="font-bold text-white"
            style={{ fontSize: "3.45rem", lineHeight: 1.12, maxWidth: "44rem", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
            {t("thankyou.message")}
          </p>
        </motion.div>

        {/* Bottom — countdown + close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center w-full"
          style={{ gap: "1.05rem", marginTop: "auto" }}
        >
          <p className="text-white/80 font-semibold" style={{ fontSize: "1.95rem" }}>
            {t("thankyou.countdown")} <span className="text-white font-black">{countdown}</span> {t("thankyou.seconds")}
          </p>

          <button
            onClick={onReset}
            className="text-white font-black rounded-2xl hover:shadow-lg transition-all w-full"
            style={{ fontSize: "3.05rem", padding: "1.55rem 0", background: "linear-gradient(135deg, #000000 0%, #125740 100%)", border: "2px solid rgba(255,255,255,0.4)" }}
          >
            {t("general.close")}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
