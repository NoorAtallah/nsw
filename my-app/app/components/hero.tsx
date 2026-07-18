"use client";

import { motion } from "framer-motion";
import { Sora, Inter } from "next/font/google";
import {
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  ArrowDown,
  BadgeCheck,
  GraduationCap,
  Star,
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

/* ── PALETTE ─────────────────────────────────────────────────── */
const NAVY = "#013877";
const GOLD = "#efc759";
const TEAL = "#74c6b4";

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
      className={`${sora.variable} ${inter.variable} relative overflow-hidden`}
      style={{
        fontFamily: "var(--font-body)",
        background:
          "linear-gradient(145deg, #eaf6fd 0%, #e2f4f0 45%, #fdf8ed 100%)",
      }}
    >
      {/* SOFT BLOBS */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#6ac7ed]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#74c6b4]/25 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-16 lg:py-20">
        {/* ── LEFT: CONTENT ──────────────────────────────────── */}
        <div>
          {/* BADGES */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-7 flex flex-wrap items-center gap-2.5"
          >
            <span className="flex items-center gap-2 rounded-full bg-[#013877] px-3 py-1.5 text-[11px] font-semibold text-white">
              <ShieldCheck size={13} className="text-[#74c6b4]" strokeWidth={2.4} />
              NDIS Registered
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#013877] shadow-sm ring-1 ring-[#013877]/8">
              <MapPin size={13} className="text-[#efc759]" strokeWidth={2.4} />
              Bankstown NSW
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#013877] shadow-sm ring-1 ring-[#013877]/8">
              <span className="relative flex h-1.5 w-1.5">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-[#74c6b4]"
                  animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#74c6b4]" />
              </span>
              Enrolling Now
            </span>
          </motion.div>

          {/* EYEBROW */}
          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[1px] w-9 bg-[#013877]/25" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#013877]/55">
              Career in Care · Since 2019
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-[42px] font-extrabold leading-[1] tracking-[-0.03em] text-[#013877] sm:text-[54px] lg:text-[64px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build a rewarding career in{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: NAVY }}>
                care
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,9 Q50,1 100,7 T198,5"
                  stroke={GOLD}
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            &amp; support
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-[480px] text-[15px] font-medium leading-[1.7] text-[#013877]/60 md:text-[16px]"
          >
            Nationally recognised, fully online courses for support workers,
            coordinators, and healthcare professionals across Australia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#013877] px-7 py-4 text-[14px] font-bold text-white shadow-xl shadow-[#013877]/25"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Enquire Now
              <ArrowUpRight size={16} strokeWidth={2.6} />
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-[14px] font-bold text-[#013877] shadow-sm ring-1 ring-[#013877]/10 transition-all hover:ring-[#013877]/30"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Browse Courses
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#efc759]/25">
                <ArrowDown size={11} strokeWidth={2.6} className="text-[#013877]" />
              </span>
            </motion.button>
          </motion.div>

          {/* STAT STRIP */}
          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-10 flex max-w-[520px] items-center"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-1 flex-col ${
                  i !== 0 ? "border-l border-[#013877]/10 pl-4" : ""
                } ${i !== stats.length - 1 ? "pr-4" : ""}`}
              >
                <span
                  className="text-[24px] font-bold leading-none text-[#013877]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#013877]/45">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: VIDEO CARD ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* MAIN VIDEO CARD */}
          <div className="relative h-[420px] overflow-hidden rounded-[28px] shadow-2xl shadow-[#013877]/20 ring-1 ring-white/60 sm:h-[500px] lg:h-[560px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80"
            >
              {/* Mixkit License — free for commercial use, no attribution. */}
              <source
                src="https://assets.mixkit.co/videos/35977/35977-720.mp4"
                type="video/mp4"
              />
            </video>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(200deg, transparent 40%, rgba(1,56,119,0.45) 100%)",
              }}
            />
          </div>

          {/* FLOATING: ACCREDITED — top left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-[#013877]/5 backdrop-blur-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#74c6b4] to-[#5ab39e] shadow-md">
              <BadgeCheck size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[12px] font-bold leading-tight text-[#013877]">
                Accredited
              </div>
              <div className="mt-0.5 text-[10px] font-medium leading-tight text-[#013877]/45">
                Nationally recognised
              </div>
            </div>
          </motion.div>

          {/* FLOATING: GOLD CHIP — top right */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute -right-3 top-14 whitespace-nowrap rounded-full bg-[#efc759] px-4 py-2 shadow-lg ring-4 ring-white/70"
          >
            <span className="flex items-center gap-2 text-[12px] font-bold text-[#013877]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#013877]" />
              Self-paced · 100% Online
            </span>
          </motion.div>

          {/* FLOATING: GRADUATES + RATING — bottom */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl bg-[#013877] px-5 py-3.5 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <GraduationCap size={17} className="text-[#efc759]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] font-bold leading-tight text-white">
                  500+ Graduates
                </div>
                <div className="mt-0.5 text-[10px] font-medium leading-tight text-white/55">
                  Across Australia
                </div>
              </div>
            </div>

            <span className="h-8 w-px bg-white/15" />

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-[#013877] object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-[#efc759] text-[#efc759]" />
                <span className="text-[12px] font-bold text-white">4.9</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}