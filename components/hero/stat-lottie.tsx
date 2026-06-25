"use client";

import { Headphones } from "lucide-react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

type StatLottieProps = {
  src: string;
  className?: string;
};

export function StatLottie({ src, className }: StatLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load lottie: ${src}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!cancelled) {
          setAnimationData(data);
          setHasError(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setHasError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (hasError) {
    return (
      <Icon
        icon={Headphones}
        variant="primary"
        size={24}
        strokeWidth={2}
        className={className}
      />
    );
  }

  if (!animationData) {
    return <span className={cn("block size-6", className)} aria-hidden />;
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop
      autoplay={false}
      className={cn("size-6", className)}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => {
        lottieRef.current?.stop();
        lottieRef.current?.goToAndStop(0, true);
      }}
    />
  );
}
