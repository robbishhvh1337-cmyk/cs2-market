"use client";

import { useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "Bx,;..Yv~X[=FWN;"
    ) {
      localStorage.setItem("cs2market_admin", "true");
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-lime-500/40 bg-lime-500/10 text-2xl font-black text-lime-400">
            C
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            CS2<span className="text-lime-400">MARKET</span>
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Administrator Login
          </p>
        </div>

        {/* LOGIN CARD */}
        <form
          onSubmit={handleLogin}
          className="rounded-2xl border border-white/10 bg-zinc-950 p-7 shadow-2xl"
        >

          {/* USERNAME */}
          <div className="mb-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              placeholder="Enter username"
              autoComplete="username"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter password"
              autoComplete="current-password"
              className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400"
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full rounded-lg bg-lime-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-lime-300 active:scale-[0.99]"
          >
            LOGIN
          </button>

          <p className="mt-5 text-center text-xs text-zinc-600">
            CS2MARKET Administration
          </p>
        </form>
      </div>
    </main>
  );
}