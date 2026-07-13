import { useEffect, useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { LanguageLocationScreen } from "./components/LanguageLocationScreen";
import { MerchCategoryScreen } from "./components/MerchCategoryScreen";
import { MerchItemsScreen } from "./components/MerchItemsScreen";
import { CartScreen, type CartItem } from "./components/CartScreen";
import { DiscountScreen } from "./components/DiscountScreen";
import { SurveyQuestionsScreen } from "./components/SurveyQuestionsScreen";
import { MerchSearchScreen } from "./components/MerchSearchScreen";
import { FeedbackScreen } from "./components/FeedbackScreen";
import { RatingScreen } from "./components/RatingScreen";
import { ThankYouScreen } from "./components/ThankYouScreen";
import logoSrc from "../imports/new-york-jets-logo-0-1.png";

type Screen =
  | "welcome"
  | "language"
  | "merch"
  | "items"
  | "cart"
  | "discount"
  | "survey"
  | "search"
  | "feedback"
  | "rating"
  | "complete";

const team = {
  id: "ny-jets",
  name: "New York Jets",
  logo: logoSrc,
};

const STAGE_WIDTH = 1080;
const STAGE_HEIGHT = 1920;

function stripCartSize(id: string) {
  return id.replace(/__size:.+$/, "");
}

export default function App() {
  const [stageScale, setStageScale] = useState(1);
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [selectedCategory, setSelectedCategory] = useState("jerseys");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [surveyStartQuestion, setSurveyStartQuestion] = useState(0);
  const [surveyAnswers, setSurveyAnswers] = useState<boolean[]>([]);

  useEffect(() => {
    const fitStageToViewport = () => {
      setStageScale(Math.min(window.innerWidth / STAGE_WIDTH, window.innerHeight / STAGE_HEIGHT));
    };

    fitStageToViewport();
    window.addEventListener("resize", fitStageToViewport);
    return () => window.removeEventListener("resize", fitStageToViewport);
  }, []);

  const reset = () => {
    setCurrentScreen("welcome");
    setSelectedCategory("jerseys");
    setCartItems([]);
    setSurveyStartQuestion(0);
    setSurveyAnswers([]);
  };

  const addToCart = (id: string, name: string, image: string) => {
    setCartItems((items) => [...items, { id, name, image }]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((items) => items.filter((_, itemIndex) => itemIndex !== index));
  };

  const updateCartItem = (index: number, newId: string) => {
    setCartItems((items) =>
      items.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              id: newId,
            }
          : item,
      ),
    );
  };

  const routeAfterSurvey = (answers: boolean[]) => {
    const [foundEverything, satisfied, associateHelped] = answers;
    if (foundEverything === false) setCurrentScreen("search");
    else if (satisfied === false) setCurrentScreen("feedback");
    else if (associateHelped === true) setCurrentScreen("rating");
    else setCurrentScreen("complete");
  };

  const routeAfterSearch = () => {
    const [, satisfied, associateHelped] = surveyAnswers;
    if (satisfied === false) setCurrentScreen("feedback");
    else if (associateHelped === true) setCurrentScreen("rating");
    else setCurrentScreen("complete");
  };

  const routeAfterFeedback = () => {
    const [, , associateHelped] = surveyAnswers;
    if (associateHelped === true) setCurrentScreen("rating");
    else setCurrentScreen("complete");
  };

  return (
    <LanguageProvider>
      <div className="size-full flex items-center justify-center overflow-hidden bg-black">
        <div
          className="relative"
          style={{
            width: STAGE_WIDTH * stageScale,
            height: STAGE_HEIGHT * stageScale,
            aspectRatio: "9 / 16",
            flex: "0 0 auto",
          }}
        >
          <div
            className="bg-black overflow-hidden absolute inset-0"
            style={{
              width: STAGE_WIDTH,
              height: STAGE_HEIGHT,
              transform: `scale(${stageScale})`,
              transformOrigin: "top left",
            }}
          >
            {currentScreen === "welcome" && <WelcomeScreen onStart={() => setCurrentScreen("language")} />}

            {currentScreen === "language" && (
              <LanguageLocationScreen
                onContinue={() => setCurrentScreen("merch")}
                onHome={reset}
                onBack={() => setCurrentScreen("welcome")}
              />
            )}

            {currentScreen === "merch" && (
              <MerchCategoryScreen
                sport="football"
                teamName={team.name}
                teamLogo={team.logo}
                cartCount={cartItems.length}
                onComplete={(category) => {
                  setSelectedCategory(category);
                  setCurrentScreen("items");
                }}
                onGoToCart={() => setCurrentScreen("cart")}
                onHome={reset}
                onBack={() => setCurrentScreen("language")}
              />
            )}

            {currentScreen === "items" && (
              <MerchItemsScreen
                teamName={team.name}
                teamLogo={team.logo}
                category={selectedCategory}
                cartCount={cartItems.length}
                onComplete={() => setCurrentScreen("cart")}
                onAddToCart={addToCart}
                onGoToCart={() => setCurrentScreen("cart")}
                onHome={reset}
                onBack={() => setCurrentScreen("merch")}
              />
            )}

            {currentScreen === "cart" && (
              <CartScreen
                cartItems={cartItems}
                onRemoveFromCart={removeFromCart}
                onUpdateCartItem={updateCartItem}
                onContinueShopping={() => {
                  const lastItem = cartItems[cartItems.length - 1];
                  if (lastItem) {
                    const baseId = stripCartSize(lastItem.id);
                    if (baseId.startsWith("hat")) setSelectedCategory("hats");
                    if (baseId.startsWith("shirt")) setSelectedCategory("shirts");
                    if (baseId.startsWith("acc")) setSelectedCategory("accessories");
                    if (baseId.startsWith("jersey")) setSelectedCategory("jerseys");
                  }
                  setCurrentScreen("items");
                }}
                onDiscount={() => setCurrentScreen("discount")}
                onHome={reset}
                onBack={() => setCurrentScreen("items")}
              />
            )}

            {currentScreen === "discount" && (
              <DiscountScreen
                onComplete={() => {
                  setSurveyStartQuestion(0);
                  setSurveyAnswers([]);
                  setCurrentScreen("survey");
                }}
                onHome={reset}
                onBack={() => setCurrentScreen("cart")}
              />
            )}

            {currentScreen === "survey" && (
              <SurveyQuestionsScreen
                startQuestion={surveyStartQuestion}
                onComplete={(answers) => {
                  setSurveyStartQuestion(0);
                  setSurveyAnswers(answers);
                  routeAfterSurvey(answers);
                }}
                onHome={reset}
                onBack={() => setCurrentScreen("discount")}
              />
            )}

            {currentScreen === "search" && (
              <MerchSearchScreen
                onComplete={routeAfterSearch}
                onHome={reset}
                onBack={() => {
                  setSurveyStartQuestion(0);
                  setCurrentScreen("survey");
                }}
              />
            )}

            {currentScreen === "feedback" && (
              <FeedbackScreen
                onComplete={routeAfterFeedback}
                onHome={reset}
                onBack={() => {
                  if (surveyAnswers[0] === false) setCurrentScreen("search");
                  else {
                    setSurveyStartQuestion(1);
                    setCurrentScreen("survey");
                  }
                }}
              />
            )}

            {currentScreen === "rating" && (
              <RatingScreen
                onComplete={() => setCurrentScreen("complete")}
                onHome={reset}
                onBack={() => {
                  if (surveyAnswers[1] === false) setCurrentScreen("feedback");
                  else {
                    setSurveyStartQuestion(2);
                    setCurrentScreen("survey");
                  }
                }}
              />
            )}

            {currentScreen === "complete" && <ThankYouScreen onReset={reset} />}
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
