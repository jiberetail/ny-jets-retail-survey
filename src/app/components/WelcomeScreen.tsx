import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import videoSrc from "../../imports/grok-video-9e94842e-7a91-4f32-8ace-1e4f9bb82a22.mp4";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { video.muted = true; video.volume = 0; }
  }, []);

  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.75 }}
        onLoadedMetadata={(e) => { e.currentTarget.muted = true; e.currentTarget.volume = 0; }}
        onPlay={(e) => { e.currentTarget.muted = true; e.currentTarget.volume = 0; }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient — heavy dark top, clear window in middle, heavy dark bottom */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.88) 12%, rgba(0,0,0,0.0) 28%, rgba(0,0,0,0.0) 48%, rgba(0,0,0,0.82) 65%, rgba(0,0,0,0.95) 100%)" }} />


      {/* Main layout — centered */}
      <div className="absolute inset-0 z-20 flex flex-col items-center" style={{ padding: "2% 8% 4%" }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "68%", marginTop: "-10%" }}
        >
          <img src={logoSrc} alt="Jets" style={{ width: "100%", objectFit: "contain" }} />
        </motion.div>

        {/* Spacer pushes everything below down */}
        <div style={{ flex: 1 }} />

        {/* Headline — sits just above button */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "#ffffff",
            fontSize: "6.6rem",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: 0,
            textTransform: "uppercase",
            textShadow: "0 4px 24px rgba(0,0,0,0.9)",
            whiteSpace: "nowrap",
            textAlign: "center",
            marginBottom: "3%",
          }}
        >
          ORDER IT HERE,<br />SHIP IT HOME
        </motion.h1>

        {/* Button + rows */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5%" }}
        >
          {/* Lightly filled green button */}
          <button
            onClick={onStart}
            style={{
              width: "80%",
              padding: "2% 0",
              backgroundColor: "rgba(18,87,64,0.45)",
              border: "2px solid #ffffff",
              borderRadius: "10px",
              color: "#ffffff",
              fontSize: "2rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            FIND MY ITEMS
          </button>

          {/* Feature rows */}
          <div style={{ display: "inline-flex", flexDirection: "column", alignSelf: "center" }}>
            {[
              { icon: "🔍", label: "Find the Item You Love" },
              { icon: "🛒", label: "Scan & Purchase" },
              { icon: "📦", label: "Get it Delivered" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.8% 0",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none",
                whiteSpace: "nowrap",
              }}>
                <span style={{ fontSize: "2.15rem", flexShrink: 0, width: "2.5rem" }}>{item.icon}</span>
                <span style={{ color: "#ffffff", fontSize: "2.15rem", fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
