"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const DISCORD_LINK = "https://discord.gg/jj6vEMqtS";

const account = {
  price: 60,
  stock: 1,

  inventory: {
    steam: "$2.06",
    cs2: "$0",
    total: "$2.06",
  },

  cs2: {
    wingman: "No",
    lastActivity: "Jun 18, 2022",
    lastLaunch: "Jul 14, 2022",
    profileRank: "5",
    premierWins: "0",
    faceit: "No",
  },

  reliable: {
    balance: "$0",
    steamPoints: "28,708",
    lastActivity: "Jul 17, 2022",
    playedTwoWeeks: "0.00 hrs.",
    registerDate: "Apr 8, 2020",
    level: "6",
    friends: "0",
    relevantGames: "25",
    totalGames: "34",
    activatedKeys: "No",
    country: "Japan",
    origin: "Brute-force",
  },

  transactions: {
    gifts: "$23.17",
    games: "$24.25",
    amountOfGames: "$427.29",
    purchased: "$450.45",
    spend: "$480.05",
  },
};

function InfoRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/[0.05] py-3 last:border-0">
      <span className="flex items-center gap-2 text-sm text-zinc-500">
        <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
        {title}
      </span>

      <span className="text-right text-sm font-bold text-zinc-200">
        {value}
      </span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-sm font-black tracking-[0.12em] text-lime-400">
      {children}
    </h2>
  );
}

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/[0.07]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime-500/50 bg-lime-500/10">
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

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-zinc-500 transition hover:text-zinc-300"
            >
              Support
            </a>

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
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex text-sm font-semibold text-zinc-600 transition hover:text-lime-400"
        >
          ← Back to accounts
        </Link>

        {/* TITLE */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-black tracking-[0.18em] text-lime-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            ACCOUNT AVAILABLE
          </div>

          <h1 className="max-w-5xl text-base font-black leading-7 tracking-tight text-zinc-100 md:text-lg">
            💰 $480 SPENT 💰 | 🟢 PERMANENT GREEN TRUST 🟢 | ⭐ PRIME ACCOUNT ⭐
            {" | "}STEAM LVL 6 | NO FACEIT LINKED | 🔑 NO ACTIVATED KEYS 🔑
          </h1>
        </div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* LEFT CONTENT */}
          <div className="rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 md:p-8">
            {/* INVENTORY VALUE */}
            <section>
              <SectionTitle>INVENTORY VALUE</SectionTitle>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="border border-white/[0.06] bg-white/[0.015] p-5">
                  <p className="text-xs text-zinc-600">
                    Steam Inventory
                  </p>
                  <p className="mt-2 text-lg font-black">
                    {account.inventory.steam}
                  </p>
                </div>

                <div className="border border-white/[0.06] bg-white/[0.015] p-5">
                  <p className="text-xs text-zinc-600">
                    CS2 Inventory
                  </p>
                  <p className="mt-2 text-lg font-black">
                    {account.inventory.cs2}
                  </p>
                </div>

                <div className="border border-lime-500/20 bg-lime-500/[0.025] p-5">
                  <p className="text-xs text-zinc-600">
                    Total Inventory Value
                  </p>
                  <p className="mt-2 text-lg font-black text-lime-400">
                    {account.inventory.total}
                  </p>
                </div>
              </div>
            </section>

            <div className="my-8 h-px bg-white/[0.06]" />

            {/* CS2 STATISTICS */}
            <section>
              <SectionTitle>CS2 STATISTICS</SectionTitle>

              <div className="grid gap-x-10 md:grid-cols-2">
                <InfoRow
                  title="Wingman Mode (2×2)"
                  value={account.cs2.wingman}
                />

                <InfoRow
                  title="CS2 Last Activity"
                  value={account.cs2.lastActivity}
                />

                <InfoRow
                  title="CS2 Last Launch Date"
                  value={account.cs2.lastLaunch}
                />

                <InfoRow
                  title="CS2 Profile Rank"
                  value={account.cs2.profileRank}
                />

                <InfoRow
                  title="CS2 Premier Wins"
                  value={account.cs2.premierWins}
                />

                <InfoRow
                  title="FACEIT Linked"
                  value={account.cs2.faceit}
                />
              </div>

              <div className="mt-5 border border-yellow-500/20 bg-yellow-500/[0.025] p-4 text-xs leading-6 text-zinc-500">
                <span className="font-bold text-yellow-400">
                  Note:
                </span>{" "}
                The current rank is probably out of date since the last match
                was played more than a month ago. You will have to play one MM
                game to get the new rank, it may be less than the current one.
              </div>
            </section>

            <div className="my-8 h-px bg-white/[0.06]" />

            {/* RELIABLE INFORMATION */}
            <section>
              <SectionTitle>RELIABLE INFORMATION</SectionTitle>

              <div className="grid gap-x-10 md:grid-cols-2">
                <InfoRow
                  title="Balance"
                  value={account.reliable.balance}
                />

                <InfoRow
                  title="Steam Points"
                  value={account.reliable.steamPoints}
                />

                <InfoRow
                  title="Last Activity"
                  value={account.reliable.lastActivity}
                />

                <InfoRow
                  title="Total Played for 2 Weeks"
                  value={account.reliable.playedTwoWeeks}
                />

                <InfoRow
                  title="Register Date"
                  value={account.reliable.registerDate}
                />

                <InfoRow
                  title="Account Level"
                  value={account.reliable.level}
                />

                <InfoRow
                  title="Friends"
                  value={account.reliable.friends}
                />

                <InfoRow
                  title="Relevant Games"
                  value={account.reliable.relevantGames}
                />

                <InfoRow
                  title="Total Games"
                  value={account.reliable.totalGames}
                />

                <InfoRow
                  title="Has Activated Keys"
                  value={account.reliable.activatedKeys}
                />

                <InfoRow
                  title="Country"
                  value={account.reliable.country}
                />

                <InfoRow
                  title="Account Origin"
                  value={account.reliable.origin}
                />
              </div>
            </section>

            <div className="my-8 h-px bg-white/[0.06]" />

            {/* TRANSACTION STATS */}
            <section>
              <SectionTitle>TRANSACTION STATS</SectionTitle>

              <div className="grid gap-x-10 md:grid-cols-2">
                <InfoRow
                  title="Total Gifts"
                  value={account.transactions.gifts}
                />

                <InfoRow
                  title="Total Games"
                  value={account.transactions.games}
                />

                <InfoRow
                  title="Total Amount of Games"
                  value={account.transactions.amountOfGames}
                />

                <InfoRow
                  title="Total Purchased"
                  value={account.transactions.purchased}
                />

                <InfoRow
                  title="Total Spend"
                  value={account.transactions.spend}
                />
              </div>
            </section>

            {/* WARNING */}
            <div className="mt-8 border border-yellow-500/20 bg-yellow-500/[0.025] p-4 text-xs leading-6 text-zinc-500">
              <span className="font-bold text-yellow-400">
                ⚠️ Important:
              </span>{" "}
              Changing your Steam region within 2 weeks or contacting Steam
              Support is prohibited. Additionally, do not add funds to the
              account during this period. Failure to comply may result in the
              account being locked, and no refunds will be provided in such
              cases.
            </div>
          </div>

          {/* PURCHASE PANEL */}
          <aside className="h-fit rounded-2xl border border-white/[0.08] bg-zinc-950 p-6 lg:sticky lg:top-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-lime-500/30 bg-lime-500/[0.04] px-3 py-1 text-[10px] font-black text-lime-400">
                IN STOCK
              </span>

              <span className="text-xs font-bold text-zinc-600">
                STOCK: {account.stock}
              </span>
            </div>

            <h2 className="mt-6 text-lg font-black">
              CS2 Prime Account
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Permanent Green Trust, Prime Account, Steam Level 6 and detailed
              account history.
            </p>

            <div className="my-6 h-px bg-white/[0.06]" />

            <div className="text-[10px] font-bold tracking-[0.16em] text-zinc-600">
              PRICE
            </div>

            <div className="mt-1 text-4xl font-black text-lime-400">
              ${account.price}
            </div>

            <div className="my-6 h-px bg-white/[0.06]" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-zinc-400">
                <span className="text-lime-400">✓</span>
                Permanent Green Trust
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <span className="text-lime-400">✓</span>
                Prime Account
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <span className="text-lime-400">✓</span>
                Steam Level 6
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <span className="text-lime-400">✓</span>
                FACEIT Not Linked
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <span className="text-lime-400">✓</span>
                No Activated Keys
              </div>
            </div>

            <div className="my-6 h-px bg-white/[0.06]" />

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl bg-lime-400 px-5 py-4 text-center text-sm font-black text-black transition hover:bg-lime-300 active:scale-[0.99]"
            >
              BUY NOW — ${account.price}
            </a>

            <p className="mt-4 text-center text-[11px] leading-5 text-zinc-700">
              Payment and order processing are handled through Discord.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}