import { useEffect, useRef, useState } from "react";

export default function useHomeSectionEntrance() {
  const sectionRef = useRef(null);
  const [stage, setStage] = useState("waiting");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("revealed");
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setStage("revealed");
      return undefined;
    }

    let revealTimer;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      observer.disconnect();
      setStage("entered");
      revealTimer = window.setTimeout(() => setStage("revealed"), 1000);
    }, { threshold: 0.18 });

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.clearTimeout(revealTimer);
    };
  }, []);

  return { sectionRef, stage, motionClass: `home-motion-${stage}` };
}
