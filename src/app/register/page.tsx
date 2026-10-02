
"use client";

import { useState } from "react";
import { createClient } from "/workspaces/leer-site/lib/supabase/client";
import Link from "next/link";

export default function RegisterPage() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");
  const [melding, setMelding] = useState("");
  const [bezig, setBezig] = useState(false);

  async function registreer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMelding("");
    setBezig(true);

    try {
      const supabase = createClient();

      const { data, error } = await supabase.auth.signUp({
        email,
        password: wachtwoord,
        options: {
          data: {
            display_name: naam,
          },
        },
      });

      if (error) {
        setMelding(error.message);
        return;
      }

      if (data.user && data.user.identities?.length === 0) {
        setMelding(
          "Met dit e-mailadres bestaat mogelijk al een account."
        );
        return;
      }

      setMelding(
        "Je account is aangemaakt! Controleer je e-mail om je account te bevestigen."
      );
    } catch {
      setMelding(
        "Er ging iets mis. Controleer je Supabase-instellingen en probeer opnieuw."
      );
    } finally {
      setBezig(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Terug naar de homepage
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Maak je account
        </h1>

        <p className="mt-2 text-slate-600">
          Maak een account aan en houd je leerresultaten bij.
        </p>

        <form onSubmit={registreer} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="naam"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Naam
            </label>
            <input
              id="naam"
              type="text"
              autoComplete="name"
              required
              value={naam}
              onChange={(event) => setNaam(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Je naam"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              E-mailadres
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="jij@voorbeeld.nl"
            />
          </div>

          <div>
            <label
              htmlFor="wachtwoord"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Wachtwoord
            </label>
            <input
              id="wachtwoord"
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
              value={wachtwoord}
              onChange={(event) =>
                setWachtwoord(event.target.value)
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Minimaal 8 tekens"
            />
          </div>

          <button
            type="submit"
            disabled={bezig}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {bezig ? "Account aanmaken..." : "Account aanmaken"}
          </button>
        </form>

        {melding && (
          <p
            role="status"
            className="mt-5 rounded-lg bg-slate-100 p-4 text-sm text-slate-700"
          >
            {melding}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-slate-600">
          Heb je al een account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Inloggen
          </Link>
        </p>
      </div>
    </main>
  );
}