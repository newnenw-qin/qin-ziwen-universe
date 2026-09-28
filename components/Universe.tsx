"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import HomeGalaxy from "@/components/HomeGalaxy";
import LoadingScreen from "@/components/LoadingScreen";
import Starfield from "@/components/Starfield";
import {
  AigcPage,
  AlipayPage,
  ArtMarketPage,
  BrandPage,
  CocaColaPage,
  ContactPage,
  ContentPage,
  CraftsPage,
  ExperienceOrbit,
  FabriquePage,
  GuardianPage,
  ProfilePage,
  ProjectsPage,
  TencentPage,
  TmePage,
} from "@/components/GalaxyPages";
import { audio } from "@/lib/audio";
import type { View } from "@/lib/data";

const pageMotion = {
  initial: { opacity: 0, filter: "blur(16px)", scale: 1.03 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
  exit: { opacity: 0, filter: "blur(18px)", scale: 0.98 },
};

export default function Universe() {
  const [booted, setBooted] = useState(false);
  const [view, setView] = useState<View>("home");
  const [soundOn, setSoundOn] = useState(false);
  const [hot, setHot] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const go = useCallback((next: View) => {
    audio.click();
    audio.transit();
    setView(next);
    setHot(false);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setParallax({ x, y });
    audio.move();
  };

  return (
    <main className="relative h-dvh w-screen overflow-hidden bg-[#05060a]" onMouseMove={onMove}>
      <CustomCursor hot={hot} />
      <div className="noise" />
      {booted && <Starfield />}

      <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex items-start justify-between px-7 py-6">
        <button
          className="pointer-events-auto border-0 bg-transparent"
          onClick={() => go("home")}
          onMouseEnter={() => setHot(true)}
          onMouseLeave={() => setHot(false)}
        >
          <span className="font-ui text-[11px] tracking-[0.42em] text-[#d8d4cb]">QZ</span>
        </button>
        <button
          className="pointer-events-auto flex items-center gap-2 border-0 bg-transparent text-[#cfc9be]"
          onClick={async () => {
            const on = await audio.toggle();
            setSoundOn(on);
          }}
          onMouseEnter={() => setHot(true)}
          onMouseLeave={() => setHot(false)}
          aria-label={soundOn ? "Sound off" : "Sound on"}
        >
          {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
          <span className="font-ui text-[9px] tracking-[0.28em]">{soundOn ? "SOUND ON" : "SOUND OFF"}</span>
        </button>
      </header>

      {view !== "home" && booted && (
        <button
          className="fixed bottom-7 left-7 z-50 border-0 bg-transparent"
          onClick={() => go("home")}
          onMouseEnter={() => setHot(true)}
          onMouseLeave={() => setHot(false)}
        >
          <span className="font-ui text-[9px] tracking-[0.32em] text-[#8a867e]">← UNIVERSE</span>
        </button>
      )}

      <AnimatePresence mode="wait">
        {!booted && (
          <LoadingScreen
            key="boot"
            onEnter={() => {
              audio.click();
              setBooted(true);
            }}
          />
        )}
      </AnimatePresence>

      {booted && (
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            className="absolute inset-0 z-[3]"
            variants={pageMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {view === "home" && (
              <HomeGalaxy parallax={parallax} onNavigate={go} onHot={setHot} />
            )}
            {view === "profile" && <ProfilePage />}
            {view === "experience" && <ExperienceOrbit onOpen={go} />}
            {view === "fabrique" && <FabriquePage />}
            {view === "tencent" && <TencentPage />}
            {view === "coca-cola" && <CocaColaPage />}
            {view === "tme" && <TmePage />}
            {view === "guardian" && <GuardianPage />}
            {view === "crafts" && <CraftsPage />}
            {view === "alipay" && <AlipayPage />}
            {view === "brand" && <BrandPage onOpen={go} />}
            {view === "content" && <ContentPage />}
            {view === "art-market" && <ArtMarketPage onOpen={go} />}
            {view === "aigc" && <AigcPage />}
            {view === "projects" && <ProjectsPage />}
            {view === "contact" && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
