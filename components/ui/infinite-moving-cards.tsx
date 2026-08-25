"use client";

import * as React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type InfiniteMovingCardItem = {
  id?: string | number;
  title?: string;
  description?: string;
  image?: string;
  avatar?: string;
  name?: string;
  role?: string;
  rating?: number;
  tags?: string[];
};

export type InfiniteMovingCardsProps<
  T extends InfiniteMovingCardItem = InfiniteMovingCardItem,
> = {
  items: T[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
  cardClassName?: string;
  gap?: number;
  loop?: boolean;
  showGradientMask?: boolean;
  renderItem?: (item: T, index: number) => React.ReactNode;
};

const SPEED_PX_PER_SEC: Record<
  NonNullable<InfiniteMovingCardsProps["speed"]>,
  number
> = {
  slow: 26,
  normal: 44,
  fast: 74,
};

function renderStars(rating: number) {
  const stars = Math.max(0, Math.min(5, Math.round(rating)));
  return Array.from({ length: stars }, (_, i) => (
    <span key={`star-${i}`} className="text-amber-400">
      ★
    </span>
  ));
}

export function InfiniteMovingCards<
  T extends InfiniteMovingCardItem = InfiniteMovingCardItem,
>({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  cardClassName,
  gap = 20,
  loop = true,
  showGradientMask = true,
  renderItem,
}: InfiniteMovingCardsProps<T>) {
  const reduceMotion = useReducedMotion() === true;
  const x = useMotionValue(0);
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [singleWidth, setSingleWidth] = React.useState(0);
  const [viewportWidth, setViewportWidth] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  const safeItems = items ?? [];
  const renderedItems = loop ? [...safeItems, ...safeItems] : safeItems;

  React.useLayoutEffect(() => {
    const viewportNode = viewportRef.current;
    const trackNode = trackRef.current;
    if (!viewportNode || !trackNode) return;

    const measure = () => {
      const full = trackNode.scrollWidth;
      const widthPerSet = loop ? full / 2 : full;
      setSingleWidth(widthPerSet);
      setViewportWidth(viewportNode.clientWidth);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewportNode);
    observer.observe(trackNode);
    return () => observer.disconnect();
  }, [gap, loop, safeItems.length]);

  React.useEffect(() => {
    if (singleWidth <= 0) return;
    x.set(direction === "right" ? -singleWidth : 0);
  }, [direction, singleWidth, x]);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || safeItems.length <= 1) return;
    if (pauseOnHover && hovered) return;
    if (singleWidth <= 0) return;

    const velocity = SPEED_PX_PER_SEC[speed] * (delta / 1000);
    const nextRaw = x.get() + (direction === "left" ? -velocity : velocity);

    if (loop) {
      let wrapped = nextRaw;
      if (direction === "left" && wrapped <= -singleWidth)
        wrapped += singleWidth;
      if (direction === "right" && wrapped >= 0) wrapped -= singleWidth;
      x.set(wrapped);
      return;
    }

    if (direction === "left") {
      const limit = -Math.max(0, singleWidth - viewportWidth);
      x.set(Math.max(limit, nextRaw));
    } else {
      x.set(Math.min(0, nextRaw));
    }
  });

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={pauseOnHover ? () => setHovered(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setHovered(false) : undefined}
    >
      <div ref={viewportRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex w-max py-2"
          style={{
            x: reduceMotion ? 0 : x,
            gap,
          }}
        >
          {renderedItems.map((item, idx) => {
            const key = `${item.id ?? "item"}-${idx}`;
            if (renderItem) {
              return (
                <div key={key} className={cn("shrink-0", cardClassName)}>
                  {renderItem(item, idx)}
                </div>
              );
            }

            return (
              <article
                key={key}
                className={cn(
                  "shrink-0 overflow-hidden rounded-3xl border border-[#A7C4A0]/30 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#103322]",
                  cardClassName
                )}
                style={{
                  minWidth: "min(24rem, calc(100vw - 3rem))",
                  maxWidth: 420,
                }}
              >
                {item.image ? (
                  <div className="h-44 w-full overflow-hidden border-b border-gray-100 relative">
                    <img
                      src={item.image}
                      alt={item.title ?? "Card image"}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="space-y-4 p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    {typeof item.rating === "number" ? (
                      <div className="flex items-center gap-0.5 text-base text-amber-400">
                        {renderStars(item.rating)}
                      </div>
                    ) : null}

                    {item.tags?.length ? (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#F4EFE6] border border-[#A7C4A0]/40 px-2.5 py-0.5 text-[10px] font-bold text-[#103322] uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {item.title ? (
                    <h3 className="text-xl font-serif font-bold tracking-tight text-[#103322]">
                      {item.title}
                    </h3>
                  ) : null}

                  {item.description ? (
                    <p className="text-xs sm:text-sm leading-relaxed text-[#4e6359] font-light">
                      &ldquo;{item.description}&rdquo;
                    </p>
                  ) : null}

                  {item.avatar || item.name || item.role ? (
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.name ?? "Avatar"}
                          className="size-11 rounded-full border-2 border-[#A7C4A0]/50 object-cover shadow-sm"
                          loading="lazy"
                        />
                      ) : null}
                      <div>
                        {item.name ? (
                          <p className="text-sm font-bold text-[#103322] font-sans">
                            {item.name}
                          </p>
                        ) : null}
                        {item.role ? (
                          <p className="text-xs text-[#6C8A66] font-medium font-sans">
                            {item.role}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>

      {showGradientMask ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F4EFE6] via-[#F4EFE6]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F4EFE6] via-[#F4EFE6]/80 to-transparent z-10" />
        </>
      ) : null}
    </div>
  );
}

export default InfiniteMovingCards;