import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
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
import acc01 from "../../imports/12-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-4.jpg";
import acc02 from "../../imports/17-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-2.jpg";
import acc03 from "../../imports/08-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";
import acc04 from "../../imports/10-jets-shop-new-york-jets-gifts-apparel-ny-jets-gear-and-merchandise-3.jpg";
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

interface MerchItemsScreenProps {
  teamName: string;
  teamLogo: string | null;
  category: string;
  demographic?: string;
  cartCount: number;
  onComplete: (itemId: string, itemName: string, itemImage: string) => void;
  onAddToCart: (itemId: string, itemName: string, itemImage: string) => void;
  onGoToCart: () => void;
  onHome: () => void;
  onBack: () => void;
}

export function MerchItemsScreen({ teamName, teamLogo, category, demographic, cartCount, onComplete, onAddToCart, onGoToCart, onHome, onBack }: MerchItemsScreenProps) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  }, []);

  const jerseyItems = [
    { id: "jersey02", name: "Wilson #5 — Black Game Jersey", image: jersey02 },
    { id: "jersey03", name: "Fields #7 — White Game Jersey", image: jersey03 },
    { id: "jersey04", name: "Fields #7 — Black Game Jersey", image: jersey04 },
    { id: "jersey05", name: "Wilson #5 — Green Game Jersey", image: jersey05 },
    { id: "jersey06", name: "Fields #7 — Green Game Jersey", image: jersey06 },
    { id: "jersey07", name: "Custom #00 — Green Game Jersey", image: jersey07 },
    { id: "jersey08", name: "Wilson #5 — Green Legend Jersey", image: jersey08 },
    { id: "jersey09", name: "Custom #00 — Black Game Jersey", image: jersey09 },
    { id: "jersey10", name: "Gardner #1 — Black Legend Jersey", image: jersey10 },
    { id: "jersey11", name: "Hall #20 — Green Legend Jersey", image: jersey11 },
    { id: "jersey12", name: "Adams #17 — Black Game Jersey", image: jersey12 },
    { id: "jersey13", name: "Membou #70 — Green Game Jersey", image: jersey13 },
    { id: "jersey14", name: "Hall #20 — Green Game Jersey", image: jersey14 },
    { id: "jersey15", name: "Gardner #1 — Black Game Jersey", image: jersey15 },
    { id: "jersey16", name: "Wilson #5 — Green Vapor Jersey", image: jersey16 },
    { id: "jersey17", name: "Wilson #5 — Black Vapor Jersey", image: jersey17 },
    { id: "jersey18", name: "Hall #20 — White Vapor Jersey", image: jersey18 },
    { id: "jersey19", name: "Gardner #1 — White Game Jersey", image: jersey19 },
    { id: "jersey20", name: "Rodgers #8 — White Vapor Jersey", image: jersey20 },
  ];

  const hatItems = [
    { id: "hat01", name: "New Era Black/Green Retro 9Forty Adjustable", image: hat01 },
    { id: "hat02", name: "New Era Black/Green Retro 39Thirty Fitted", image: hat02 },
    { id: "hat03", name: "New Era Cream/Green Retro 9Fifty Snapback", image: hat03 },
    { id: "hat04", name: "New Era Green Sideline Pom Knit Beanie", image: hat04 },
    { id: "hat05", name: "Fanatics Green Core Logo Adjustable", image: hat05 },
    { id: "hat06", name: "New Era Black/Green Retro 9Fifty Snapback", image: hat06 },
    { id: "hat07", name: "New Era Graphite M-Crown Adjustable", image: hat07 },
    { id: "hat08", name: "'47 Brand Cream/Green Arch Hitch Snapback", image: hat08 },
    { id: "hat09", name: "New Era Green 39Thirty Fitted", image: hat09 },
    { id: "hat10", name: "New Era Green 9Fifty Perforated Snapback", image: hat10 },
    { id: "hat11", name: "New Era Black/Green Retro Logo 9Forty w/ Pin", image: hat11 },
    { id: "hat12", name: "New Era Green Training Camp 9Seventy Trucker", image: hat12 },
    { id: "hat13", name: "New Era Cream/Green Retro Leaf Brim 9Forty", image: hat13 },
    { id: "hat14", name: "New Era Graphite Retro Crown Society A-Frame", image: hat14 },
    { id: "hat15", name: "New Era Green Training Camp 9Forty M-Crown", image: hat15 },
    { id: "hat16", name: "New Era Cream/Green Retro Logo 9Forty w/ Pin", image: hat16 },
    { id: "hat17", name: "New Era Graphite Quilted 9Fifty Snapback", image: hat17 },
    { id: "hat18", name: "New Era Navy Cuffed Knit Beanie", image: hat18 },
    { id: "hat19", name: "New Era Gray Training Camp 9Seventy Trucker", image: hat19 },
    { id: "hat20", name: "New Era Graphite Training Camp 9Twenty", image: hat20 },
  ];

  const shirtItems = [
    { id: "shirt01", name: "Fanatics Black Helmet Long Sleeve Tee", image: shirt01 },
    { id: "shirt02", name: "Fanatics Green/Black Raglan Hoodie Tee", image: shirt02 },
    { id: "shirt03", name: "Fanatics Green Jets Football Tee", image: shirt03 },
    { id: "shirt04", name: "Nike Green Sideline Legend Tee", image: shirt04 },
    { id: "shirt06", name: "Fanatics Green/White Color Block Tee", image: shirt06 },
    { id: "shirt07", name: "Nike White Sideline Coach Long Sleeve Tee", image: shirt07 },
    { id: "shirt08", name: "Nike Green NY Jets Legend Tee", image: shirt08 },
    { id: "shirt09", name: "Fanatics White NFL Draft 2024 Tee", image: shirt09 },
    { id: "shirt10", name: "Fanatics Gray Arch Logo Tee", image: shirt10 },
    { id: "shirt11", name: "Fanatics Gray Custom Name & Number Tee", image: shirt11 },
    { id: "shirt12", name: "Nike Olive Salute to Service Tee", image: shirt12 },
    { id: "shirt13", name: "Nike Black Sideline Legend Tee", image: shirt13 },
    { id: "shirt14", name: "Nike Black Gotham City Football Hoodie Tee", image: shirt14 },
    { id: "shirt15", name: "Nike Navy Americana Logo Tee", image: shirt15 },
    { id: "shirt16", name: "Fanatics Gray Primary Logo Tee", image: shirt16 },
    { id: "shirt17", name: "Starter Black Jets Football 1960 Tee", image: shirt17 },
    { id: "shirt18", name: "Fanatics Green J-E-T-S Iconic Hometown Tee", image: shirt18 },
    { id: "shirt19", name: "Fanatics Green Classic NY Jets Logo Tee", image: shirt19 },
    { id: "shirt20", name: "Fanatics White Gotham City Long Sleeve Tee", image: shirt20 },
    { id: "shirt21", name: "Fanatics Green Primary Logo Tee", image: shirt21 },
  ];

  const accessoryItems = [
    { id: "acc01", name: "Nike Black/Gray Jets Mesh Shorts 2-Pack", image: acc01 },
    { id: "acc02", name: "Black NY Jets Neon NYC Print 2-in-1 Shorts", image: acc02 },
    { id: "acc03", name: "Nike Green/Black NYJ Color Block Shorts", image: acc03 },
    { id: "acc04", name: "Mitchell & Ness Cream Pinstripe Baseball Jersey", image: acc04 },
  ];

  const getItems = () => {
    if (category === "jerseys") return jerseyItems;
    if (category === "hats") return hatItems;
    if (category === "shirts") return shirtItems;
    if (category === "accessories") return accessoryItems;
    return [
      { id: "item1", name: "Item 1", image: null },
      { id: "item2", name: "Item 2", image: null },
      { id: "item3", name: "Item 3", image: null },
      { id: "item4", name: "Item 4", image: null },
    ];
  };

  const items = getItems();

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [pendingItemId, setPendingItemId] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<{ id: string; name: string; image: string } | null>(null);

  const needsSizeSelection = category === "jerseys" || category === "shirts";
  const needsConfirmation = category === "hats" || category === "accessories";

  const shirtSizes = demographic === "kids"
    ? ["XS (4-5)", "S (6-7)", "M (8-9)", "L (10-12)", "XL (14-16)"]
    : ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

  const sizes = shirtSizes;
  const categoryLabel =
    category === "jerseys" ? t("merch.jerseys") :
    category === "hats" ? t("merch.hats") :
    category === "shirts" ? t("merch.shirts") :
    category === "accessories" ? t("merch.accessories") :
    category;
  const title =
    category === "jerseys" ? t("items.selectJersey") :
    category === "shirts" ? t("items.selectShirt") :
    category === "accessories" ? t("items.selectAccessory") :
    category === "hats" ? t("items.selectHat") :
    t("items.selectOptions");

  const handleItemSelect = (itemId: string) => {
    if (needsSizeSelection || needsConfirmation) {
      setPendingItemId(itemId);
    } else {
      const item = items.find(i => i.id === itemId);
      const addedItem = { id: itemId, name: item?.name ?? "", image: item?.image ?? "" };
      setLastAddedItem(addedItem);
      onAddToCart(addedItem.id, addedItem.name, addedItem.image);
      setShowAddedToCart(true);
    }
  };

  const handleSizeSelect = (size: string) => {
    if (pendingItemId) {
      const item = items.find(i => i.id === pendingItemId);
      const addedItem = { id: `${pendingItemId}__size:${size}`, name: item?.name ?? "", image: item?.image ?? "" };
      setLastAddedItem(addedItem);
      onAddToCart(addedItem.id, addedItem.name, addedItem.image);
      setPendingItemId(null);
      setSelectedSize(null);
      setShowAddedToCart(true);
    }
  };

  return (
    <div className="relative h-full w-full bg-white overflow-hidden">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #000000;
          border-radius: 10px;
          border-right: 8px solid transparent;
          border-left: 6px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #333333;
        }
      `}</style>
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
      <div className="absolute inset-0" style={{ background: "rgba(18,87,64,0.15)" }} />
      <SurveyNav onBack={onBack} onHome={onHome} />

      {/* Jets Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 right-0 z-20 flex justify-center"
        style={{ top: 0 }}
      >
        <img src={logoSrc} alt="Jets" style={{ width: "41%", objectFit: "contain", marginTop: "-6%" }} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col px-6" style={{ paddingTop: "28%", paddingBottom: "12%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-black text-white text-center mb-4"
            style={{ fontSize: "3rem" }}
          >
            {title}
          </motion.h2>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative mb-4 w-full"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" style={{ width: "2rem", height: "2rem" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("items.searchCategory").replace("{category}", categoryLabel.toLowerCase())}
                className="w-full rounded-xl bg-white border-2 border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                style={{ fontSize: "1.8rem", padding: "1rem 1rem 1rem 3.5rem" }}
              />
            </div>
          </motion.div>

          {/* Items Grid - 3 columns, scrollable */}
          <div
            className="flex-1 overflow-y-auto custom-scrollbar"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#000000 transparent' }}
          >
            <div className="grid grid-cols-2 gap-4">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  onClick={() => handleItemSelect(item.id)}
                  className="relative group"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Item Card */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: "#ffffff" }}>
                    <div className="relative p-3" style={{ height: "366px" }}>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-bold">
                          {item.name}
                        </div>
                      )}
                    </div>
                    {/* Item Name */}
                    <div className="p-3 bg-white">
                      <p className="text-2xl font-black text-black text-center leading-tight">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Size Selection Modal (jerseys & shirts) */}
      {pendingItemId && needsSizeSelection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => { setPendingItemId(null); setSelectedSize(null); }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl p-10 mx-4 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-black text-black text-center mb-8 tracking-tight" style={{ fontSize: "3rem" }}>
              {t("items.selectSize")}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {sizes.map((size) => (
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-xl border-2 font-black transition-colors ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-black bg-white text-black hover:bg-black hover:text-white"
                  }`}
                  style={{ fontSize: "2rem", padding: "1.2rem 0.5rem" }}
                >
                  {size}
                </motion.button>
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { if (selectedSize) handleSizeSelect(selectedSize); }}
              className={`mt-6 w-full rounded-xl border-2 font-black transition-colors ${
                selectedSize
                  ? "border-black bg-black text-white hover:bg-gray-800"
                  : "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              style={{ fontSize: "2rem", padding: "1.2rem 0" }}
            >
              {t("items.addToCart")}
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Add to Cart Confirmation Modal (hats & accessories) */}
      {pendingItemId && needsConfirmation && (() => {
        const item = items.find(i => i.id === pendingItemId);
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setPendingItemId(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl p-10 mx-4 w-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {item?.image && (
                <img src={item.image} alt={item.name} style={{ width: "160px", height: "160px", objectFit: "contain" }} />
              )}
              <h3 className="font-black text-black text-center leading-tight" style={{ fontSize: "2.4rem" }}>
                {item?.name}
              </h3>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const addedItem = { id: pendingItemId, name: item?.name ?? "", image: item?.image ?? "" };
                  setLastAddedItem(addedItem);
                  onAddToCart(addedItem.id, addedItem.name, addedItem.image);
                  setPendingItemId(null);
                  setShowAddedToCart(true);
                }}
                className="w-full rounded-xl font-black text-white"
                style={{ fontSize: "2.4rem", padding: "1.3rem 0", backgroundColor: "#125740" }}
              >
                {t("items.addToCart")}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setPendingItemId(null)}
                className="w-full rounded-xl font-black text-black border-2 border-black bg-white"
                style={{ fontSize: "2rem", padding: "1rem 0" }}
              >
                {t("general.cancel")}
              </motion.button>
            </motion.div>
          </motion.div>
        );
      })()}

      {/* Added to Cart popup */}
      {showAddedToCart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/60"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl mx-4 w-full"
            style={{ padding: "3rem 2.5rem" }}
          >
            <div className="text-center mb-8">
              <div style={{ fontSize: "4rem" }}>🛒</div>
              <h3 className="font-black text-black tracking-tight" style={{ fontSize: "3rem", marginTop: "0.5rem" }}>
                {t("items.addedToCart")}
              </h3>
              <p className="text-black/70 font-semibold" style={{ fontSize: "2rem", marginTop: "0.75rem" }}>
                {t("items.nextPrompt")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setShowAddedToCart(false);
                  onGoToCart();
                }}
                className="w-full rounded-xl font-black text-white"
                style={{ fontSize: "2.2rem", padding: "1.4rem 0", backgroundColor: "#125740" }}
              >
                {t("items.goToCart")}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => { setShowAddedToCart(false); onBack(); }}
                className="w-full rounded-xl font-black text-black border-2 border-black bg-white"
                style={{ fontSize: "2.2rem", padding: "1.4rem 0" }}
              >
                {t("items.continueShopping")}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Cart shortcut */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center">
        {cartCount > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onGoToCart}
            style={{ backgroundColor: "#125740", border: "2px solid #fff", borderRadius: "16px", padding: "0.9rem 2rem", color: "#fff", fontSize: "1.8rem", fontWeight: 900, whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            🛒 {t("items.cartButton")} ({cartCount})
          </motion.button>
        )}
      </div>
    </div>
  );
}
