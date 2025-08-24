import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";

const heroImg =
  "https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero-1200x630.png";

export default function Index() {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px-48px)] overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 px-4 py-10 md:py-16"
      role="main"
      aria-label="Landing page"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-300/40 via-fuchsia-300/40 to-emerald-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 translate-y-12 -translate-x-12 rounded-full bg-gradient-to-tr from-indigo-200/40 via-sky-200/40 to-transparent blur-3xl" />
        <div className="absolute right-0 top-16 h-72 w-72 translate-x-12 -translate-y-6 rounded-full bg-gradient-to-tr from-amber-200/40 via-rose-200/40 to-transparent blur-3xl" />
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left: Copy */}
        <section className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4 flex items-center gap-2">
            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white">New</Badge>

          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
              Build magical UIs
            </span>
            <span className="block text-slate-900">in minutes, not months.</span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-700 max-w-xl">
            A modern React + Vite + Tailwind starter with elegant defaults, delightful motion, and accessible components out of the box.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
              <Rocket className="mr-2 h-4 w-4" /> Get Started
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Sparkles className="mr-2 h-4 w-4" /> Live Preview
            </Button>
          </div>

          {/* Quick features */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full">
            <li className="flex items-start gap-2 text-slate-700">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
              <span>Accessible by default</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <Zap className="mt-0.5 h-5 w-5 text-indigo-600" />
              <span>Blazing‑fast Vite build</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <Sparkles className="mt-0.5 h-5 w-5 text-fuchsia-600" />
              <span>Polished Tailwind UI</span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <Rocket className="mt-0.5 h-5 w-5 text-rose-600" />
              <span>Production‑ready components</span>
            </li>
          </ul>

          {/* Social proof / stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-md">
            <Stat value="<50ms" label="TTI on SSD" />
            <Stat value="100%" label="Lighthouse a11y" />
            <Stat value="0 deps" label="No CSS bloat" />
          </div>
        </section>

        {/* Right: Visual */}
        <section className="group relative">
          <Card className="overflow-hidden border-slate-200/70 shadow-xl transition-transform duration-300 group-hover:scale-[1.015] group-hover:rotate-[0.25deg]">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Modern abstract hero"
                  className="object-cover w-full h-64 md:h-[420px] bg-gray-100"
                  width={1200}
                  height={630}
                  loading="eager"
                />
                {/* Glass shine overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/0 via-white/0 to-white/30" />
                <div className="pointer-events-none absolute -inset-x-8 -top-8 h-40 rotate-6 bg-white/20 blur-2xl" />
              </div>
            </CardContent>
          </Card>

          {/* Floating accent card */}
          <div className="absolute -bottom-6 left-4 md:left-8">
            <div className="rounded-2xl border bg-white/80 backdrop-blur px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>Instant preview & live reload</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border bg-white/70 backdrop-blur px-4 py-3 text-center shadow-sm">
      <div className="text-lg font-bold text-slate-900">{value}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}