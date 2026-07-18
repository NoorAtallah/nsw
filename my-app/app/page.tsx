"use client";

import { motion } from "framer-motion";
import { Sora, Inter } from "next/font/google";
import {
  ShieldCheck,
  ArrowUpRight,
  Play,
  Star,
  MapPin,
  Sparkles,
} from "lucide-react";

/* ── TYPOGRAPHY — two families only ──────────────────────────── */
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/* ── DATA ────────────────────────────────────────────────────── */
const NAVY = "#013877";
const GOLD = "#efc759";

const categories = [
  "Individual Support",
  "Ageing Support",
  "Disability",
  "Community Services",
  "Mental Health",
  "First Aid",
];

const stats = [
  { value: "6+", label: "Categories" },
  { value: "500+", label: "Graduates" },
  { value: "100%", label: "Online" },
  { value: "4.9", label: "Rating" },
];

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      className={`${sora.variable} ${inter.variable} relative min-h-[760px] h-screen w-full overflow-hidden bg-black`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ── BACKGROUND VIDEO ─────────────────────────────────── */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80"
      >
        {/* Mixkit License — free for commercial use, no attribution. */}
        <source src="https://assets.mixkit.co/videos/35977/35977-720.mp4" type="video/mp4" />
      </video>

      {/* ── OVERLAYS ─────────────────────────────────────────── */}
      {/* darken for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,20,45,0.55) 0%, rgba(1,20,45,0.25) 35%, rgba(1,20,45,0.85) 100%)",
        }}
      />
      {/* brand navy edge tint */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-70"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 100%, rgba(1,56,119,0.9) 0%, transparent 55%)",
        }}
      />

      {/* ── CONTENT SHELL ────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-7 md:px-10 lg:px-16 lg:py-10">
        {/* ── TOP BAR ────────────────────────────────────────── */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#efc759]">
              <Sparkles size={17} style={{ color: NAVY }} strokeWidth={2.4} />
            </div>
            <span
              className="text-[13px] font-semibold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Career in Care
            </span>
          </div>

          <div className="hidden items-center gap-2.5 sm:flex">
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-md">
              <ShieldCheck size={13} className="text-[#74c6b4]" strokeWidth={2.4} />
              NDIS Registered
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-md">
              <MapPin size={13} className="text-[#efc759]" strokeWidth={2.4} />
              Bankstown NSW
            </span>
          </div>
        </motion.div>

        {/* ── HEADLINE BLOCK ─────────────────────────────────── */}
        <div className="max-w-[880px]">
          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[1px] w-9 bg-[#efc759]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#efc759]">
              Est. 2019 · Nationally Recognised
            </span>
          </motion.div>

          <motion.h1
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-[42px] font-extrabold leading-[0.98] tracking-[-0.03em] text-white sm:text-[62px] lg:text-[84px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build a rewarding
            <br />
            career in{" "}
            <span className="relative whitespace-nowrap">
              <span style={{ color: GOLD }}>care</span>
            </span>{" "}
            &amp; support
          </motion.h1>

          <motion.p
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-[520px] text-[15px] font-medium leading-[1.7] text-white/75 md:text-[16px]"
          >
            Fully online, self-paced courses for support workers, coordinators,
            and healthcare professionals across Australia.
          </motion.p>

          {/* CATEGORY PILLS */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 flex flex-wrap gap-2"
          >
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-medium text-white/85 backdrop-blur-sm transition-colors hover:border-[#efc759]/60 hover:text-white"
              >
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM DOCK ────────────────────────────────────── */}
        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:gap-6 md:p-5"
        >
          {/* STATS */}
          <div className="grid grid-cols-4 gap-0 md:flex md:items-center">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col px-3 md:px-5 ${
                  i !== 0 ? "md:border-l md:border-white/15" : ""
                }`}
              >
                <span
                  className="text-[22px] font-bold leading-none text-white md:text-[26px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* TRUST + CTAs */}
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 px-1">
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white/80 object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star size={13} className="fill-[#efc759] text-[#efc759]" />
                <span className="text-[13px] font-bold text-white">4.9</span>
                <span className="text-[11px] font-medium text-white/55">
                  · 500+ grads
                </span>
              </div>
            </div>

            <div className="flex gap-2.5">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#efc759] px-6 py-3.5 text-[14px] font-bold text-[#013877] shadow-lg shadow-[#efc759]/20"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Enquire Now
                <ArrowUpRight size={16} strokeWidth={2.6} />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3.5 text-[14px] font-semibold text-white ring-1 ring-white/25 backdrop-blur-md transition-colors hover:ring-white/50"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Play size={13} className="fill-white text-white" />
                Courses
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}