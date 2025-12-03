"use client";

import { useState, useEffect, useRef } from "react";
import ModalBackground from "./ModalBackground";
import FeedbackItem from "./FeedbackItem";

const feedbacks = [
  {
    id: 1,
    name: "Pedro Fernandez",
    city: "Lisboa",
    text: "Quando procurei a doutora Amanda, eu estava completamente perdido com a minha documentação em Portugal e com todos os processos extremamente complicados envolvidos. Fui atendido de forma muito clara; ela me explicou todos os prazos e toda a burocracia que eu enfrentaria no meu pedido de visto.\n\nPara minha surpresa, em pouquíssimo tempo conseguimos resolver tudo, e hoje estou com o meu cartão de residência em mãos. Nada é mais importante do que nossa liberdade de ir e vir, e a doutora Amanda foi a grande responsável por isso.",
    avatarSrc: "/Icons/Feedback/ProfileMan.svg",
  },
  {
    id: 2,
    name: "Ivanete Oliveira",
    city: "Nova York",
    text: "Dra. Amanda, é uma querida. Uma pessoa que não só fez a minha aplicação para o meu cartão de residência, devo dizer, ela é extremamente competente em várias áreas. Residência e de todos os trâmites para a abertura da minha sociedade de vinhos na Ilha da Madeira...\n\nComo posso afirmar: Ela é pau de todas as obras. FABULOSA!!!",
    avatarSrc: "/Icons/Feedback/ProfileWoman.svg",
  },
];

interface ModalFeedbackProps {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}

export default function ModalFeedback({
  className,
  onMouseEnter,
  onMouseLeave,
  isActive = false,
}: ModalFeedbackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const isTransitioning = useRef(false);

  const changeFeedback = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
      setIsFading(false);
      isTransitioning.current = false;
    }, 300);
  };

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      changeFeedback();
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [isActive, currentIndex]); // Reinicia o timer quando o índice muda

  const handleNext = () => {
    changeFeedback();
  };

  const currentFeedback = feedbacks[currentIndex];

  return (
    <div
      className={`w-full h-full ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ModalBackground>
        <div
          className={`w-full h-full transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <FeedbackItem
            avatarSrc={currentFeedback.avatarSrc}
            name={currentFeedback.name}
            city={currentFeedback.city}
            text={currentFeedback.text}
            onNext={handleNext}
          />
        </div>
      </ModalBackground>
    </div>
  );
}
