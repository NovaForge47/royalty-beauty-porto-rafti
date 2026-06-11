import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/alextheupscale/new-meeting";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

export function CalendlyEmbed({ url = CALENDLY_URL }: { url?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject CSS once
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }

    const initWidget = () => {
      const w = window as unknown as {
        Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void };
      };
      if (w.Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        w.Calendly.initInlineWidget({ url, parentElement: containerRef.current });
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      initWidget();
    } else {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    }

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full bg-card border border-border"
      style={{ minWidth: "320px", height: "720px" }}
    />
  );
}
