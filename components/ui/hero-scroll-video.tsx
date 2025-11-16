"use client";

import Image from "next/image";
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";

/* =========================
   Types
========================= */

type Source = { mp4?: string; webm?: string; ogg?: string };
type VideoLike = string | Source;

type Eases = {
  container?: string;
  overlay?: string;
  text?: string;
};

export type HeroScrollVideoProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  credits?: ReactNode;

  backgroundImage?: string;
  media?: VideoLike;
  poster?: string;
  mediaType?: "video" | "image";
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  autoPlay?: boolean;

  overlay?: {
    caption?: ReactNode;
    heading?: ReactNode;
    paragraphs?: ReactNode[];
    extra?: ReactNode;
  };

  initialBoxSize?: number;
  targetSize?:
    | { widthVw: number; heightVh: number; borderRadius?: number }
    | "fullscreen";
  scrollHeightVh?: number;
  showHeroExitAnimation?: boolean;
  sticky?: boolean;
  overlayBlur?: number;
  overlayRevealDelay?: number;
  eases?: Eases;

  smoothScroll?: boolean;
  lenisOptions?: Record<string, unknown>;

  className?: string;
  style?: CSSProperties;
};

const DEFAULTS = {
  initialBoxSize: 360,
  targetSize: "fullscreen" as const,
  scrollHeightVh: 280,
  overlayBlur: 10,
  overlayRevealDelay: 0.35,
  eases: {
    container: "expo.out",
    overlay: "expo.out",
    text: "power3.inOut",
  } as Eases,
};

function isSourceObject(m?: VideoLike): m is Source {
  return !!m && typeof m !== "string";
}

export const HeroScrollVideo: React.FC<HeroScrollVideoProps> = ({
  title = "Future Forms",
  subtitle = "Design in Motion",
  meta = "2025",
  credits,

  backgroundImage,
  media,
  poster,
  mediaType = "video",
  muted = true,
  loop = true,
  playsInline = true,
  autoPlay = false,

  overlay = undefined,

  initialBoxSize = DEFAULTS.initialBoxSize,
  targetSize = DEFAULTS.targetSize,
  scrollHeightVh = DEFAULTS.scrollHeightVh,
  showHeroExitAnimation = true,
  sticky = true,
  overlayBlur = DEFAULTS.overlayBlur,
  overlayRevealDelay = DEFAULTS.overlayRevealDelay,
  eases = DEFAULTS.eases,

  smoothScroll = true,
  lenisOptions,

  className,
  style,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayCaptionRef = useRef<HTMLDivElement | null>(null);
  const overlayContentRef = useRef<HTMLDivElement | null>(null);

  const isClient = typeof window !== "undefined";

  const cssVars: CSSProperties = useMemo(
    () => ({
      ["--initial-size" as any]: `${initialBoxSize}px`,
      ["--overlay-blur" as any]: `${overlayBlur}px`,
    }),
    [initialBoxSize, overlayBlur]
  );

  useEffect(() => {
    if (!isClient) return;

    let gsap: any;
    let ScrollTrigger: any;
    let LenisCtor: any;
    let lenis: any;

    let heroTl: any;
    let mainTl: any;
    let overlayDarkenEl: HTMLDivElement | null = null;

    let rafCb: ((t: number) => void) | null = null;

    let cancelled = false;

    (async () => {
      const gsapPkg = await import("gsap");
      gsap = gsapPkg.gsap || gsapPkg.default || gsapPkg;

      const ScrollTriggerPkg =
        (await import("gsap/ScrollTrigger").catch(
          () => import("gsap/dist/ScrollTrigger")
        )) || {};
      ScrollTrigger =
        ScrollTriggerPkg.default ||
        (ScrollTriggerPkg as any).ScrollTrigger ||
        ScrollTriggerPkg;

      gsap.registerPlugin(ScrollTrigger);

      if (cancelled) return;

      if (smoothScroll) {
        const try1 = await import("lenis").catch(() => null);
        const try2 =
          try1 || (await import("@studio-freight/lenis").catch(() => null));
        LenisCtor =
          try1?.default ||
          try2?.default ||
          (try1 as any)?.Lenis ||
          (try2 as any)?.Lenis;
        if (LenisCtor) {
          lenis = new LenisCtor({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            gestureOrientation: "vertical",
            ...lenisOptions,
          });
          rafCb = (time: number) => lenis?.raf(time * 1000);
          gsap.ticker.add(rafCb);
          gsap.ticker.lagSmoothing(0);
          lenis?.on?.("scroll", ScrollTrigger.update);
        }
      }

      const containerEase = eases.container ?? "expo.out";
      const overlayEase = eases.overlay ?? "expo.out";
      const textEase = eases.text ?? "power3.inOut";

      const container = containerRef.current!;
      const overlayEl = overlayRef.current!;
      const overlayCaption = overlayCaptionRef.current!;
      const overlayContent = overlayContentRef.current!;
      const headline = headlineRef.current!;

      if (container) {
        overlayDarkenEl = document.createElement("div");
        overlayDarkenEl.setAttribute("data-auto-darken", "true");
        overlayDarkenEl.style.position = "absolute";
        overlayDarkenEl.style.inset = "0";
        overlayDarkenEl.style.background = "rgba(0,0,0,0)";
        overlayDarkenEl.style.pointerEvents = "none";
        overlayDarkenEl.style.zIndex = "1";
        container.appendChild(overlayDarkenEl);
      }

      if (showHeroExitAnimation && headline) {
        heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: headline,
            start: "top top",
            end: "top+=300 top",
            scrub: 0.5,
            anticipatePin: 1,
          },
        });

        headline
          .querySelectorAll<HTMLElement>(".hsv-headline > *")
          .forEach((el, i) => {
            heroTl.to(
              el,
              {
                rotationX: 80,
                y: -36,
                scale: 0.86,
                opacity: 0,
                filter: "blur(4px)",
                transformOrigin: "center top",
                ease: textEase,
                duration: 0.8,
              },
              i * 0.05
            );
          });
      }

      const triggerEl = rootRef.current?.querySelector(
        "[data-sticky-scroll]"
      ) as HTMLElement;

      if (!triggerEl || !container || !overlayEl) return;

      // Responsive target size
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      const isTablet =
        typeof window !== "undefined" && window.innerWidth < 1024;

      const target = (() => {
        if (targetSize === "fullscreen") {
          if (isMobile) {
            return { width: "95vw", height: "95vh", borderRadius: 0 };
          }
          if (isTablet) {
            return { width: "94vw", height: "94vh", borderRadius: 0 };
          }
          return { width: "92vw", height: "92vh", borderRadius: 0 };
        }
        return {
          width: `${targetSize.widthVw ?? 92}vw`,
          height: `${targetSize.heightVh ?? 92}vh`,
          borderRadius: targetSize.borderRadius ?? 0,
        };
      })();

      // Responsive initial size
      const responsiveInitialSize = isMobile
        ? Math.min(initialBoxSize, 300)
        : isTablet
        ? Math.min(initialBoxSize, 350)
        : initialBoxSize;

      mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });

      gsap.set(container, {
        width: responsiveInitialSize,
        height: responsiveInitialSize,
        borderRadius: isMobile ? 12 : 20,
        willChange: "width, height, transform",
      });
      gsap.set(overlayEl, {
        clipPath: "inset(100% 0 0 0)",
        willChange: "clip-path",
      });
      gsap.set(overlayContent, {
        filter: `blur(var(--overlay-blur))`,
        scale: 1.05,
        willChange: "filter, transform",
      });
      gsap.set([overlayContent, overlayCaption], {
        y: 30,
        willChange: "transform",
      });

      mainTl
        .to(
          container,
          {
            width: target.width,
            height: target.height,
            borderRadius: target.borderRadius,
            ease: containerEase,
            duration: 1,
            force3D: true,
          },
          0
        )
        .to(
          overlayDarkenEl,
          {
            backgroundColor: "rgba(0,0,0,0.4)",
            ease: "power2.out",
            duration: 0.8,
          },
          0
        )
        .to(
          overlayEl,
          {
            clipPath: "inset(0% 0 0 0)",
            backdropFilter: `blur(${overlayBlur}px)`,
            ease: overlayEase,
            duration: 0.6,
            force3D: true,
          },
          overlayRevealDelay
        )
        .to(
          overlayCaption,
          {
            y: 0,
            ease: overlayEase,
            duration: 0.5,
            force3D: true,
          },
          overlayRevealDelay + 0.03
        )
        .to(
          overlayContent,
          {
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            ease: overlayEase,
            duration: 0.6,
            force3D: true,
          },
          overlayRevealDelay + 0.03
        );

      const videoEl = container.querySelector(
        "video"
      ) as HTMLVideoElement | null;
      if (videoEl) {
        const tryPlay = () => videoEl.play().catch(() => {});
        tryPlay();
        ScrollTrigger.create({
          trigger: triggerEl,
          start: "top top",
          onEnter: tryPlay,
        });
      }
    })();

    return () => {
      cancelled = true;
      try {
        (heroTl as any)?.kill?.();
        (mainTl as any)?.kill?.();
      } catch {}
      try {
        if ((ScrollTrigger as any)?.getAll && rootRef.current) {
          (ScrollTrigger as any)
            .getAll()
            .forEach(
              (t: any) => rootRef.current!.contains(t.trigger) && t.kill(true)
            );
        }
      } catch {}
      try {
        if (overlayDarkenEl?.parentElement) {
          overlayDarkenEl.parentElement.removeChild(overlayDarkenEl);
        }
      } catch {}
      try {
        if (rafCb && (gsap as any)?.ticker) {
          (gsap as any).ticker.remove(rafCb);
          (gsap as any).ticker.lagSmoothing(1000, 16);
        }
      } catch {}
      try {
        (lenis as any)?.off?.("scroll", (ScrollTrigger as any)?.update);
        (lenis as any)?.destroy?.();
      } catch {}
    };
  }, [
    isClient,
    initialBoxSize,
    targetSize,
    scrollHeightVh,
    overlayBlur,
    overlayRevealDelay,
    eases.container,
    eases.overlay,
    eases.text,
    showHeroExitAnimation,
    sticky,
    smoothScroll,
    JSON.stringify(lenisOptions),
  ]);

  const renderMedia = () => {
    if (mediaType === "image") {
      const src = typeof media === "string" ? media : media?.mp4 || "";
      return (
        <Image
          width={100}
          height={100}
          src={src}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      );
    }
    const sources: React.ReactElement[] = [];
    if (typeof media === "string") {
      sources.push(<source key="mp4" src={media} type="video/mp4" />);
    } else if (isSourceObject(media)) {
      if (media.webm)
        sources.push(<source key="webm" src={media.webm} type="video/webm" />);
      if (media.mp4)
        sources.push(<source key="mp4" src={media.mp4} type="video/mp4" />);
      if (media.ogg)
        sources.push(<source key="ogg" src={media.ogg} type="video/ogg" />);
    }

    return (
      <video
        poster={poster}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        autoPlay={autoPlay || muted}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        {sources}
      </video>
    );
  };

  return (
    <div
      ref={rootRef}
      className={["hsv-root", className].filter(Boolean).join(" ")}
      style={{ ...cssVars, ...style }}
    >
      <div
        className="hsv-container"
        ref={headlineRef}
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
      >
        {backgroundImage && <div className="hsv-background-overlay"></div>}
        <div className="hsv-headline">
          <h1 className="hsv-title text-white font-heading">{title}</h1>
          {subtitle ? (
            <h2 className="hsv-subtitle text-white font-heading">{subtitle}</h2>
          ) : null}
          {meta ? (
            <div className="hsv-meta text-white font-heading">{meta}</div>
          ) : null}
          {credits ? (
            <div className="hsv-credits text-white font-heading">{credits}</div>
          ) : null}
        </div>
      </div>

      <div
        className="hsv-scroll"
        data-sticky-scroll
        style={{ height: `${Math.max(150, scrollHeightVh)}vh` }}
      >
        <div className={`hsv-sticky ${sticky ? "is-sticky" : ""}`}>
          <div className="hsv-media" ref={containerRef}>
            {renderMedia()}

            <div className="hsv-overlay" ref={overlayRef}>
              {overlay?.caption ? (
                <div className="hsv-caption" ref={overlayCaptionRef}>
                  {overlay.caption}
                </div>
              ) : null}
              <div className="hsv-overlay-content" ref={overlayContentRef}>
                {overlay?.heading ? <h3>{overlay.heading}</h3> : null}
                {overlay?.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {overlay?.extra}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hsv-root {
          --bg: #ffffff;
          --text: #000000;
          --muted: #6b7280;
          --muted-bg: rgba(15,17,21,0.06);
          --muted-border: rgba(15,17,21,0.12);
          --overlay-bg: rgba(0,0,0,0.75);
          --overlay-text: #ffffff;
          --accent: #fdb913;
          --accent-2: #feca57;
          --shadow: 0 10px 30px rgba(0,0,0,0.08);

          color-scheme: light;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, sans-serif;
          overflow-x: clip;
        }

        .hsv-container {
          height: 100vh;
          display: grid;
          place-items: center;
          padding: clamp(16px, 3vw, 40px);
          perspective: 900px;
          position: relative;
          overflow: hidden;
        }

        .hsv-background-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 0;
        }

        .hsv-headline {
          position: relative;
          z-index: 1;
          text-align: center;
          transform-style: preserve-3d;
          max-width: min(100%, 1100px);
        }
        .hsv-headline > * {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transform-origin: center top;
        }

        .hsv-title {
          margin: 0 0 1rem 0;
          font-size: clamp(48px, 10vw, 120px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -0.04em;
          text-wrap: balance;
          color: #ffffff;
          font-family: var(--font-heading), system-ui, sans-serif;
          will-change: transform;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5), 0 4px 40px rgba(0, 0, 0, 0.3);
          filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.4));
        }
        
        @media (max-width: 640px) {
          .hsv-title {
            font-size: clamp(32px, 10vw, 64px);
          }
        }
        .hsv-subtitle {
          margin: 0 0 1.5rem 0;
          font-size: clamp(14px, 2.5vw, 20px);
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.5);
          opacity: 0.95;
        }
        .hsv-meta {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: .5rem 1rem;
          border-radius: 999px;
          font-size: .85rem;
          font-weight: 500;
          letter-spacing: .08em;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          color: #ffffff;
          margin: 1.5rem 0 0 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        .hsv-meta::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--accent);
          display: inline-block;
          box-shadow: 0 0 8px var(--accent), 0 0 12px rgba(253, 185, 19, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .hsv-credits {
          margin-top: 1.1rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #ffffff;
        }

        .hsv-scroll { position: relative; }
        .hsv-sticky.is-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: grid;
          place-items: center;
        }

        .hsv-media {
          position: relative;
          width: var(--initial-size);
          height: var(--initial-size);
          border-radius: 20px;
          overflow: hidden;
          background: #000;
          display: grid;
          place-items: center;
          box-shadow: var(--shadow);
          will-change: width, height, transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        @media (max-width: 768px) {
          .hsv-media {
            border-radius: 12px;
          }
        }

        .hsv-overlay {
          position: absolute;
          inset: 0;
          background: var(--overlay-bg);
          color: var(--overlay-text);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(16px, 4vw, 40px);
          clip-path: inset(100% 0 0 0);
          backdrop-filter: blur(var(--overlay-blur));
          z-index: 2;
          will-change: clip-path;
          transform: translateZ(0);
        }

        .hsv-caption {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          position: absolute;
          top: clamp(8px, 3vw, 24px);
          left: 0;
          width: 100%;
          text-align: center;
          opacity: 0.95;
        }

        .hsv-overlay-content {
          margin-top: 1.2rem;
          max-width: 68ch;
          display: grid;
          gap: 0.9rem;
          will-change: transform, filter;
        }
        .hsv-overlay-content h3 {
          font-size: clamp(28px, 5vw, 56px);
          line-height: 1.02;
          margin: 0;
          font-weight: 900;
          letter-spacing: -0.01em;
          color: #ffffff;
          font-family: var(--font-heading), system-ui, sans-serif;
          text-wrap: balance;
          position: relative;
        }
        .hsv-overlay-content h3::after {
          content: "";
          display: block;
          width: 72px;
          height: 3px;
          border-radius: 999px;
          margin: 10px auto 0 auto;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          opacity: 0.9;
        }
        .hsv-overlay-content p {
          font-size: clamp(14px, 2vw, 18px);
          line-height: 1.75;
          margin: 0;
          color: #f3f4f6;
          opacity: 0.95;
        }

        @media (max-width: 900px) {
          .hsv-overlay-content { 
            max-width: 40ch;
            padding: 0 1rem;
          }
          .hsv-overlay-content h3 {
            font-size: clamp(24px, 6vw, 40px);
          }
        }
        
        @media (max-width: 640px) {
          .hsv-overlay-content { 
            max-width: 100%;
            padding: 0 0.5rem;
          }
          .hsv-overlay-content h3 {
            font-size: clamp(20px, 7vw, 32px);
          }
          .hsv-overlay-content p {
            font-size: clamp(13px, 2.5vw, 16px);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroScrollVideo;
