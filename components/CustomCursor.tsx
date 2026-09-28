"use client";

import { useEffect, useState } from "react";

export default function CustomCursor({ hot }: { hot: boolean }) {
  const [pos, setPos] = useState({ x: -40, y: -40 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
        className="pointer-events-none fixed z-[80] mix-blend-difference max-[900px]:hidden"
      style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
    >
      <div
        className="rounded-full border transition-all duration-300"
        style={{
          width: hot ? 22 : 6,
          height: hot ? 22 : 6,
          background: hot ? "transparent" : "#f4f1ea",
          borderColor: hot ? "rgba(244,241,234,0.85)" : "transparent",
        }}
      />
    </div>
  );
}
