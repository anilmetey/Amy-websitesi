import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedWord: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block mx-1">
      <span className="invisible">{word}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none text-[#D7E2EA]"
      >
        {word}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap justify-center leading-relaxed ${className}`}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = Math.min(1, start + 1 / words.length);
        return (
          <AnimatedWord
            key={index}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
