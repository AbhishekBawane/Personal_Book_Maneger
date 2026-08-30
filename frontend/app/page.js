"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedIn(false);

    router.push("/");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold">
          📚 Personal Book Manager
        </h1>

        <div className="flex gap-4">

          {loggedIn ? (
            <>
              <Link
                href="/personal-books"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                My Books
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-800"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>

      </nav>

      {/* Main content */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

        <h2 className="text-5xl font-bold mb-6">
          Your Personal Library
        </h2>

        <p className="text-slate-400 text-lg max-w-xl mb-8">
          Keep track of the books you want to read, are currently reading,
          and have already completed.
        </p>

        {loggedIn && (
          <Link
            href="/personal-books"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold"
          >
            Go to My Books
          </Link>
        )}

      </section>

    </main>
  );
}
