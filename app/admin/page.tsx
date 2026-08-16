"use client";

import Link from "next/link";

const DISCORD_LINK = "https://discord.gg/jj6vEMqtS";

const account = {
  title: "CS2 Prime Account",
  price: 60,
  stock: 1,
  trust: "Permanent Green Trust",
  level: "Steam Level 6",
  prime: true,
  faceit: false,
  activatedKeys: false,
  inventory: "$2.06",
  country: "Japan",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/50 bg-lime-400/10 shadow-[0_0_25px_rgba(163,230,53,0.08)]">
              <span className="text-xl font-black text-lime-400">
                C
              </span>
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                CS2<span className="text-lime-400">MARKET</span>
              </div>

              <div className="text-[8px] font-bold tracking-[0.3em] text-zinc-600">
                PREMIUM DIGITAL MARKETPLACE
              </div>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="text-sm font-bold text-lime-400 transition hover:text-lime-300"
            >
              Home
            </Link>

            <Link
              href="#accounts"
              className="text-sm font-semibold text-zinc-500 transition hover:text-white"
            >
              Accounts
            </Link>

            <Link
              href="#support"
              className="text-sm font-semibold text-zinc-500 transition hover:text-white"
            >
              Support
            </Link>

            <Link
              href="/admin"
              className="rounded-xl border border-lime-400/40 px-5 py-2.5 text-sm font-bold text-lime-400 transition hover:border-lime-400 hover:bg-lime-400/10"
            >
              Login
            </Link>

          </nav>

          {/* MOBILE LOGIN */}
          <Link
            href="/admin"
            className="rounded-xl border border-lime-400/40 px-4 py-2 text-xs font-bold text-lime-400 md:hidden"
          >
            Login
          </Link>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.05]">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.035] blur-[140px]" />

        {/* GRID */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(163,230,53,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.12) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-24">

          {/* HERO TEXT */}
          <div>

            <div className="mb-6 flex items-center gap-2 text-xs font-black tracking-[0.2em] text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
              CS2 MARKET ONLINE
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Welcome to
              <br />
              <span className="text-lime-400">
                CS2MARKET.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
              Discover premium CS2 accounts with detailed information,
              competitive prices, fast delivery and reliable support.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="#accounts"
                className="rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-black transition hover:bg-lime-300 active:scale-[0.98]"
              >
                Browse Accounts →
              </Link>

              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white transition hover:border-lime-400/40 hover:bg-lime-400/5"
              >
                Join Discord
              </a>

            </div>

            {/* TRUST POINTS */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-zinc-600">

              <div className="flex items-center gap-2">
                <span className="text-lime-400">✓</span>
                Verified Accounts
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lime-400">⚡</span>
                Fast Delivery
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lime-400">◉</span>
                Responsive Support
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* OUTER GLOW */}
            <div className="absolute inset-10 rounded-full bg-lime-400/[0.08] blur-[100px]" />

            {/* MAIN PANEL */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b09] p-5 shadow-2xl">

              {/* TOP BAR */}
              <div className="mb-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.9)]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                    Store Online
                  </span>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-bold text-zinc-500">
                  LIVE
                </span>

              </div>

              {/* VISUAL */}
              <div
                className="relative flex h-[390px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#070907]"
              >

                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(163,230,53,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.07) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />

                {/* CIRCLES */}
                <div className="absolute h-72 w-72 rounded-full border border-lime-400/10" />
                <div className="absolute h-56 w-56 rounded-full border border-lime-400/10" />
                <div className="absolute h-40 w-40 rounded-full border border-lime-400/10" />

                {/* CENTER */}
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-lime-400/30 bg-lime-400/[0.04] shadow-[0_0_80px_rgba(163,230,53,0.08)]">

                  <div className="text-center">
                    <div className="text-4xl font-black italic tracking-tight">
                      CS2
                      <span className="text-lime-400">
                        MARKET
                      </span>
                    </div>

                    <div className="mt-2 text-[8px] font-bold tracking-[0.35em] text-zinc-600">
                      PREMIUM ACCOUNTS
                    </div>
                  </div>

                </div>

                {/* BADGE 1 */}
                <div className="absolute left-5 top-7 rounded-xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur">
                  <div className="text-[9px] font-bold text-zinc-600">
                    STATUS
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs font-bold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                    Available
                  </div>
                </div>

                {/* BADGE 2 */}
                <div className="absolute right-5 top-7 rounded-xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur">
                  <div className="text-[9px] font-bold text-zinc-600">
                    DELIVERY
                  </div>
                  <div className="mt-1 text-xs font-bold text-white">
                    Fast & Secure
                  </div>
                </div>

                {/* BADGE 3 */}
                <div className="absolute bottom-7 left-5 rounded-xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur">
                  <div className="text-[9px] font-bold text-zinc-600">
                    CHECKOUT
                  </div>
                  <div className="mt-1 text-xs font-bold text-white">
                    Secure Purchase
                  </div>
                </div>

                {/* BADGE 4 */}
                <div className="absolute bottom-7 right-5 rounded-xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur">
                  <div className="text-[9px] font-bold text-zinc-600">
                    SUPPORT
                  </div>
                  <div className="mt-1 text-xs font-bold text-white">
                    24/7 Discord
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACCOUNTS ================= */}
      <section
        id="accounts"
        className="mx-auto max-w-7xl px-6 py-20"
      >

        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.18em] text-lime-400">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              {account.stock} ACCOUNT AVAILABLE
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Featured Account
            </h2>

            <p className="mt-2 text-sm text-zinc-600">
              Browse our currently available CS2 account.
            </p>

          </div>

          <div className="text-xs font-bold text-zinc-600">
            Updated recently
          </div>

        </div>


        {/* PRODUCT */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/product/1"
            className="group block"
          >

            <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909] transition duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_20px_70px_rgba(163,230,53,0.08)]">

              {/* PRODUCT IMAGE */}
              <div className="relative h-56 overflow-hidden border-b border-white/[0.06] bg-[#090d09]">

                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(163,230,53,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.08) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                <div className="absolute left-4 top-4 rounded-full border border-lime-400/30 bg-black/80 px-3 py-1.5 text-[10px] font-bold text-lime-400">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
                  In Stock
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <div className="text-4xl font-black italic tracking-tight">
                    CS2
                    <span className="text-lime-400">
                      MARKET
                    </span>
                  </div>

                  <div className="mt-2 text-[8px] font-bold tracking-[0.35em] text-zinc-600">
                    PREMIUM ACCOUNT
                  </div>

                </div>

              </div>


              {/* PRODUCT INFO */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-lg font-black">
                      {account.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      {account.trust}, {account.level} and detailed account history.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition group-hover:border-lime-400/40 group-hover:text-lime-400">
                    ↗
                  </div>

                </div>


                {/* FEATURES */}
                <div className="mt-5 grid grid-cols-2 gap-2">

                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-700">
                      Trust
                    </div>
                    <div className="mt-1 text-xs font-bold text-zinc-300">
                      Green
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-700">
                      Steam
                    </div>
                    <div className="mt-1 text-xs font-bold text-zinc-300">
                      Level 6
                    </div>
                  </div>

                </div>


                <div className="my-5 h-px bg-white/[0.06]" />


                <div className="flex items-end justify-between">

                  <div>
                    <div className="text-[9px] font-bold tracking-[0.16em] text-zinc-700">
                      PRICE
                    </div>

                    <div className="mt-1 text-2xl font-black">
                      ${account.price}
                    </div>
                  </div>

                  <div className="text-xs font-bold text-lime-400">
                    View Account →
                  </div>

                </div>

              </div>

            </article>

          </Link>

        </div>

      </section>


      {/* ================= SUPPORT ================= */}
      <section
        id="support"
        className="border-t border-white/[0.06]"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="rounded-3xl border border-white/[0.07] bg-[#090909] p-8 sm:p-10">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div>

                <div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-lime-400">
                  Need Help?
                </div>

                <h2 className="text-2xl font-black sm:text-3xl">
                  Our support team is here.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
                  Have a question about an account or your order?
                  Contact us through Discord and we will help you as soon as possible.
                </p>

              </div>

              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-xl bg-lime-400 px-6 py-3.5 text-center text-sm font-black text-black transition hover:bg-lime-300"
              >
                Join Discord →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/[0.06]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between">

          <div>
            © 2026 CS2MARKET. All rights reserved.
          </div>

          <div className="uppercase tracking-[0.25em]">
            Premium Digital Marketplace
          </div>

        </div>

      </footer>

    </main>
  );
}