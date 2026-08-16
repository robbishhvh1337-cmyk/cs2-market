"use client";

import Link from "next/link";

const DISCORD_LINK = "https://discord.gg/jj6vEMqtS";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13171b] text-[#dbdee1]">

      {/* TOP BAR */}
      <header className="border-b border-white/[0.06] bg-[#111417]">
        <div className="mx-auto flex h-[64px] max-w-[1400px] items-center px-4">

          {/* LOGO / PROFILE */}
          <Link
            href="/"
            className="flex h-[46px] w-[245px] items-center gap-3 rounded-[8px] border border-white/[0.08] bg-[#171a1e] px-3 transition hover:bg-[#1b1f23]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d2428] text-sm font-black text-lime-400">
              C
            </div>

            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-semibold text-[#f2f3f5]">
                CS2MARKET
              </div>

              <div className="flex items-center gap-1.5 truncate text-[10px] text-[#72777d]">
                <span className="h-[7px] w-[7px] rounded-full bg-lime-400" />
                cs2-market.com
              </div>
            </div>

            <div className="text-[#72777d]">⌄</div>
          </Link>

          {/* NAVIGATION */}
          <nav className="ml-5 flex h-full items-center gap-1">

            <Link
              href="/"
              className="flex h-full items-center px-4 text-[13px] font-medium text-[#f2f3f5] hover:text-white"
            >
              Store
            </Link>

            <Link
              href="/product/1"
              className="flex h-full items-center px-4 text-[13px] font-medium text-[#949ba3] hover:text-white"
            >
              Accounts
            </Link>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full items-center px-4 text-[13px] font-medium text-[#949ba3] hover:text-white"
            >
              Discord
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-5">

            <div className="flex items-center gap-2 text-[11px] font-medium text-[#949ba3]">
              <span className="h-[7px] w-[7px] rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.7)]" />
              Store Online
            </div>

            <Link
              href="/admin"
              className="rounded-[6px] border border-white/[0.08] bg-[#171a1e] px-4 py-2 text-[12px] font-semibold text-[#b5bac1] transition hover:bg-[#1c2024] hover:text-white"
            >
              Admin
            </Link>

          </div>
        </div>
      </header>


      {/* MAIN */}
      <div className="mx-auto flex max-w-[1400px]">

        {/* LEFT SIDEBAR */}
        <aside className="hidden w-[245px] shrink-0 border-r border-white/[0.06] px-3 py-4 lg:block">

          <div className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#72777d]">
            Marketplace
          </div>

          <Link
            href="/"
            className="mb-1 flex items-center gap-3 rounded-[5px] bg-[#1d2227] px-3 py-2.5 text-[13px] font-medium text-white"
          >
            <span className="text-lime-400">▣</span>
            Featured
          </Link>

          <Link
            href="/product/1"
            className="mb-1 flex items-center gap-3 rounded-[5px] px-3 py-2.5 text-[13px] text-[#949ba3] transition hover:bg-[#191d21] hover:text-white"
          >
            <span>◆</span>
            CS2 Accounts
          </Link>

          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1 flex items-center gap-3 rounded-[5px] px-3 py-2.5 text-[13px] text-[#949ba3] transition hover:bg-[#191d21] hover:text-white"
          >
            <span>◉</span>
            Support
          </a>

          <div className="my-5 border-t border-white/[0.05]" />

          <div className="mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#72777d]">
            Store Status
          </div>

          <div className="rounded-[6px] border border-white/[0.06] bg-[#171a1e] p-3">

            <div className="flex items-center gap-2 text-[12px] font-medium text-[#dbdee1]">
              <span className="h-[7px] w-[7px] rounded-full bg-lime-400" />
              Store Online
            </div>

            <div className="mt-2 text-[10px] leading-5 text-[#72777d]">
              All systems operational.
            </div>

          </div>

        </aside>


        {/* CONTENT */}
        <section className="min-w-0 flex-1">

          {/* CHANNEL / PAGE HEADER */}
          <div className="flex h-[58px] items-center border-b border-white/[0.06] px-5">

            <div className="flex items-center gap-3">

              <span className="text-[#72777d]">#</span>

              <div>
                <div className="text-[13px] font-semibold text-white">
                  store
                </div>
                <div className="text-[10px] text-[#72777d]">
                  Premium CS2 accounts
                </div>
              </div>

            </div>

            <div className="ml-auto flex items-center gap-5 text-[#72777d]">
              <span className="text-sm">⌕</span>
              <span className="text-sm">?</span>
              <span className="text-sm">⚙</span>
            </div>

          </div>


          {/* HERO */}
          <div className="relative overflow-hidden border-b border-white/[0.06]">

            {/* subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* green glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.025] blur-[120px]" />

            <div className="relative px-6 py-20 text-center sm:py-28">

              <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#72777d]">
                Premium Gaming Marketplace
              </div>

              <h1 className="text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl">
                CS2<span className="text-lime-400">MARKET</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[500px] text-[13px] leading-6 text-[#72777d]">
                Reliable CS2 accounts with detailed information,
                secure purchasing and fast digital delivery.
              </p>

              <div className="mt-8 flex justify-center gap-2">

                <Link
                  href="/product/1"
                  className="rounded-[6px] bg-lime-400 px-5 py-2.5 text-[12px] font-bold text-[#111417] transition hover:bg-lime-300"
                >
                  Browse Accounts
                </Link>

                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[6px] border border-white/[0.08] bg-[#171a1e] px-5 py-2.5 text-[12px] font-semibold text-[#b5bac1] transition hover:bg-[#1d2227] hover:text-white"
                >
                  Join Discord
                </a>

              </div>

            </div>
          </div>


          {/* PRODUCT MESSAGE */}
          <div className="border-b border-white/[0.06] px-5 py-6">

            <div className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#72777d]">
              <span>Featured Product</span>
              <span className="text-[#44484d]">/</span>
              <span>1 Available</span>
            </div>


            {/* PRODUCT ROW */}
            <Link
              href="/product/1"
              className="group flex items-center gap-4 rounded-[7px] px-2 py-3 transition hover:bg-[#171a1e]"
            >

              {/* ICON */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-[#171a1e] text-sm font-black italic text-lime-400">
                C
              </div>


              {/* PRODUCT INFO */}
              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-2">

                  <span className="text-[13px] font-semibold text-white">
                    CS2 Prime Account
                  </span>

                  <span className="rounded-[3px] bg-lime-400/[0.08] px-1.5 py-0.5 text-[8px] font-bold uppercase text-lime-400">
                    In Stock
                  </span>

                </div>

                <div className="mt-1 text-[11px] text-[#72777d]">
                  Permanent Green Trust · Prime · Steam Level 6
                </div>

                <div className="mt-2 flex flex-wrap gap-2">

                  <span className="text-[9px] text-[#5d6369]">
                    ✓ Verified
                  </span>

                  <span className="text-[9px] text-[#5d6369]">
                    ✓ Secure Purchase
                  </span>

                  <span className="text-[9px] text-[#5d6369]">
                    ✓ Digital Delivery
                  </span>

                </div>

              </div>


              {/* PRICE */}
              <div className="hidden text-right sm:block">

                <div className="text-[9px] uppercase tracking-wider text-[#5d6369]">
                  Price
                </div>

                <div className="mt-1 text-[15px] font-bold text-lime-400">
                  $60
                </div>

              </div>


              {/* ARROW */}
              <div className="ml-2 text-[#5d6369] transition group-hover:translate-x-1 group-hover:text-lime-400">
                →
              </div>

            </Link>

          </div>


          {/* INFORMATION */}
          <div className="px-5 py-7">

            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#72777d]">
              Marketplace Information
            </div>

            <div className="grid gap-px overflow-hidden rounded-[7px] border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">

              <div className="bg-[#171a1e] px-4 py-4">
                <div className="text-[10px] text-[#5d6369]">
                  Store Status
                </div>
                <div className="mt-1 flex items-center gap-2 text-[12px] font-semibold">
                  <span className="h-[6px] w-[6px] rounded-full bg-lime-400" />
                  Online
                </div>
              </div>

              <div className="bg-[#171a1e] px-4 py-4">
                <div className="text-[10px] text-[#5d6369]">
                  Delivery
                </div>
                <div className="mt-1 text-[12px] font-semibold text-[#dbdee1]">
                  Digital
                </div>
              </div>

              <div className="bg-[#171a1e] px-4 py-4">
                <div className="text-[10px] text-[#5d6369]">
                  Support
                </div>
                <div className="mt-1 text-[12px] font-semibold text-[#dbdee1]">
                  Discord
                </div>
              </div>

            </div>

          </div>


          {/* FOOTER MESSAGE STYLE */}
          <div className="border-t border-white/[0.06] px-5 py-7">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1d2227] text-[11px] font-black text-lime-400">
                C
              </div>

              <div className="flex-1 rounded-[7px] border border-white/[0.06] bg-[#171a1e] px-4 py-3 text-[11px] text-[#72777d]">
                Need help? Contact CS2MARKET support through Discord.
              </div>

              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-[6px] border border-white/[0.07] bg-[#171a1e] px-4 py-2.5 text-[11px] font-semibold text-[#b5bac1] transition hover:bg-[#1d2227] hover:text-white sm:block"
              >
                Contact
              </a>

            </div>

          </div>

        </section>
      </div>


      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#111417]">

        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 text-[10px] text-[#5d6369]">

          <span>
            © 2026 CS2MARKET
          </span>

          <span>
            Premium Digital Marketplace
          </span>

        </div>

      </footer>

    </main>
  );
}