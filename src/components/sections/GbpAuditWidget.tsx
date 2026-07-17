"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

type Scenario = {
  key: "A" | "B" | "C" | "D";
  bg: string;
  border: string;
  glow: string;
  loss: number | null;
  text: string;
};

function getScenario(rating: number): Scenario {
  const r = Math.round(rating * 10) / 10;

  if (r <= 3.4) {
    const loss = Math.floor(96 - (r - 3.0) * 15);
    return {
      key: "A",
      bg: "rgba(239, 68, 68, 0.08)",
      border: "#EF4444",
      glow: "rgba(239, 68, 68, 0.25)",
      loss,
      text: `🚨 CRITICAL MAP FRICTION: ${loss}% Lead Blockade. Your Google Business Profile is functionally dead in local discovery streams. High-intent emergency clients algorithmically ignore service providers operating below a 3.5-Star threshold. 100% of your hot booking opportunities are routing directly to high-velocity competitors in your geo-radius.`,
    };
  }

  if (r <= 3.9) {
    const loss = Math.floor(82 - (r - 3.5) * 20);
    return {
      key: "B",
      bg: "rgba(245, 158, 11, 0.08)",
      border: "#F59E0B",
      glow: "rgba(245, 158, 11, 0.25)",
      loss,
      text: `⚠️ SEVERE RISK MATRIX: ${loss}% Consumer Drop-off. Local mapping visibility exists, but your conversion pipeline fails the foundational consumer trust filter. 4 out of 5 immediate-need buyers actively bypass your business card for verified alternatives. Review velocity acceleration is mandatory to seal this revenue leak.`,
    };
  }

  if (r <= 4.4) {
    const loss = Math.floor(68 - (r - 4.0) * 12);
    return {
      key: "C",
      bg: "rgba(234, 179, 8, 0.08)",
      border: "#EAB308",
      glow: "rgba(234, 179, 8, 0.2)",
      loss,
      text: `📉 MODERATE FRICTION: ${loss}% Conversion Attrition. Your local map rating is average, but "average" triggers immediate customer bounce rates in hyper-competitive local service sectors. Premium ready-to-book contracts prioritize operators holding an active 4.5+ baseline. You are leaking market share on tier-1 keywords daily.`,
    };
  }

  return {
    key: "D",
    bg: "rgba(16, 185, 129, 0.08)",
    border: "#10B981",
    glow: "rgba(16, 185, 129, 0.25)",
    loss: null,
    text: `🟢 OPTIMAL TRUST METRICS: Algorithmic Rank Suppression Warning. While consumer trust and click-through metrics are secure, localized Google Business Profile ranking algorithms heavily penalize entities with dormant review response pipelines. If you have more than 10 unanswered reviews, your map positioning is actively decaying. Response automation is highly advised to defend your market lead.`,
  };
}

const SCALE_MARKS = [3.0, 3.5, 4.0, 4.3, 4.5, 4.8];

export default function GbpAuditWidget() {
  const [rating, setRating] = useState(4.0);
  const scenario = useMemo(() => getScenario(rating), [rating]);

  return (
    <section className="border-b border-line bg-gray-light py-24">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue">
            Free Diagnostic Tool
          </span>
          <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
            Google Business Profile Conversion Friction &amp; Risk Analytics
            Engine
          </h2>
          <p className="text-base leading-relaxed text-slate">
            Drag your current Google star rating below to see, in real time,
            how much local conversion volume you&apos;re likely losing to
            review friction.
          </p>
        </div>

        <div
          className="w-full max-w-[600px] rounded-xl border p-[35px]"
          style={{ background: "#12161A", borderColor: "#232931" }}
        >
          <div className="flex flex-col gap-1 pb-2">
            <span
              className="text-4xl font-bold"
              style={{
                color: "#00E5FF",
                textShadow: "0 0 18px rgba(0, 229, 255, 0.55)",
              }}
            >
              ★ {rating.toFixed(1)}
            </span>
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: "#94A3B8" }}
            >
              Current Google Star Rating
            </span>
          </div>

          <input
            type="range"
            min={3.0}
            max={4.8}
            step={0.1}
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
            className="gbp-slider mt-4 w-full"
            aria-label="Google star rating"
          />

          <div
            className="mt-2 flex justify-between text-xs"
            style={{ color: "#94A3B8" }}
          >
            {SCALE_MARKS.map((mark) => (
              <span key={mark}>
                {mark.toFixed(1)} ★
              </span>
            ))}
          </div>

          <div
            key={scenario.key + (scenario.loss ?? "")}
            className="gbp-fade mt-8 rounded-lg border p-5"
            style={{
              background: scenario.bg,
              borderColor: scenario.border,
              boxShadow: `0 0 24px ${scenario.glow}`,
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#F8FAFC" }}>
              {scenario.text}
            </p>
            <p
              className="mt-4 text-[10px] uppercase tracking-[0.15em]"
              style={{ color: "#4B5563" }}
            >
              GBP Data Audit Engine v2.6 // Real-Time Calculation Active
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-6 block w-full rounded-[10px] px-5 py-3.5 text-center text-[0.95rem] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,229,255,0.45)]"
            style={{ backgroundColor: "#00E5FF", color: "#12161A" }}
          >
            Fix My Conversion Friction For $0 Free
          </Link>
        </div>
      </Container>

      <style jsx>{`
        .gbp-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 999px;
          background: #232931;
          outline: none;
        }

        .gbp-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 0 4px rgba(0, 229, 255, 0.2),
            0 0 16px rgba(0, 229, 255, 0.6);
          cursor: pointer;
          transition: box-shadow 0.15s ease;
        }

        .gbp-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 6px rgba(0, 229, 255, 0.25),
            0 0 22px rgba(0, 229, 255, 0.75);
        }

        .gbp-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 0 4px rgba(0, 229, 255, 0.2),
            0 0 16px rgba(0, 229, 255, 0.6);
          cursor: pointer;
        }

        .gbp-fade {
          animation: gbpFadeIn 0.35s ease;
        }

        @keyframes gbpFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>
    </section>
  );
}
