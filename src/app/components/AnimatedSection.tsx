import React, { useEffect, useRef, useState } from "react";

export type AnimationVariant =
  | "fly-left"   // Flies in from left to right
  | "fly-right"  // Flies in from right to left
  | "grow"       // Scales up from smaller size
  | "fade-up"    // Slides up from bottom
  | "fade-down"  // Slides down from top
  | "fade";      // Simple fade in

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number; // delay in ms
  duration?: number; // duration in ms (default: 800)
  className?: string;
  threshold?: number; // 0 to 1
  once?: boolean;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export function AnimatedSection({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  threshold = 0.12,
  once = true,
  style = {},
  as: Component = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering full viewport
      }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, once]);

  // Compute initial variant styles
  const getInitialTransform = () => {
    switch (variant) {
      case "fly-left":
        return "translate3d(-60px, 0, 0)";
      case "fly-right":
        return "translate3d(60px, 0, 0)";
      case "grow":
        return "scale3d(0.85, 0.85, 1)";
      case "fade-up":
        return "translate3d(0, 45px, 0)";
      case "fade-down":
        return "translate3d(0, -45px, 0)";
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const currentTransform = isVisible
    ? "translate3d(0, 0, 0) scale3d(1, 1, 1)"
    : getInitialTransform();

  const currentOpacity = isVisible ? 1 : 0;

  const animationStyle: React.CSSProperties = {
    ...style,
    opacity: currentOpacity,
    transform: currentTransform,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Smooth ease-out curve
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Component ref={ref} className={className} style={animationStyle}>
      {children}
    </Component>
  );
}

/**
 * AnimatedGroup wraps multiple children and applies staggered delay animations to each child
 */
interface AnimatedGroupProps {
  children: React.ReactNode[];
  variant?: AnimationVariant;
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  itemClassName?: string;
}

export function AnimatedGroup({
  children,
  variant = "grow",
  baseDelay = 0,
  staggerDelay = 120,
  duration = 750,
  className = "",
  itemClassName = "",
}: AnimatedGroupProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection
          key={index}
          variant={variant}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
          className={itemClassName}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}

export default AnimatedSection;
