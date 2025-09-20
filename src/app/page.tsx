"use client";

import { useState } from "react";
import { Logo } from "@/components/icons/Icons";
import { createBrowserClient } from "@supabase/ssr";

function useSupabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[500px] h-[500px] flex flex-col justify-center items-center mb-10 bg-white rounded-lg shadow-lg">
        <div className="icon_div flex flex-row gap-2 items-center">
          <Logo />
          <h1 className="icon_text">Tally</h1>
        </div>
        <LoginPage />
      </div>

      <footer>
        <h1>F25 Lava Dev Challenge</h1>
        <p>By Karen Mkrtchyan</p>
      </footer>
    </div>
  );
}

function LoginPage() {
  const supabase = useSupabase();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo:
          "http://Karen-devChallenge.vercel.app/dashboard/materials",
      },
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message || "Failed to send magic link.");
    } else {
      setStatus("sent");
    }
  }

  return (
    <form
      onSubmit={sendMagicLink}
      className="flex flex-col gap-3 w-[320px] mt-8"
    >
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="border rounded px-3 py-2"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded bg-black text-white py-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send magic link"}
      </button>

      {status === "sent" && (
        <p className="text-xs text-green-600">Check your email for the link.</p>
      )}
      {status === "error" && errorMsg && (
        <p className="text-xs text-red-600">{errorMsg}</p>
      )}
    </form>
  );
}
