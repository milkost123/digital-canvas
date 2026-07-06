import { useEffect, useState } from "react";

function formatTime(d: Date) {
  return d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Toronto",
  });
}

export function NowWidget() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-5">
      <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3] cursor-pointer group/headshot">
        <img src="/content/About01_Static.png" alt="Milena Kostyukov" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover/headshot:opacity-0" />
        <img src="/content/About01_Hover.png" alt="Milena Kostyukov" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover/headshot:opacity-100" />
      </div>
      <div className="space-y-2">
        <div className="label-mono text-[0.62rem] text-muted-foreground/60">About / Context</div>
        <div className="text-[15px] leading-relaxed text-muted-foreground">
          Currently:{" "}
          <span className="text-ink">Toronto — {time || "—:—"} EST</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="label-mono text-[0.62rem] text-muted-foreground/60">Listening to</div>
        <iframe
          style={{ borderRadius: "8px" }}
          src="https://open.spotify.com/embed/track/6BbAFjOCHA1AknMtIu3VjZ?utm_source=generator&si=2abf8f46bc52411a"
          width="100%"
          height="80"
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}
