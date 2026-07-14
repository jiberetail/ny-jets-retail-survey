import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, Pencil, Search, Tag } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";

export interface CartItem {
  id: string;
  name: string;
  image: string;
}

interface CartScreenProps {
  cartItems: CartItem[];
  onRemoveFromCart: (index: number) => void;
  onUpdateCartItem: (index: number, newId: string) => void;
  onContinueShopping: () => void;
  onDiscount: () => void;
  onHome: () => void;
  onBack: () => void;
}

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

function isSizable(item: CartItem) {
  const lower = item.id.toLowerCase();
  return lower.includes("jersey") || lower.includes("shirt");
}

function getCurrentSize(item: CartItem): string | null {
  const match = item.id.match(/__size:(.+)$/);
  return match ? match[1] : null;
}

export function CartScreen({ cartItems, onRemoveFromCart, onUpdateCartItem, onContinueShopping, onDiscount, onHome, onBack }: CartScreenProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContinuePopup, setShowContinuePopup] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editSize, setEditSize] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { video.muted = true; video.volume = 0; }
  }, []);

  const count = cartItems.length;
  const nameFontSize = count === 1 ? "1.7rem" : count === 2 ? "1.2rem" : count === 3 ? "0.9rem" : "0.78rem";
  const cartGap = count >= 4 ? "0.35rem" : count === 3 ? "0.45rem" : "0.65rem";
  const cardMinHeight = count === 1 ? "20rem" : count === 2 ? "12rem" : count === 3 ? "9.4rem" : "7.2rem";
  const cardFlex = count <= 4 ? "1 1 0" : `0 0 ${cardMinHeight}`;
  const denseCart = count >= 3;
  const imagePadding = denseCart ? "0.35rem" : "0.75rem";
  const footerPadding = denseCart ? "0.38rem 0.5rem" : "0.65rem 0.75rem";
  const actionButtonPadding = denseCart ? "0.34rem" : "0.5rem";
  const actionIconSize = denseCart ? 16 : 20;
  const qrSize = count <= 2 ? 220 : count === 3 ? 156 : 120;
  const qrBoxPadding = count <= 2 ? "0.68rem" : "0.5rem";
  const qrArrowSize = count <= 2 ? 44 : 32;
  const scanMessageFontSize = count <= 2 ? "1.46rem" : count === 3 ? "1.2rem" : "1rem";
  const checkoutButtonHeight = count <= 2 ? "8rem" : count === 3 ? "6.2rem" : "5.05rem";
  const checkoutIconSize = count <= 2 ? 42 : 30;
  const backButtonFontSize = count <= 2 ? "1.48rem" : "1.12rem";
  const discountTitleFontSize = count <= 2 ? "1.76rem" : "1.34rem";
  const discountSubtitleFontSize = count <= 2 ? "0.94rem" : "0.74rem";

  const handleEditConfirm = () => {
    if (editingIndex !== null && editSize) {
      const item = cartItems[editingIndex];
      const baseId = item.id.replace(/__size:.+$/, "");
      onUpdateCartItem(editingIndex, `${baseId}__size:${editSize}`);
      setEditingIndex(null);
      setEditSize(null);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden">

      <video ref={videoRef} autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.70 }}
        onLoadedMetadata={(e) => { e.currentTarget.muted = true; e.currentTarget.volume = 0; }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "rgba(18,87,64,0.15)" }} />
      <SurveyNav onBack={onBack} onHome={onHome} />

      <div className="relative z-10 h-full flex flex-col items-center"
        style={{ padding: "2.5% 5% 2.2rem" }}>

        {/* Logo */}
        <motion.img src={logoSrc} alt="Jets"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ width: "24%", objectFit: "contain", marginBottom: "0.15rem", flexShrink: 0 }} />

        <h1 style={{ fontSize: "2.55rem", fontWeight: 900, color: "#fff", marginBottom: "0.1rem", textAlign: "center", flexShrink: 0 }}>
          {t("cart.title")}
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", marginBottom: "0.55rem", textAlign: "center", flexShrink: 0 }}>
          {count} {count === 1 ? t("cart.itemSingular") : t("cart.itemPlural")}
        </p>

        {/* Cart item cards */}
        <div style={{ width: "100%", flex: 1, overflowY: count > 4 ? "auto" : "hidden", display: "flex", flexDirection: "column", gap: cartGap, marginBottom: "0.55rem", minHeight: 0 }}>
          {cartItems.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              style={{
                flex: cardFlex,
                minHeight: count <= 4 ? 0 : cardMinHeight,
                width: "100%",
                backgroundColor: "#ffffff", borderRadius: "12px",
                boxShadow: "0 3px 16px rgba(0,0,0,0.18)", border: "2px solid #125740",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}>
              {/* Image */}
              <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: imagePadding, backgroundColor: "#fff" }}>
                <img src={item.image} alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
              {/* Name + action buttons */}
              <div style={{ flexShrink: 0, minWidth: 0, borderTop: "1px solid #eee", padding: footerPadding, display: "flex", alignItems: "center", justifyContent: "space-between", gap: denseCart ? "0.35rem" : "0.6rem" }}>
                <p style={{ flex: 1, minWidth: 0, fontSize: nameFontSize, fontWeight: 900, color: "#111", textAlign: "left", lineHeight: 1.08 }}>
                  {item.name}{getCurrentSize(item) ? ` — ${t("cart.size")}: ${getCurrentSize(item)}` : ""}
                </p>
                <div style={{ display: "flex", gap: denseCart ? "0.28rem" : "0.5rem", flexShrink: 0 }}>
                  {isSizable(item) && (
                    <button onClick={() => { setEditingIndex(i); setEditSize(getCurrentSize(item)); }}
                      style={{ background: "#125740", border: "none", borderRadius: "8px", padding: actionButtonPadding, cursor: "pointer", display: "flex", alignItems: "center" }}>
                      <Pencil size={actionIconSize} color="#fff" />
                    </button>
                  )}
                  <button onClick={() => onRemoveFromCart(i)}
                    style={{ background: "#cc2222", border: "none", borderRadius: "8px", padding: actionButtonPadding, cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <Trash2 size={actionIconSize} color="#fff" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QR Code — pulsing with arrows */}
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "0.55rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: count <= 2 ? "0.75rem" : "0.6rem" }}>
            {/* Left arrows pointing right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[0, 1].map(i => (
                <motion.div key={i}
                  animate={{ x: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}>
                  <svg width={qrArrowSize} height={qrArrowSize} viewBox="0 0 24 24" fill="#cc0000">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </motion.div>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: "14px", padding: qrBoxPadding, border: "3px solid #125740", boxShadow: "0 8px 24px rgba(0,0,0,0.3), 0 0 18px rgba(255,255,255,0.3)" }}>
              <QRCodeSVG value="https://www.jetsshop.com/" size={qrSize} level="H" includeMargin={true} />
            </div>

            {/* Right arrows pointing left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[0, 1].map(i => (
                <motion.div key={i}
                  animate={{ x: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}>
                  <svg width={qrArrowSize} height={qrArrowSize} viewBox="0 0 24 24" fill="#cc0000">
                    <polygon points="19,3 5,12 19,21" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: scanMessageFontSize, fontWeight: 900, color: "#ffffff", textAlign: "center", marginTop: "0.45rem", lineHeight: 1.15, textShadow: "-1px -1px 0 #125740, 1px -1px 0 #125740, -1px 1px 0 #125740, 1px 1px 0 #125740, 0 1px 0 #125740, 1px 0 0 #125740, 0 -1px 0 #125740, -1px 0 0 #125740" }}>
            {t("cart.scanMessage")}
          </p>
        </div>

        {/* Divider */}
        <div style={{ flexShrink: 0, width: "100%", height: "1px", background: "rgba(255,255,255,0.3)", margin: "0.2rem 0 0.55rem" }} />

        {/* Buttons */}
        <div style={{ flexShrink: 0, width: "100%", display: "flex", flexDirection: "row", gap: "0.8rem", alignSelf: "center" }}>
          <button onClick={onContinueShopping}
            style={{ flex: 1, minHeight: checkoutButtonHeight, padding: "0.6rem 0.75rem", borderRadius: "12px", border: "3px solid #d5d5d5", backgroundColor: "#fff", color: "#111", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.26rem", boxShadow: "0 4px 12px rgba(0,0,0,0.18)" }}>
            <Search size={checkoutIconSize} color="#111" />
            <span style={{ fontSize: backButtonFontSize, fontWeight: 900, lineHeight: 1.02 }}>{t("cart.backToItem")}</span>
            <span style={{ fontSize: backButtonFontSize, fontWeight: 900, lineHeight: 1.02 }}>{t("cart.selection")}</span>
          </button>
          <motion.button onClick={onDiscount}
            style={{ flex: 1, minHeight: checkoutButtonHeight, padding: "0.6rem 0.75rem", borderRadius: "12px", border: "3px solid #d5d5d5", backgroundColor: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.24rem", overflow: "hidden", position: "relative", boxShadow: "0 4px 12px rgba(0,0,0,0.18)" }}
            whileTap={{ scale: 0.97 }}>
            {/* Shimmer overlay */}
            <motion.div
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              style={{ position: "absolute", top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, transparent, rgba(204,0,0,0.15), transparent)", pointerEvents: "none" }}
            />
            <Tag size={checkoutIconSize} color="#cc0000" />
            <span style={{ fontSize: discountTitleFontSize, fontWeight: 900, color: "#cc0000", lineHeight: 1, whiteSpace: "nowrap" }}>{t("cart.discountTitle")}</span>
            <span style={{ fontSize: discountSubtitleFontSize, fontWeight: 800, color: "#111", lineHeight: 1.06, textAlign: "center" }}>{t("cart.discountSubtitle")}</span>
          </motion.button>
        </div>
      </div>

      {/* Edit Size Modal */}
      <AnimatePresence>
        {editingIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setEditingIndex(null)}>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl mx-6 w-full" style={{ padding: "3rem 2.5rem" }}
              onClick={(e) => e.stopPropagation()}>
              <h3 style={{ fontSize: "3rem", fontWeight: 900, textAlign: "center", marginBottom: "2rem" }}>{t("cart.selectNewSize")}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
                {SIZES.map(size => (
                  <button key={size} onClick={() => setEditSize(size)}
                    style={{
                      fontSize: "2rem", fontWeight: 900, padding: "1.2rem 0.5rem", borderRadius: "12px",
                      border: "2px solid #111",
                      backgroundColor: editSize === size ? "#111" : "#fff",
                      color: editSize === size ? "#fff" : "#111", cursor: "pointer"
                    }}>
                    {size}
                  </button>
                ))}
              </div>
              <button onClick={handleEditConfirm} disabled={!editSize}
                style={{
                  width: "100%", fontSize: "2.2rem", fontWeight: 900, padding: "1.3rem", borderRadius: "12px",
                  border: "none", backgroundColor: editSize ? "#125740" : "#ccc", color: "#fff", cursor: editSize ? "pointer" : "not-allowed"
                }}>
                {t("cart.updateCart")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue Shopping Popup */}
      <AnimatePresence>
        {showContinuePopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl mx-6 w-full" style={{ padding: "3rem 2.5rem" }}>
              <h3 style={{ fontSize: "2.8rem", fontWeight: 900, textAlign: "center", marginBottom: "2rem" }}>
                {t("cart.nextPrompt")}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <button onClick={() => setShowContinuePopup(false)}
                  style={{ fontSize: "2rem", fontWeight: 900, padding: "1.3rem", borderRadius: "12px", border: "none", backgroundColor: "#125740", color: "#fff", cursor: "pointer" }}>
                  {t("cart.stayCheckout")}
                </button>
                <button onClick={() => { setShowContinuePopup(false); onContinueShopping(); }}
                  style={{ fontSize: "2rem", fontWeight: 900, padding: "1.3rem", borderRadius: "12px", border: "2px solid #111", backgroundColor: "#fff", color: "#111", cursor: "pointer" }}>
                  {t("cart.backToItemSelection")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
