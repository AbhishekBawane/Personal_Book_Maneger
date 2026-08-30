"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token) {
      setLoggedIn(true);

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedIn(false);
    setUser(null);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="text-3xl">
              📚
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Personal Book Manager
              </h1>

              <p className="text-xs text-slate-500">
                Your personal library
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3">

            {loggedIn ? (
              <>
                <Link
                  href="/"
                  className="hidden sm:block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  Home
                </Link>

                <Link
                  href="/books"
                  className="hidden sm:block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
                >
                  Books
                </Link>

                <Link
                  href="/personal-books"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium"
                >
                  My Books
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-5 py-2 rounded-lg border border-slate-600 hover:bg-slate-800 transition font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>

              {loggedIn && user && (
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span>👋</span>
                  <span>
                    Welcome back, {user.name || "Reader"}
                  </span>
                </div>
              )}

              {!loggedIn && (
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                  <span>📖</span>
                  <span>Your reading journey starts here</span>
                </div>
              )}

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Your books.
                <br />

                <span className="text-emerald-500">
                  Your library.
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
                Keep all your books organized in one place.
                Add books, manage your personal collection,
                organize them with tags, and keep track of
                your reading progress.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-8">

                {loggedIn ? (
                  <Link
                    href="/personal-books"
                    className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-semibold transition shadow-lg shadow-emerald-900/20"
                  >
                    Open My Library →
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/signup"
                      className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-semibold transition shadow-lg shadow-emerald-900/20"
                    >
                      Start Building Your Library →
                    </Link>

                    <Link
                      href="/login"
                      className="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 font-semibold transition"
                    >
                      I Already Have an Account
                    </Link>
                  </>
                )}

              </div>

            </div>


            {/* Book Illustration */}
            <div className="hidden lg:flex justify-center">

              <div className="relative w-80 h-80">

                {/* Glow */}
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl" />

                {/* Books */}
                <div className="absolute left-12 top-20 w-52 h-16 bg-emerald-600 rounded-lg rotate-[-8deg] shadow-2xl flex items-center justify-center">
                  <span className="font-bold text-lg">
                    My Library
                  </span>
                </div>

                <div className="absolute left-16 top-32 w-52 h-16 bg-blue-600 rounded-lg rotate-[5deg] shadow-2xl flex items-center justify-center">
                  <span className="font-bold text-lg">
                    Reading
                  </span>
                </div>

                <div className="absolute left-8 top-44 w-52 h-16 bg-purple-600 rounded-lg rotate-[-4deg] shadow-2xl flex items-center justify-center">
                  <span className="font-bold text-lg">
                    Completed
                  </span>
                </div>

                <div className="absolute left-24 top-8 text-7xl">
                  📚
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Features */}
      <section className="border-t border-slate-800 bg-slate-900/40">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-12">

            <p className="text-emerald-500 font-semibold mb-3">
              EVERYTHING IN ONE PLACE
            </p>

            <h3 className="text-3xl font-bold">
              Manage your reading life
            </h3>

            <p className="text-slate-400 mt-3">
              Simple tools to keep your personal library organized.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">

              <div className="text-4xl mb-5">
                📚
              </div>

              <h4 className="text-xl font-bold mb-3">
                Manage Books
              </h4>

              <p className="text-slate-400 leading-relaxed">
                Add, view, edit, and delete books from
                your personal collection.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">

              <div className="text-4xl mb-5">
                🏷️
              </div>

              <h4 className="text-xl font-bold mb-3">
                Organize with Tags
              </h4>

              <p className="text-slate-400 leading-relaxed">
                Use tags to organize your books and
                quickly find what you're looking for.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition">

              <div className="text-4xl mb-5">
                📈
              </div>

              <h4 className="text-xl font-bold mb-3">
                Track Your Progress
              </h4>

              <p className="text-slate-400 leading-relaxed">
                Keep track of books you want to read,
                are currently reading, or have completed.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">

          <p className="text-emerald-500 font-semibold mb-3">
            GET STARTED
          </p>

          <h3 className="text-3xl font-bold">
            Three simple steps
          </h3>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 flex items-center justify-center font-bold text-lg mb-5">
              1
            </div>

            <h4 className="text-xl font-bold mb-2">
              Create an Account
            </h4>

            <p className="text-slate-400">
              Sign up and create your personal library.
            </p>
          </div>


          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 flex items-center justify-center font-bold text-lg mb-5">
              2
            </div>

            <h4 className="text-xl font-bold mb-2">
              Add Your Books
            </h4>

            <p className="text-slate-400">
              Add books and organize them with tags.
            </p>
          </div>


          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 flex items-center justify-center font-bold text-lg mb-5">
              3
            </div>

            <h4 className="text-xl font-bold mb-2">
              Track Your Reading
            </h4>

            <p className="text-slate-400">
              Update your reading status as you progress.
            </p>
          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      {!loggedIn && (
        <section className="px-6 pb-20">

          <div className="max-w-5xl mx-auto rounded-3xl bg-emerald-600 px-8 py-14 text-center">

            <h3 className="text-3xl md:text-4xl font-bold">
              Ready to organize your books?
            </h3>

            <p className="mt-4 text-emerald-100">
              Create your personal library and start tracking your reading.
            </p>

            <Link
              href="/signup"
              className="inline-block mt-7 px-7 py-3 bg-white text-emerald-700 rounded-lg font-bold hover:bg-slate-100 transition"
            >
              Create Your Account
            </Link>

          </div>

        </section>
      )}


      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center">

        <p className="text-slate-500 text-sm">
          📚 Personal Book Manager
        </p>

        <p className="text-slate-600 text-xs mt-2">
          Your books. Your thoughts. Your library.
        </p>

      </footer>

    </main>
  );
}
