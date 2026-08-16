"use client";

import Link from "next/link";

const DISCORD_LINK = "https://discord.gg/jj6vEMqtS";

const account = {
  title: "CS2 Prime Account",
  price: 60,
  stock: 1,
  trust: "Permanent Green Trust",
  level: "Steam Level 6",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13171b] text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#13171b]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/[0.06]">
              <span className="text-xl font-black italic text-lime-400">
                C
              </span>
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                CS2<span className="text-lime-400">MARKET</span>
              </div>

              <div className="text-[8px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                Premium Digital Marketplace
              </div>
            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-bold text-white transition hover:bg-white/[0.04] hover:text-lime-400"
            >
              Products
            </Link>

            <Link
              href="#support"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              Support
            </Link>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg border border-white/[0.08] bg-[#171c21] px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:border-lime-400/30 hover:text-lime-400"
            >
              Discord
            </a>

            <Link
              href="/admin"
              className="ml-1 rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-black text-black transition hover:bg-lime-300"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/[0.05]">

        {/* Background glow */}
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[600px] w-[600px] rounded-full bg-lime-400/[0.035] blur-[140px]" />

        <div className="pointer-events-none absolute left-[-220px] top-[300px] h-[500px] w-[500px] rounded-full bg-lime-400/[0.025] blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">

          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

            {/* HERO TEXT */}
            <div>

              {/* STATUS */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#171c21] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                Store Online
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Premium CS2
                <br />
                <span className="text-lime-400">
                  Accounts.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                Reliable CS2 accounts with clear information,
                competitive pricing and dedicated customer support.
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="/product/1"
                  className="rounded-lg bg-lime-400 px-6 py-3.5 text-sm font-black text-black transition hover:bg-lime-300 active:scale-[0.98]"
                >
                  Browse Products →
                </Link>

                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/[0.08] bg-[#171c21] px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/[0.15] hover:bg-[#1b2127]"
                >
                  Join Discord
                </a>

              </div>

              {/* FEATURES */}
              <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">

                <div className="rounded-lg border border-white/[0.05] bg-[#171c21] px-4 py-3">
                  <div className="mb-1 text-xs font-bold text-lime-400">
                    ✓ Verified
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Detailed listings
                  </div>
                </div>

                <div className="rounded-lg border border-white/[0.05] bg-[#171c21] px-4 py-3">
                  <div className="mb-1 text-xs font-bold text-lime-400">
                    ✓ Secure
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Safe purchases
                  </div>
                </div>

                <div className="rounded-lg border border-white/[0.05] bg-[#171c21] px-4 py-3">
                  <div className="mb-1 text-xs font-bold text-lime-400">
                    ✓ Support
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Discord assistance
                  </div>
                </div>

              </div>

            </div>

            {/* ================= HERO CARD ================= */}
            <div className="relative">

              <div className="absolute inset-0 rounded-[30px] bg-lime-400/[0.025] blur-3xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#171c21] shadow-2xl">

                {/* GRID */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(163,230,53,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.045) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* HEADER */}
                <div className="relative flex items-center justify-between border-b border-white/[0.06] px-6 py-5">

                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                    CS2MARKET ACCOUNT
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase text-lime-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.9)]" />
                    In Stock
                  </div>

                </div>

                {/* VISUAL */}
                <div className="relative min-h-[350px] overflow-hidden">

                  {/* CENTER GLOW */}
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.045] blur-[80px]" />

                  {/* CIRCLES */}
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-400/[0.06]" />

                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

                  {/* BRAND */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

                    <div className="whitespace-nowrap text-4xl font-black italic tracking-[-0.06em] sm:text-5xl">
                      CS2<span className="text-lime-400">MARKET</span>
                    </div>

                    <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.32em] text-zinc-500">
                      Premium Gaming Marketplace
                    </div>

                  </div>

                  {/* STORE ONLINE */}
                  <div className="absolute right-6 top-12 rounded-xl border border-white/[0.08] bg-[#13171b]/90 px-4 py-3 backdrop-blur-xl">

                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_9px_rgba(163,230,53,0.8)]" />
                      Store Online
                    </div>

                  </div>

                  {/* SECURE */}
                  <div className="absolute bottom-12 left-6 rounded-xl border border-white/[0.08] bg-[#13171b]/90 px-4 py-3 backdrop-blur-xl">

                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="text-lime-400">◆</span>
                      Secure Purchase
                    </div>

                  </div>

                  {/* DELIVERY */}
                  <div className="absolute bottom-12 right-6 rounded-xl border border-white/[0.08] bg-[#13171b]/90 px-4 py-3 backdrop-blur-xl">

                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <span className="text-lime-400">⚡</span>
                      Digital Delivery
                    </div>

                  </div>

                </div>

                {/* PRODUCT FOOTER */}
                <div className="relative border-t border-white/[0.06] px-6 py-5">

                  <div className="flex items-end justify-between">

                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                        Featured Product
                      </div>

                      <div className="mt-1 text-base font-black">
                        {account.title}
                      </div>
                    </div>

                    <div className="text-right">

                      <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                        Price
                      </div>

                      <div className="mt-1 text-xl font-black text-lime-400">
                        ${account.price}
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= STORE INFO ================= */}
      <section className="border-b border-white/[0.06] bg-[#171c21]">

        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">

          <div className="border-b border-white/[0.06] px-6 py-7 sm:border-b-0 sm:border-r">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              Store Status
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm font-bold">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
              Online
            </div>
          </div>

          <div className="border-b border-white/[0.06] px-6 py-7 sm:border-b-0 sm:border-r">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              Availability
            </div>

            <div className="mt-2 text-sm font-bold">
              {account.stock} account available
            </div>
          </div>

          <div className="px-6 py-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              Customer Support
            </div>

            <div className="mt-2 text-sm font-bold">
              Discord assistance
            </div>
          </div>

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <div className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-lime-400">
              Explore Store
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Available Products
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Browse our currently available CS2 accounts.
            </p>

          </div>

          <div className="rounded-lg border border-white/[0.06] bg-[#171c21] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            {account.stock} Product Available
          </div>

        </div>

        {/* PRODUCT CARD */}
        <Link
          href="/product/1"
          className="group block max-w-lg"
        >

          <article className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#171c21] transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]">

            {/* IMAGE AREA */}
            <div className="relative h-52 overflow-hidden border-b border-white/[0.06]">

              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(163,230,53,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.045) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.07),transparent_55%)]" />

              <div className="absolute left-4 top-4 rounded-full border border-lime-400/20 bg-[#13171b]/90 px-3 py-1.5 text-[10px] font-bold text-lime-400 backdrop-blur">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
                In stock
              </div>

              <div className="relative flex h-full items-center justify-center">

                <div className="text-4xl font-black italic tracking-[-0.05em]">
                  CS2<span className="text-lime-400">MARKET</span>
                </div>

              </div>

            </div>

            {/* CARD CONTENT */}
            <div className="p-6">

              <div className="flex items-start justify-between gap-5">

                <div>

                  <h3 className="text-lg font-black">
                    {account.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                    {account.trust}, Prime Account and {account.level}.
                  </p>

                </div>

                <div className="shrink-0 text-right">

                  <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                    Price
                  </div>

                  <div className="mt-1 text-xl font-black text-lime-400">
                    ${account.price}
                  </div>

                </div>

              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">

                <div className="text-xs font-semibold text-zinc-500">
                  View product details
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition group-hover:border-lime-400/30 group-hover:text-lime-400">
                  ↗
                </div>

              </div>

            </div>

          </article>

        </Link>

      </section>

      {/* ================= SUPPORT ================= */}
      <section
        id="support"
        className="border-t border-white/[0.06] bg-[#171c21]"
      >

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/[0.07] bg-[#13171b] p-8 sm:p-10 md:flex-row md:items-center">

            <div>

              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-lime-400">
                Need Assistance?
              </div>

              <h2 className="text-2xl font-black sm:text-3xl">
                Our support team is on Discord.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                Have a question about a product or need help?
                Contact our support team through our Discord server.
              </p>

            </div>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg bg-lime-400 px-6 py-3.5 text-center text-sm font-black text-black transition hover:bg-lime-300 active:scale-[0.98]"
            >
              Join Discord →
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/[0.06] bg-[#13171b]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">

          <div>
            © 2026 CS2MARKET. All rights reserved.
          </div>

          <div className="font-bold uppercase tracking-[0.2em]">
            Premium Digital Marketplace
          </div>

        </div>

      </footer>

    </main>
  );
}