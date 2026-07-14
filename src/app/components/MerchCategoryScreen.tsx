import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";
import jerseysImg from "../../imports/05-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import hatsImg from "../../imports/01-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import shirtsImg from "../../imports/13-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import accessoriesImg from "../../imports/12-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";

interface MerchCategoryScreenProps {
  sport: string;
  teamName: string;
  teamLogo: string | null;
  cartCount: number;
  onComplete: (category: string) => void;
  onGoToCart: () => void;
  onHome: () => void;
  onBack: () => void;
}

export function MerchCategoryScreen({ sport, teamName, teamLogo, cartCount, onComplete, onGoToCart, onHome, onBack }: MerchCategoryScreenProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to be muted
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    onComplete(categoryId);
  };

  const categories = [
    { id: "jerseys", labelKey: "merch.jerseys", image: jerseysImg },
    { id: "hats", labelKey: "merch.hats", image: hatsImg },
    { id: "shirts", labelKey: "merch.shirts", image: shirtsImg },
    { id: "accessories", labelKey: "merch.accessories", image: accessoriesImg },
  ];

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
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(18,87,64,0.12) 45%, rgba(0,0,0,0.34))" }} />
      <SurveyNav onBack={onBack} onHome={onHome} />

      {/* Jets Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 right-0 z-20 flex justify-center"
        style={{ top: 0 }}
      >
        <img src={logoSrc} alt="Jets" style={{ width: "48%", objectFit: "contain" }} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center px-6" style={{ paddingTop: "36%", paddingBottom: "11%" }}>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-black text-white text-center leading-tight w-full"
          style={{ fontSize: "3.2rem", marginBottom: "4%", textShadow: "0 4px 18px rgba(0,0,0,0.7)" }}
        >
          {t("merch.categoryTitle")}
        </motion.h2>

        {/* Categories Grid - 2x2, fills remaining space */}
        <div className="grid grid-cols-2 w-full" style={{ gap: "3%", flex: 1 }}>
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              onClick={() => handleCategorySelect(category.id)}
              className="relative flex flex-col"
              whileTap={{ scale: 0.95 }}
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: "#ffffff", border: "3px solid rgba(255,255,255,0.95)", flex: 1, width: "100%" }}>
                <div className="absolute inset-0 p-3 flex items-center justify-center">
                  <img src={category.image} alt={t(category.labelKey)} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Label */}
              <div className="text-center font-black text-white tracking-tight" style={{ fontSize: "2.45rem", marginTop: "3%", textShadow: "0 3px 12px rgba(0,0,0,0.85)" }}>
                {t(category.labelKey)}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Cart shortcut */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center">
        {cartCount > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            onClick={onGoToCart}
            style={{ backgroundColor: "#125740", border: "2px solid #fff", borderRadius: "16px", padding: "0.9rem 2rem", color: "#fff", fontSize: "1.8rem", fontWeight: 900, whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          >
            🛒 {t("items.cartButton")} ({cartCount})
          </motion.button>
        )}
      </div>
    </div>
  );
}
