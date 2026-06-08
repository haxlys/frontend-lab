import { createElement, type CSSProperties, type ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type AsTag = "div" | "section" | "article" | "header" | "span";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: AsTag;
  style?: CSSProperties;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  style,
  once = true,
}: Props) {
  const { ref, visible } = useReveal<HTMLElement>({ once });
  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`,
      style: { transitionDelay: `${delay}ms`, ...style },
    },
    children,
  );
}
