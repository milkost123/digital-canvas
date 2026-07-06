import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
let hasAnimated = false;

export function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(hasAnimated ? text : text);

  useEffect(() => {
    if (hasAnimated) return;
    hasAnimated = true;

    let frame = 0;
    const maxFrames = text.length * 2;

    const animate = () => {
      if (frame >= maxFrames) {
        setDisplayText(text);
        return;
      }

      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          const progress = frame / maxFrames;
          const charProgress = index / text.length;
          if (progress > charProgress) return text[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);
      frame++;
      setTimeout(animate, 50);
    };

    const timer = setTimeout(() => animate(), 100);
    return () => clearTimeout(timer);
  }, [text]);

  return <span className={className}>{displayText}</span>;
}
