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
    <main className="min-h-screen bg-[#070809] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070809]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-500/40 bg-lime-400/10">
              <span className="text-xl font-black text-lime-400">C</span>
            </div>

            <div>
              <div className="text-lg font-black">
                CS2<span className="text-lime-400">MARKET</span>
              </div>

              <div className="text-[8px] font-bold uppercase tracking-[0.28em] text-zinc-600">
                Premium Digital Marketplace
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden px-3 py-2 text-sm font-bold text-white transition hover:text-lime-400 sm:block"
            >
              Products
            </Link>

            <a
              href="#support"
              className="hidden px-3 py-2 text-sm font-semibold text-zinc-400 transition hover:text-white sm:block"
            >
              Support
            </a>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-bold text-zinc-300 transition hover:border-lime-400/40 hover:text-lime-400"
            >
              Discord
            </a>

            <Link
              href="/admin"
              className="rounded-xl border border-lime-500/40 bg-lime-400/5 px-4 py-2.5 text-sm font-bold text-lime-400 transition hover:bg-lime-400/10"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-[-200px] top-[-150px] h-[600px] w-[600px] rounded-full bg-lime-400/5 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* HERO TEXT */}
            <div>
              <div className="mb-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
                Store Online
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Premium CS2
                <br />
                <span className="text-lime-400">Accounts.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
                Premium CS2 accounts with clear information, competitive
                prices and dedicated customer support.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/product/1"
                  className="rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-black text-black transition hover:bg-lime-300"
                >
                  Browse Account →
                </Link>

                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  Join Discord
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-6 text-xs font-semibold text-zinc-500">
                <div>
                  <span className="mr-2 text-lime-400">✓</span>
                  Detailed listings
                </div>

                <div>
                  <span className="mr-2 text-lime-400">✓</span>
                  Competitive prices
                </div>

                <div>
                  <span className="mr-2 text-lime-400">✓</span>
                  Discord support
                </div>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-lime-400/5 blur-3xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0d0e]">
                {/* GRID */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(163,230,53,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.06) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />

                {/* TOP BAR */}
                <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                    Featured Account
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-400/5 px-3 py-1.5 text-[10px] font-bold uppercase text-lime-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                    In Stock
                  </span>
                </div>

                {/* CENTER */}
                <div className="relative flex min-h-[380px] items-center justify-center">
                  <div className="absolute h-64 w-64 rounded-full bg-lime-400/10 blur-[80px]" />

                  <div className="absolute h-64 w-64 rounded-full border border-white/5" />

                  <div className="absolute h-48 w-48 rounded-full border border-white/5" />

                  <div className="relative text-center">
                    <div className="text-5xl font-black italic tracking-tight sm:text-6xl">
                      CS2<span className="text-lime-400">MARKET</span>
                    </div>

                    <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-600">
                      Premium Gaming Marketplace
                    </div>
                  </div>

                  {/* TRUST */}
                  <div className="absolute left-5 top-12 rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-600">
                      Trust
                    </div>

                    <div className="mt-1 text-xs font-bold text-lime-400">
                      Permanent Green
                    </div>
                  </div>

                  {/* STEAM LEVEL */}
                  <div className="absolute bottom-12 right-5 rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-600">
                      Steam
                    </div>

                    <div className="mt-1 text-xs font-bold text-white">
                      Level 6
                    </div>
                  </div>
                </div>

                {/* PRODUCT FOOTER */}
                <div className="relative border-t border-white/10 px-6 py-5">
                  <div className="flex items-center justify-between gap-5">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-600">
                        Featured Product
                      </div>

                      <div className="mt-1 text-base font-black">
                        {account.title}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-600">
                        Price
                      </div>

                      <div className="mt-1 text-2xl font-black text-lime-400">
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

      {/* STATUS */}
      <section className="border-y border-white/10 bg-[#0a0c0d]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600">
              Store Status
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm font-bold">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              Online
            </div>
          </div>

          <div className="px-6 py-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600">
              Availability
            </div>

            <div className="mt-2 text-sm font-bold">
              {account.stock} account available
            </div>
          </div>

          <div className="px-6 py-7">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600">
              Support
            </div>

            <div className="mt-2 text-sm font-bold">
              Discord assistance
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10">
          <div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-lime-400">
            Explore Store
          </div>

          <h2 className="text-3xl font-black sm:text-4xl">
            Available Products
          </h2>

          <p className="mt-2 text-sm text-zinc-600">
            Browse our currently available CS2 account.
          </p>
        </div>

        <Link href="/product/1" className="group block max-w-md">
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] transition duration-300 hover:-translate-y-1 hover:border-lime-400/40">
            {/* PRODUCT IMAGE */}
            <div className="relative h-52 overflow-hidden border-b border-white/10">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(163,230,53,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.06) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="absolute left-4 top-4 rounded-full border border-lime-500/30 bg-black/80 px-3 py-1 text-[10px] font-bold text-lime-400">
                ● In stock
              </div>

              <div className="flex h-full items-center justify-center">
                <div className="text-3xl font-black italic">
                  CS2<span className="text-lime-400">MARKET</span>
                </div>
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-lg font-black">{account.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {account.trust}, Prime Account and {account.level}.
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-600">
                    Price
                  </div>

                  <div className="mt-1 text-xl font-black">
                    ${account.price}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs font-semibold text-zinc-600">
                  View product details
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition group-hover:border-lime-400/40 group-hover:text-lime-400">
                  ↗
                </span>
              </div>
            </div>
          </article>
        </Link>
      </section>

      {/* SUPPORT */}
      <section
        id="support"
        className="border-t border-white/10 bg-[#0a0c0d]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-[#070809] p-8 sm:p-10 md:flex-row md:items-center">
            <div>
              <div className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-lime-400">
                Need Assistance?
              </div>

              <h2 className="text-2xl font-black sm:text-3xl">
                Our support team is on Discord.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
                Have a question about a product or need help? Contact our
                support team through our Discord server.
              </p>
            </div>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-lime-400 px-6 py-3.5 text-center text-sm font-black text-black transition hover:bg-lime-300"
            >
              Join Discord →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-xs text-zinc-700 sm:flex-row">
          <div>© 2026 CS2MARKET. All rights reserved.</div>

          <div className="font-bold uppercase tracking-[0.2em]">
            Premium Digital Marketplace
          </div>
        </div>
      </footer>
    </main>
  );
}