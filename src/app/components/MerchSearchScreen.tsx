import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";
import jersey01 from "../../imports/01-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import jersey02 from "../../imports/02-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey03 from "../../imports/03-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey04 from "../../imports/04-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import jersey05 from "../../imports/05-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import jersey06 from "../../imports/06-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey07 from "../../imports/07-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey08 from "../../imports/08-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey09 from "../../imports/09-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey10 from "../../imports/10-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey11 from "../../imports/11-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey12 from "../../imports/12-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import jersey13 from "../../imports/13-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import jersey14 from "../../imports/14-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey15 from "../../imports/15-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey16 from "../../imports/16-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey17 from "../../imports/17-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey18 from "../../imports/18-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey19 from "../../imports/19-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import jersey20 from "../../imports/20-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.jpg";
import hat01 from "../../imports/01-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import hat02 from "../../imports/02-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat03 from "../../imports/03-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat04 from "../../imports/04-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import hat05 from "../../imports/05-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import hat06 from "../../imports/06-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat07 from "../../imports/07-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat08 from "../../imports/08-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat09 from "../../imports/09-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat10 from "../../imports/10-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat11 from "../../imports/11-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat12 from "../../imports/12-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import hat13 from "../../imports/13-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";
import hat14 from "../../imports/14-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat15 from "../../imports/15-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat16 from "../../imports/16-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat17 from "../../imports/17-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat18 from "../../imports/18-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat19 from "../../imports/19-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import hat20 from "../../imports/20-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-1.jpg";
import shirt01 from "../../imports/01-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";
import shirt02 from "../../imports/02-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt03 from "../../imports/03-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt04 from "../../imports/04-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";
import shirt06 from "../../imports/06-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt07 from "../../imports/07-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt08 from "../../imports/08-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt09 from "../../imports/09-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt10 from "../../imports/10-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt11 from "../../imports/11-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt12 from "../../imports/12-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";
import shirt13 from "../../imports/13-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-4.jpg";
import shirt14 from "../../imports/14-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import shirt15 from "../../imports/15-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise.png";
import shirt16 from "../../imports/16-mens-new-york-jets-neutral-colour-logo-t-shirt-big-tall-rebel-sport.jpg";
import shirt17 from "../../imports/17-mens-new-york-jets-half-ball-t-shirt-nfl-starter.jpg";
import shirt18 from "../../imports/18-mens-new-york-jets-jets-iconic-hometown-graphic-t-shirt-rebel-sport.jpg";
import shirt19 from "../../imports/19-mens-new-york-jets-classic-logo-t-shirt-rebel-sport.jpg";
import shirt20 from "../../imports/20-new-york-jets-hometown-hot-shot-graphic-long-sleeve-t-shirt-mens.jpg";
import shirt21 from "../../imports/21-mens-new-york-jets-primary-colour-logo-t-shirt-rebel-sport.jpg";
import acc01 from "../../imports/12-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-4.jpg";
import acc02 from "../../imports/17-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import acc03 from "../../imports/08-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";
import acc04 from "../../imports/10-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";

interface MerchSearchScreenProps {
  onComplete: () => void;
  onHome: () => void;
  onBack: () => void;
}

const ALL_ITEMS = [
  { id: "j01", name: "Rodgers #8 — Black Game Jersey", image: jersey01, category: "Jersey" },
  { id: "j02", name: "Wilson #5 — Black Game Jersey", image: jersey02, category: "Jersey" },
  { id: "j03", name: "Fields #7 — White Game Jersey", image: jersey03, category: "Jersey" },
  { id: "j04", name: "Fields #7 — Black Game Jersey", image: jersey04, category: "Jersey" },
  { id: "j05", name: "Wilson #5 — Green Game Jersey", image: jersey05, category: "Jersey" },
  { id: "j06", name: "Fields #7 — Green Game Jersey", image: jersey06, category: "Jersey" },
  { id: "j07", name: "Custom #00 — Green Game Jersey", image: jersey07, category: "Jersey" },
  { id: "j08", name: "Wilson #5 — Green Legend Jersey", image: jersey08, category: "Jersey" },
  { id: "j09", name: "Custom #00 — Black Game Jersey", image: jersey09, category: "Jersey" },
  { id: "j10", name: "Gardner #1 — Black Legend Jersey", image: jersey10, category: "Jersey" },
  { id: "j11", name: "Hall #20 — Green Legend Jersey", image: jersey11, category: "Jersey" },
  { id: "j12", name: "Adams #17 — Black Game Jersey", image: jersey12, category: "Jersey" },
  { id: "j13", name: "Membou #70 — Green Game Jersey", image: jersey13, category: "Jersey" },
  { id: "j14", name: "Hall #20 — Green Game Jersey", image: jersey14, category: "Jersey" },
  { id: "j15", name: "Gardner #1 — Black Game Jersey", image: jersey15, category: "Jersey" },
  { id: "j16", name: "Wilson #5 — Green Vapor Jersey", image: jersey16, category: "Jersey" },
  { id: "j17", name: "Wilson #5 — Black Vapor Jersey", image: jersey17, category: "Jersey" },
  { id: "j18", name: "Hall #20 — White Vapor Jersey", image: jersey18, category: "Jersey" },
  { id: "j19", name: "Gardner #1 — White Game Jersey", image: jersey19, category: "Jersey" },
  { id: "j20", name: "Rodgers #8 — White Vapor Jersey", image: jersey20, category: "Jersey" },
  { id: "h01", name: "New Era Black/Green Retro 9Forty Adjustable", image: hat01, category: "Hat" },
  { id: "h02", name: "New Era Black/Green Retro 39Thirty Fitted", image: hat02, category: "Hat" },
  { id: "h03", name: "New Era Cream/Green Retro 9Fifty Snapback", image: hat03, category: "Hat" },
  { id: "h04", name: "New Era Green Sideline Pom Knit Beanie", image: hat04, category: "Hat" },
  { id: "h05", name: "Fanatics Green Core Logo Adjustable", image: hat05, category: "Hat" },
  { id: "h06", name: "New Era Black/Green Retro 9Fifty Snapback", image: hat06, category: "Hat" },
  { id: "h07", name: "New Era Graphite M-Crown Adjustable", image: hat07, category: "Hat" },
  { id: "h08", name: "'47 Brand Cream/Green Arch Hitch Snapback", image: hat08, category: "Hat" },
  { id: "h09", name: "New Era Green 39Thirty Fitted", image: hat09, category: "Hat" },
  { id: "h10", name: "New Era Green 9Fifty Perforated Snapback", image: hat10, category: "Hat" },
  { id: "h11", name: "New Era Black/Green Retro Logo 9Forty w/ Pin", image: hat11, category: "Hat" },
  { id: "h12", name: "New Era Green Training Camp 9Seventy Trucker", image: hat12, category: "Hat" },
  { id: "h13", name: "New Era Cream/Green Retro Leaf Brim 9Forty", image: hat13, category: "Hat" },
  { id: "h14", name: "New Era Graphite Retro Crown Society A-Frame", image: hat14, category: "Hat" },
  { id: "h15", name: "New Era Green Training Camp 9Forty M-Crown", image: hat15, category: "Hat" },
  { id: "h16", name: "New Era Cream/Green Retro Logo 9Forty w/ Pin", image: hat16, category: "Hat" },
  { id: "h17", name: "New Era Graphite Quilted 9Fifty Snapback", image: hat17, category: "Hat" },
  { id: "h18", name: "New Era Navy Cuffed Knit Beanie", image: hat18, category: "Hat" },
  { id: "h19", name: "New Era Gray Training Camp 9Seventy Trucker", image: hat19, category: "Hat" },
  { id: "h20", name: "New Era Graphite Training Camp 9Twenty", image: hat20, category: "Hat" },
  { id: "s01", name: "Fanatics Black Helmet Long Sleeve Tee", image: shirt01, category: "Shirt" },
  { id: "s02", name: "Fanatics Green/Black Raglan Hoodie Tee", image: shirt02, category: "Shirt" },
  { id: "s03", name: "Fanatics Green Jets Football Tee", image: shirt03, category: "Shirt" },
  { id: "s04", name: "Nike Green Sideline Legend Tee", image: shirt04, category: "Shirt" },
  { id: "s06", name: "Fanatics Green/White Color Block Tee", image: shirt06, category: "Shirt" },
  { id: "s07", name: "Nike White Sideline Coach Long Sleeve Tee", image: shirt07, category: "Shirt" },
  { id: "s08", name: "Nike Green NY Jets Legend Tee", image: shirt08, category: "Shirt" },
  { id: "s09", name: "Fanatics White NFL Draft 2024 Tee", image: shirt09, category: "Shirt" },
  { id: "s10", name: "Fanatics Gray Arch Logo Tee", image: shirt10, category: "Shirt" },
  { id: "s11", name: "Fanatics Gray Custom Name & Number Tee", image: shirt11, category: "Shirt" },
  { id: "s12", name: "Nike Olive Salute to Service Tee", image: shirt12, category: "Shirt" },
  { id: "s13", name: "Nike Black Sideline Legend Tee", image: shirt13, category: "Shirt" },
  { id: "s14", name: "Nike Black Gotham City Football Hoodie Tee", image: shirt14, category: "Shirt" },
  { id: "s15", name: "Nike Navy Americana Logo Tee", image: shirt15, category: "Shirt" },
  { id: "s16", name: "Fanatics Gray Primary Logo Tee", image: shirt16, category: "Shirt" },
  { id: "s17", name: "Starter Black Jets Football 1960 Tee", image: shirt17, category: "Shirt" },
  { id: "s18", name: "Fanatics Green J-E-T-S Iconic Hometown Tee", image: shirt18, category: "Shirt" },
  { id: "s19", name: "Fanatics Green Classic NY Jets Logo Tee", image: shirt19, category: "Shirt" },
  { id: "s20", name: "Fanatics White Gotham City Long Sleeve Tee", image: shirt20, category: "Shirt" },
  { id: "s21", name: "Fanatics Green Primary Logo Tee", image: shirt21, category: "Shirt" },
  { id: "a01", name: "Nike Black/Gray Jets Mesh Shorts 2-Pack", image: acc01, category: "Accessory" },
  { id: "a02", name: "Black NY Jets Neon NYC Print 2-in-1 Shorts", image: acc02, category: "Accessory" },
  { id: "a03", name: "Nike Green/Black NYJ Color Block Shorts", image: acc03, category: "Accessory" },
  { id: "a04", name: "Mitchell & Ness Cream Pinstripe Baseball Jersey", image: acc04, category: "Accessory" },
];

export function MerchSearchScreen({ onComplete, onHome, onBack }: MerchSearchScreenProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<typeof ALL_ITEMS[0] | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { video.muted = true; video.volume = 0; }
  }, []);

  const categoryLabel = (category: string) => {
    if (category === "Jersey") return t("search.categoryJersey");
    if (category === "Hat") return t("search.categoryHat");
    if (category === "Shirt") return t("search.categoryShirt");
    if (category === "Accessory") return t("search.categoryAccessory");
    return category;
  };
  const filtered = query.trim().length > 0
    ? ALL_ITEMS.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        categoryLabel(item.category).toLowerCase().includes(query.toLowerCase())
      )
    : [];

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
        className="absolute left-0 right-0 z-20 flex justify-center" style={{ top: 0, pointerEvents: "none" }}>
        <img src={logoSrc} alt="Jets" style={{ width: "43%", objectFit: "contain" }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-6"
        style={{ paddingTop: "32%", paddingBottom: "3.1rem" }}>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-black text-white text-center mb-3 leading-tight" style={{ fontSize: "2.55rem", textShadow: "0 4px 18px rgba(0,0,0,0.7)" }}>
          {t("search.title")}
        </motion.h2>

        {/* Search bar */}
        <div className="relative mb-3" onPointerDown={() => inputRef.current?.focus()} onTouchStart={() => inputRef.current?.focus()}>
          <Search className="absolute text-gray-400" style={{ left: "0.85rem", top: "50%", transform: "translateY(-50%)", width: "1.55rem", height: "1.55rem", pointerEvents: "none" }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelected(null); }}
            placeholder={t("search.placeholder")}
            className="w-full rounded-xl bg-white border-2 border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all shadow-sm"
            style={{ fontSize: "1.35rem", padding: "0.95rem 0.9rem 0.95rem 2.8rem", position: "relative", zIndex: 2, pointerEvents: "auto" }}
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto" style={{ minHeight: 0, paddingRight: "0.25rem" }}>
          {query.trim().length === 0 ? (
            <p className="text-white/70 text-center" style={{ fontSize: "1.35rem", marginTop: "1.5rem" }}>
              {t("search.empty")}
            </p>
          ) : filtered.length === 0 ? (
            <p className="text-white/70 text-center" style={{ fontSize: "1.35rem", marginTop: "1.5rem" }}>
              {t("search.noItems").replace("{query}", query)}
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {filtered.map((item) => (
                <motion.button key={item.id}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  onClick={() => setSelected(item)}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    backgroundColor: selected?.id === item.id ? "#125740" : "#fff",
                    borderRadius: "12px", padding: "0.55rem 0.65rem",
                    border: selected?.id === item.id ? "2px solid #fff" : "2px solid #ddd",
                    cursor: "pointer", textAlign: "left",
                  }}>
                  <img src={item.image} alt={item.name}
                    style={{ width: "64px", height: "64px", objectFit: "contain", flexShrink: 0, borderRadius: "8px", background: "#f5f5f5" }} />
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: "1.12rem", fontWeight: 900, color: selected?.id === item.id ? "#fff" : "#111", lineHeight: 1.18 }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: selected?.id === item.id ? "rgba(255,255,255,0.8)" : "#666", marginTop: "0.1rem" }}>
                      {categoryLabel(item.category)}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3"
            style={{ background: "#125740", borderRadius: "12px", padding: "0.55rem 0.75rem", border: "2px solid #fff", display: "flex", alignItems: "center", gap: "0.65rem", flexShrink: 0 }}
          >
            <img src={selected.image} alt={selected.name} style={{ width: "42px", height: "42px", objectFit: "contain", background: "#fff", borderRadius: "6px", flexShrink: 0 }} />
            <span style={{ color: "#fff", fontSize: "1.05rem", lineHeight: 1.15, fontWeight: 900, minWidth: 0 }}>{t("search.selected")}: {selected.name}</span>
          </motion.div>
        )}

        {/* Continue button */}
        <motion.button
          onClick={onComplete}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="w-full font-black text-white rounded-xl mt-4"
          style={{
            fontSize: "1.95rem", padding: "1rem 0", flexShrink: 0,
            backgroundColor: "#125740", border: "2px solid white",
            boxShadow: "0 5px 18px rgba(0,0,0,0.25)"
          }}
          whileTap={{ scale: 0.97 }}>
          {t("general.continue")}
        </motion.button>
      </div>
    </div>
  );
}
