"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ModalBackground from "../../ModalBackground";
import FeedbackItem from "./FeedbackItem";
import { feedbacksData } from "./feedbacksData";

interface ModalFeedbackProps {
  isActive?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function ModalFeedback({
  isActive = false,
  onClose,
  isMobile = false,
}: ModalFeedbackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const isTransitioning = useRef(false);

  const changeFeedback = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacksData.length);
      setIsFading(false);
      isTransitioning.current = false;
    }, 300);
  }, []);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(changeFeedback, 7000);
    return () => clearInterval(interval);
  }, [isActive, changeFeedback, currentIndex]);

  const currentFeedback = feedbacksData[currentIndex];

  const heightClass = isMobile
    ? "h-auto max-h-full flex-col justify-start overflow-hidden rounded-[clamp(1.875rem,4vw,3.5rem)]! py-[clamp(1.5rem,3vh,2rem)]! px-[clamp(1.25rem,5vw,3.5rem)]!"
    : "h-auto";

  return (
    <div
      className={`w-full flex items-start justify-center ${isMobile ? "h-auto max-h-full min-h-0" : ""}`}
    >
      <ModalBackground onClose={onClose} className={heightClass}>
        <div
          className={`
            w-full h-full
            transition-opacity duration-300
            ${isFading ? "opacity-0" : "opacity-100"}
          `}
        >
          <FeedbackItem
            {...currentFeedback}
            onNext={changeFeedback}
            isMobile={isMobile}
          />
        </div>
      </ModalBackground>
    </div>
  );
}
