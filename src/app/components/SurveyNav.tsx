import { motion } from "motion/react";
import { ArrowLeft, Home } from "lucide-react";

interface SurveyNavProps {
  onBack: () => void;
  onHome: () => void;
  delay?: number;
}

export function SurveyNav({ onBack, onHome, delay = 0.45 }: SurveyNavProps) {
  const buttonStyle = {
    width: "4.4rem",
    height: "4.4rem",
    borderColor: "#125740",
    boxShadow: "0 5px 18px rgba(0,0,0,0.28)",
  };

  return (
    <div className="absolute left-0 right-0 top-0 z-40 flex items-start justify-between pointer-events-none" style={{ padding: "1.25rem 1.35rem" }}>
      <motion.button
        aria-label="Back"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        onClick={onBack}
        className="pointer-events-auto bg-white border-2 rounded-full transition-all flex items-center justify-center"
        style={buttonStyle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <ArrowLeft className="w-8 h-8 text-black" />
      </motion.button>

      <motion.button
        aria-label="Home"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        onClick={onHome}
        className="pointer-events-auto bg-white border-2 rounded-full transition-all flex items-center justify-center"
        style={buttonStyle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <Home className="w-8 h-8 text-black" />
      </motion.button>
    </div>
  );
}
