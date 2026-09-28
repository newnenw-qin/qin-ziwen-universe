"use client";

import {
  aboutCopy,
  aigcModules,
  alipay,
  cocaCola,
  contentStars,
  crafts,
  education,
  experiences,
  fabrique,
  guardian,
  mediaOrg,
  skills,
  tencent,
  tme,
  type View,
} from "@/lib/data";
import { audio } from "@/lib/audio";
import { useState } from "react";

function Shell({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 mx-auto h-full w-full max-w-[1180px] overflow-y-auto px-8 py-24 md:px-14">
      <p className="font-ui text-[10px] tracking-[0.48em] text-[#c4a574]/85">{kicker}</p>
      <h2 className="font-display mt-4 text-[clamp(36px,6vw,72px)] font-light tracking-[0.06em] text-[#f2eee5]">
        {title}
      </h2>
      <div className="mt-12">{children}</div>
    </div>
  );
}

function Metrics({
  items,
}: {
  items: { value: string; label: string; note?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
      {items.map((m) => (
        <div key={m.label}>
          <div className="font-display metric text-[clamp(36px,5vw,64px)] font-light leading-none text-[#f4f0e7]">
            {m.value}
          </div>
          <div className="font-ui mt-3 text-[10px] tracking-[0.28em] text-[#c4a574]">
            {m.label}
          </div>
          {m.note && <p className="font-cn mt-2 text-[13px] leading-relaxed text-[#8f8c84]">{m.note}</p>}
        </div>
      ))}
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-12 max-w-[640px] space-y-4">
      {items.map((p) => (
        <li key={p} className="font-cn text-[15px] leading-[1.9] text-[#b8b4ab]">
          {p}
        </li>
      ))}
    </ul>
  );
}

export function ProfilePage() {
  return (
    <Shell kicker="01 — IDENTITY" title="PROFILE">
      <div className="grid items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-[420px]">
          <img
            src="/images/portrait.png"
            alt="秦子雯"
            className="w-full object-cover"
            style={{
              maskImage: "linear-gradient(to bottom, black 72%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent)",
            }}
          />
        </div>
        <div>
          <h3 className="font-display text-[42px] font-light tracking-[0.12em]">QIN ZIWEN</h3>
          <p className="font-ui mt-3 text-[11px] tracking-[0.24em] text-[#9a968d]">
            艺术市场硕士 / Brand & Content / AIGC
          </p>
          <p className="font-cn mt-8 max-w-[460px] text-[16px] leading-[2] text-[#c9c5bc]">{aboutCopy}</p>
          <div className="mt-12 space-y-8 border-t border-white/10 pt-8">
            {education.map((e) => (
              <div key={e.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h4 className="font-cn text-[20px]">{e.school}</h4>
                  <span className="font-ui text-[10px] tracking-[0.18em] text-[#7d7a73]">{e.period}</span>
                </div>
                <p className="font-cn mt-1 text-[14px] text-[#a09c94]">{e.degree}</p>
                <p className="font-ui mt-1 text-[10px] tracking-[0.16em] text-[#6f6c66]">
                  {e.tags} · {e.city}
                </p>
              </div>
            ))}
          </div>
          <div className="font-ui mt-10 flex gap-8 text-[10px] tracking-[0.22em] text-[#c4a574]/90">
            <span>CET-6</span>
            <span>全国演出经纪人资格证</span>
          </div>
        </div>
      </div>
      <div className="mt-24 border-t border-white/10 pt-14">
        <p className="font-ui text-[10px] tracking-[0.4em] text-[#8a867e]">SKILL CONSTELLATION</p>
        <div className="mt-10 grid gap-12 md:grid-cols-3">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group}>
              <h4 className="font-ui text-[11px] tracking-[0.32em] text-[#e8e4db]">{group}</h4>
              <ul className="mt-4 space-y-2">
                {list.map((s) => (
                  <li key={s} className="font-cn flex items-center gap-3 text-[14px] text-[#9c9890]">
                    <span className="inline-block h-[3px] w-[3px] rounded-full bg-[#c4a574]/80" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

export function ExperienceOrbit({ onOpen }: { onOpen: (view: View) => void }) {
  return (
    <Shell kicker="02 — PRACTICE" title="EXPERIENCE">
      <p className="font-cn max-w-[520px] text-[15px] leading-[1.9] text-[#9c9890]">
        经历沿一条轨道展开。点击星体，进入对应现场。
      </p>
      <div className="relative mx-auto mt-8 aspect-square w-full max-w-[720px]">
        <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
        <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="font-display text-[22px] tracking-[0.2em]">QZ</div>
          <div className="font-ui mt-2 text-[8px] tracking-[0.3em] text-[#6f6c66]">ORBIT</div>
        </div>
        {experiences.map((e) => {
          const r = 46;
          const rad = (e.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * r * e.radius * 1.55;
          const y = 50 + Math.sin(rad) * r * e.radius * 1.55;
          return (
            <button
              key={e.id}
              className="absolute border-0 bg-transparent"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => audio.hover()}
              onClick={() => onOpen(e.id)}
            >
              <span className="mx-auto block h-3 w-3 rounded-full bg-[#efeae0] shadow-[0_0_16px_rgba(232,230,223,0.35)]" />
              <span className="font-ui mt-2 block whitespace-nowrap text-[9px] tracking-[0.22em] text-[#cfc9be]">
                {e.code}
              </span>
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onOpen("projects")}
        className="font-ui mt-4 border-0 bg-transparent text-[10px] tracking-[0.3em] text-[#8a734c]"
      >
        RESEARCH ORBIT → PROJECTS
      </button>
    </Shell>
  );
}

export function FabriquePage() {
  return (
    <Shell kicker="FABRIQUE · BRAND PLANNING" title="FABRIQUE">
      <p className="font-cn text-[14px] text-[#8f8c84]">北京纷布科技有限公司 · 品牌市场部 · 2026.05 — 2026.09 · 北京</p>
      <div className="mt-14">
        <Metrics items={fabrique.metrics} />
      </div>
      <Points items={fabrique.points} />
    </Shell>
  );
}

export function TencentPage() {
  return (
    <Shell kicker="LPL 2026 · LIVE PRODUCTION" title="TENCENT ESPORTS">
      <p className="font-cn text-[14px] text-[#8f8c84]">
        腾竞体育文化发展（上海）有限公司 · 现场执行制作人 · 2026.02 — 2026.04 · 上海
      </p>
      <div className="mt-14">
        <Metrics items={tencent.metrics} />
      </div>
      <Points items={tencent.points} />
    </Shell>
  );
}

export function CocaColaPage() {
  return (
    <Shell kicker="THE COCA-COLA COMPANY" title="COCA-COLA">
      <p className="font-cn text-[14px] text-[#8f8c84]">卓越运营 · 商品供应部 · 2025.11 — 2026.02 · 上海</p>
      <div className="mt-6 h-px w-16 bg-[#c8102e]/70" />
      <div className="mt-14">
        <Metrics items={cocaCola.metrics} />
      </div>
      <Points items={cocaCola.points} />
    </Shell>
  );
}

export function TmePage() {
  return (
    <Shell kicker="TENCENT MUSIC" title="TME">
      <p className="font-cn text-[14px] text-[#8f8c84]">腾讯音乐娱乐集团 · 校园大使 · 2025.10 — 2026.11 · 上海</p>
      <Points items={tme.points} />
    </Shell>
  );
}

export function GuardianPage() {
  return (
    <Shell kicker="ART × BUSINESS" title="CHINA GUARDIAN">
      <p className="font-cn text-[14px] text-[#8f8c84]">
        中国嘉德国际拍卖有限公司 · 策略运营 · 嘉德文创 · 2025.07 — 2025.09 · 北京
      </p>
      <div className="mt-14">
        <Metrics items={guardian.metrics} />
      </div>
      <Points items={guardian.points} />
    </Shell>
  );
}

export function CraftsPage() {
  return (
    <Shell kicker="CHINA ARTS & CRAFTS MUSEUM" title="ARTS & CRAFTS">
      <p className="font-cn text-[14px] text-[#8f8c84]">中国工艺美术馆 · 文创产品 · 经营部 · 2025.01 — 2025.03 · 北京</p>
      <div className="mt-14">
        <Metrics items={crafts.metrics} />
      </div>
      <Points items={crafts.points} />
    </Shell>
  );
}

export function AlipayPage() {
  return (
    <Shell kicker="ANT GROUP" title="ALIPAY">
      <p className="font-cn text-[14px] text-[#8f8c84]">支付宝（中国）网络技术有限公司 · 校园大使 · 2021.08 — 2022.08 · 西安</p>
      <div className="mt-14">
        <Metrics items={alipay.metrics} />
      </div>
      <Points items={alipay.points} />
    </Shell>
  );
}

export function BrandPage({ onOpen }: { onOpen: (view: View) => void }) {
  return (
    <Shell kicker="03 — BRAND" title="BRAND">
      <p className="font-cn max-w-[560px] text-[16px] leading-[2] text-[#c9c5bc]">
        从快闪现场到账号矩阵，品牌工作始终围绕：场景、内容、数据与增长。
      </p>
      <div className="mt-14">
        <Metrics items={fabrique.metrics.slice(0, 4)} />
      </div>
      <button
        onClick={() => onOpen("fabrique")}
        className="font-ui mt-12 border-0 bg-transparent text-[11px] tracking-[0.32em] text-[#c4a574]"
      >
        ENTER FABRIQUE →
      </button>
    </Shell>
  );
}

export function ContentPage() {
  const [open, setOpen] = useState<string | null>(null);
  const active = contentStars.find((s) => s.id === open);

  return (
    <Shell kicker="04 — CONTENT NEBULA" title="CONTENT">
      <p className="font-cn max-w-[480px] text-[15px] leading-[1.9] text-[#9c9890]">
        两颗内容星体。点击进入策略、视觉、文案、流量与互动。
      </p>
      <div className="relative mt-6 h-[320px] w-full">
        {contentStars.map((star) => (
          <button
            key={star.id}
            className="absolute border-0 bg-transparent"
            style={{ left: star.x, top: star.y, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => audio.hover()}
            onClick={() => setOpen(star.id === open ? null : star.id)}
          >
            <span
              className={`mx-auto block rounded-full bg-[#efeae0] transition-all duration-500 ${
                open === star.id ? "h-4 w-4 shadow-[0_0_28px_rgba(232,230,223,0.45)]" : "h-2.5 w-2.5"
              }`}
            />
            <span className="font-ui mt-3 block whitespace-nowrap text-[10px] tracking-[0.26em] text-[#cfc9be]">
              {star.title}
            </span>
          </button>
        ))}
      </div>
      {active && (
        <article className="border-t border-white/10 pt-10">
          <h3 className="font-cn text-[22px]">{active.title}</h3>
          <div className="mt-8">
            <Metrics items={active.metrics} />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {active.layers.map((layer) => (
              <div key={layer.label}>
                <div className="font-ui text-[10px] tracking-[0.28em] text-[#c4a574]">{layer.label}</div>
                <p className="font-cn mt-2 text-[14px] leading-[1.85] text-[#b8b4ab]">{layer.copy}</p>
              </div>
            ))}
          </div>
        </article>
      )}
      <div className="mt-16 border-t border-white/10 pt-10">
        <p className="font-ui text-[10px] tracking-[0.3em] text-[#8a867e]">{mediaOrg.name}</p>
        <p className="font-cn mt-2 text-[14px] text-[#9c9890]">
          {mediaOrg.role} · {mediaOrg.period} · {mediaOrg.city}
        </p>
        <Points items={mediaOrg.points} />
      </div>
    </Shell>
  );
}

export function ArtMarketPage({ onOpen }: { onOpen: (view: View) => void }) {
  return (
    <Shell kicker="05 — ART MARKET" title="ART MARKET">
      <p className="font-cn max-w-[540px] text-[16px] leading-[2] text-[#c9c5bc]">
        拍卖、展览、文创与电商——把艺术现场转译为可运营的商业系统。
      </p>
      <div className="mt-14">
        <Metrics items={guardian.metrics} />
      </div>
      <div className="mt-12 flex flex-wrap gap-8">
        <button
          onClick={() => onOpen("guardian")}
          className="font-ui border-0 bg-transparent text-[11px] tracking-[0.28em] text-[#c4a574]"
        >
          CHINA GUARDIAN →
        </button>
        <button
          onClick={() => onOpen("crafts")}
          className="font-ui border-0 bg-transparent text-[11px] tracking-[0.28em] text-[#c4a574]"
        >
          ARTS & CRAFTS MUSEUM →
        </button>
      </div>
    </Shell>
  );
}

export function AigcPage() {
  return (
    <Shell kicker="06 — AI × CREATIVITY" title="AIGC">
      <p className="font-cn max-w-[560px] text-[15px] leading-[1.95] text-[#b8b4ab]">
        熟悉 AIGC 视频生产链路：以指令优化画面质感、统一视觉风格，批量产出标准化短视频；并完成脚本创意、场景生成与人物形象制作。
      </p>
      <p className="font-ui mt-6 text-[10px] tracking-[0.22em] text-[#8a867e]">
        即梦 · 可灵 · Nano Banana · Image-2 · Canva
      </p>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {aigcModules.map((m) => (
          <article key={m.key} className="group relative min-h-[240px] overflow-hidden">
            <img
              src={m.image}
              alt={m.key}
              className="h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-ui text-[10px] tracking-[0.36em]">{m.key}</div>
              <div className="font-cn mt-2 text-[18px]">{m.title}</div>
              <p className="font-cn mt-2 max-w-[360px] text-[13px] leading-relaxed text-[#c2beb5] opacity-0 transition group-hover:opacity-100">
                {m.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Shell>
  );
}

export function ProjectsPage() {
  return (
    <Shell kicker="THE OTHER ORBIT" title="PROJECTS">
      <p className="font-ui text-[11px] tracking-[0.28em] text-[#c4a574]">RESEARCH · DATA · MATERIALS · ANALYSIS</p>
      <h3 className="font-cn mt-8 max-w-[720px] text-[24px] leading-[1.6]">
        大学生创新创业国家级项目
        <br />
        电镀法制备 SOFCs 合金连接体 Cu/Y₂O₃ 复合涂层研究
      </h3>
      <p className="font-cn mt-4 text-[14px] text-[#8f8c84]">项目负责人 · 2021.10 — 2022.06 · 西安</p>
      <Points
        items={["负责主要实验工作以及实验数据记录与分析。", "相关论文发表于《材料保护》。"]}
      />
    </Shell>
  );
}

export function ContactPage() {
  return (
    <Shell kicker="07 — CONTACT" title="CONTACT">
      <h3 className="font-display text-[40px] font-light tracking-[0.16em]">QIN ZIWEN</h3>
      <p className="font-ui mt-3 text-[10px] tracking-[0.32em] text-[#9a968d]">
        ART MARKET · BRAND · CONTENT · AIGC
      </p>
      <div className="mt-16 space-y-6">
        <a href="mailto:1472432840@qq.com" className="font-ui block text-[18px] tracking-[0.08em] text-[#eeeae2] no-underline">
          1472432840@qq.com
        </a>
        <a href="tel:18210872809" className="font-ui block text-[18px] tracking-[0.08em] text-[#eeeae2] no-underline">
          18210872809
        </a>
      </div>
      <a
        href="/cv/Qin-Ziwen-2027.pdf"
        className="font-ui mt-16 inline-block text-[10px] tracking-[0.28em] text-[#6f6c66] no-underline"
      >
        Download CV
      </a>
    </Shell>
  );
}
