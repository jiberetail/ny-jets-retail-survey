import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { SurveyNav } from "./SurveyNav";
import logoSrc from "../../imports/new-york-jets-logo-0-1.png";
import backgroundVideo from "../../imports/grok-video-67c07eb1-53de-4b2d-bf02-0ebcdcc7e644.mp4";

interface SurveyQuestionsScreenProps {
  onComplete: (answers: boolean[]) => void;
  onHome: () => void;
  onBack: () => void;
  startQuestion?: number;
}

type Answer = boolean | null;

export function SurveyQuestionsScreen({ onComplete, onHome, onBack, startQuestion = 0 }: SurveyQuestionsScreenProps) {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(startQuestion);
  const [answers, setAnswers] = useState<Answer[]>([null, null, null]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to be muted
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  }, []);

  const questions = [
    "survey.question1",
    "survey.question2",
    "survey.question3",
  ];

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    // Auto-advance to next question or complete survey
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Last question answered, complete the survey
        onComplete(newAnswers as boolean[]);
      }
    }, 600);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      // Go back to previous question
      setCurrentQuestion(currentQuestion - 1);
    } else {
      // On first question, go back to language/location screen
      onBack();
    }
  };

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
      <div className="absolute inset-0" style={{ background: "rgba(18,87,64,0.15)" }} />
      <SurveyNav onBack={handleBack} onHome={onHome} />

      {/* Jets Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-0 right-0 z-20 flex justify-center"
        style={{ top: 0 }}
      >
        <img src={logoSrc} alt="Jets" style={{ width: "55%", objectFit: "contain" }} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between px-8" style={{ paddingTop: "52%", paddingBottom: "10%" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col"
            style={{ gap: "6%" }}
          >
            {/* Question */}
            <motion.h2
              className="font-black text-white text-center leading-tight"
              style={{ fontSize: "3.8rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t(questions[currentQuestion])}
            </motion.h2>

            {/* Answer buttons */}
            <div className="flex flex-col" style={{ gap: "4%" }}>
              {/* YES Button */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                onClick={() => handleAnswer(true)}
                className="relative overflow-hidden rounded-xl shadow-lg"
                style={{ height: "12rem" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 transition-all duration-300" style={{
                  background: answers[currentQuestion] === true
                    ? "linear-gradient(135deg, #000000 0%, #125740 100%)"
                    : "rgba(255,255,255,0.55)",
                }} />
                <div className="absolute left-0 top-0 bottom-0 w-3 transition-all duration-300" style={{
                  background: answers[currentQuestion] === true ? "#fff" : "#1e40af",
                }} />
                <div className="relative h-full flex items-center justify-center">
                  <span className="font-black tracking-tight transition-all duration-300" style={{
                    fontSize: "4.5rem",
                    color: answers[currentQuestion] === true ? "#fff" : "#000",
                  }}>
                    {t("survey.yes")}
                  </span>
                </div>
              </motion.button>

              {/* NO Button */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onClick={() => handleAnswer(false)}
                className="relative overflow-hidden rounded-xl shadow-lg"
                style={{ height: "12rem" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 transition-all duration-300" style={{
                  background: answers[currentQuestion] === false
                    ? "linear-gradient(135deg, #000000 0%, #125740 100%)"
                    : "rgba(255,255,255,0.55)",
                }} />
                <div className="absolute left-0 top-0 bottom-0 w-3 transition-all duration-300" style={{
                  background: answers[currentQuestion] === false ? "#fff" : "#1e40af",
                }} />
                <div className="relative h-full flex items-center justify-center">
                  <span className="font-black tracking-tight transition-all duration-300" style={{
                    fontSize: "4.5rem",
                    color: answers[currentQuestion] === false ? "#fff" : "#000",
                  }}>
                    {t("survey.no")}
                  </span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
