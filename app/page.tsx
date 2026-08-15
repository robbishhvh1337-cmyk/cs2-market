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
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/[0.07]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime-500/60 bg-lime-500/10">
              <span className="text-xl font-black text-lime-400">C</span>
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                CS2<span className="text-lime-400">MARKET</span>
              </div>

              <div className="text-[8px] font-bold tracking-[0.28em] text-zinc-600">
                PREMIUM GAMING MARKETPLACE
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-bold text-lime-400 transition hover:text-lime-300"
            >
              Home
            </Link>

            <Link
              href="#support"
              className="text-sm font-semibold text-zinc-500 transition hover:text-zinc-300"
            >
              Support
            </Link>

            {/* ADMIN LOGIN */}
            <Link
              href="/admin"
              className="rounded-lg border border-lime-500/40 px-5 py-2.5 text-sm font-bold text-lime-400 transition hover:border-lime-400 hover:bg-lime-400/10"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.18em] text-lime-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            {account.stock} ACCOUNT AVAILABLE
          </div>

          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            CS2 ACCOUNTS
          </h1>

          <p className="mt-2 text-sm text-zinc-600">
            Browse available accounts and view complete information.
          </p>
        </div>

        {/* PRODUCT CARD */}
        <div className="w-full max-w-sm">
          <Link href="/product/1" className="group block">
            <article className="overflow-hidden rounded-2xl border border-lime-500/50 bg-zinc-950 transition duration-200 hover:border-lime-400 hover:shadow-[0_0_35px_rgba(132,255,0,0.08)]">
              {/* IMAGE / PREVIEW */}
              <div className="relative h-48 overflow-hidden border-b border-white/[0.06] bg-[#0b0e0b]">
                {/* subtle grid */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(132,255,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(132,255,0,0.08) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* green glow */}
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl" />

                {/* STOCK */}
                <div className="absolute left-4 top-4 rounded-full border border-lime-500/40 bg-black/80 px-3 py-1 text-[10px] font-bold text-lime-400">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
                  In stock
                </div>

                <div className="relative flex h-full flex-col items-center justify-center">
                  <div className="text-3xl font-black italic tracking-tight">
                    CS2<span className="text-lime-400">MARKET</span>
                  </div>

                  <div className="mt-1 text-[8px] font-bold tracking-[0.3em] text-zinc-600">
                    PREMIUM ACCOUNT
                  </div>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-5">
                <h2 className="text-lg font-black">
                  {account.title}
                </h2>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-500">
                  Permanent Green Trust, Prime Account, Steam Level 6 and
                  detailed account history.
                </p>

                <div className="my-5 h-px bg-white/[0.07]" />

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.16em] text-zinc-600">
                      PRICE
                    </div>

                    <div className="mt-1 text-2xl font-black">
                      ${account.price}
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-lg text-zinc-400 transition group-hover:border-lime-400/50 group-hover:text-lime-400">
                    ↗
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* SUPPORT */}
      <section
        id="support"
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <div className="border-t border-white/[0.06] pt-8">
          <p className="text-xs text-zinc-700">
            Need assistance? Contact our support team through Discord.
          </p>

          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-zinc-500 transition hover:text-lime-400"
          >
            Discord Support →
          </a>
        </div>
      </section>
    </main>
  );
}