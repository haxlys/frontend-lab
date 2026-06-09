import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(
      ".animate-reveal, .animate-reveal-left, .animate-reveal-right, .animate-reveal-scale"
    );
    elements.forEach((el) => observerRef.current!.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const refresh = () => {
    if (!observerRef.current) return;
    observerRef.current.disconnect();
    const elements = document.querySelectorAll(
      ".animate-reveal, .animate-reveal-left, .animate-reveal-right, .animate-reveal-scale"
    );
    elements.forEach((el) => observerRef.current!.observe(el));
  };

  return refresh;
}
