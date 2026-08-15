"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("cs2market_admin");

    if (loggedIn !== "true") {
      window.location.href = "/admin";
      return;
    }

    setAuthorized(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("cs2market_admin");
    window.location.href = "/admin";
  };

  if (!authorized) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white">
        <p className="text-zinc-500">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-lime-500/40 bg-lime-500/10 font-black text-lime-400">
              C
            </div>

            <div>
              <h1 className="text-lg font-bold">
                CS2<span className="text-lime-400">MARKET</span>
              </h1>

              <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                Administration
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-red-500/40 hover:text-red-400"
          >
            Logout
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-lime-400">
            Admin Panel
          </p>

          <h2 className="text-3xl font-bold">
            Dashboard
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Manage your CS2MARKET store from here.
          </p>
        </div>

        {/* STATS */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Products
            </p>

            <p className="mt-3 text-3xl font-bold">
              1
            </p>

            <p className="mt-1 text-xs text-lime-400">
              Active listing
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Stock
            </p>

            <p className="mt-3 text-3xl font-bold">
              1
            </p>

            <p className="mt-1 text-xs text-lime-400">
              Available account
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Price
            </p>

            <p className="mt-3 text-3xl font-bold text-lime-400">
              $60
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Current listing price
            </p>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="mt-8 rounded-xl border border-white/10 bg-zinc-950">
          <div className="border-b border-white/10 px-6 py-5">
            <h3 className="font-bold">
              Current Product
            </h3>
          </div>

          <div className="p-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-lg font-bold">
                  CS2 Prime Account
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Permanent Green Trust, Prime Account,
                  Steam Level 6 and detailed account history.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full border border-lime-500/30 bg-lime-500/5 px-3 py-1 text-xs font-semibold text-lime-400">
                  IN STOCK
                </span>

                <span className="text-lg font-bold">
                  $60
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FUTURE FEATURES */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
            <h3 className="font-bold">
              Product Management
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Edit product information, price and stock.
            </p>

            <button
              disabled
              className="mt-5 rounded-lg bg-zinc-900 px-4 py-2 text-sm text-zinc-600"
            >
              Coming Soon
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
            <h3 className="font-bold">
              Orders
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              View and manage customer orders.
            </p>

            <button
              disabled
              className="mt-5 rounded-lg bg-zinc-900 px-4 py-2 text-sm text-zinc-600"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}