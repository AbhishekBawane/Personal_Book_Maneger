import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-xl font-bold">
            📚 Personal Book Manager
          </h1>

          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="text-slate-300 hover:text-white transition"
            >
              Login
            </a>

            <a
              href="/signup"
              className="bg-emerald-600 hover:bg-emerald-700
                         px-4 py-2 rounded-lg
                         font-medium transition"
            >
              Sign Up
            </a>
          </div>

        </div>
      </nav>


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl">

          <p className="text-emerald-400 font-medium mb-4">
            YOUR PERSONAL READING SPACE
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Keep every book you love
            <span className="text-emerald-400">
              {" "}in one place.
            </span>
          </h2>

          <p className="text-slate-400 text-lg mt-6 max-w-2xl">
            Track what you want to read, what you're reading,
            and the books you've completed.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="/signup"
              className="bg-emerald-600 hover:bg-emerald-700
                         px-6 py-3 rounded-lg
                         font-semibold transition"
            >
              Start Your Library
            </a>

            <a
              href="/books"
              className="border border-slate-700
                         hover:bg-slate-900
                         px-6 py-3 rounded-lg
                         font-semibold transition"
            >
              Explore Books
            </a>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <div className="text-3xl mb-4">📖</div>

            <h3 className="text-xl font-semibold">
              Personal Library
            </h3>

            <p className="text-slate-400 mt-2">
              Keep all your books organized in one personal collection.
            </p>
          </div>


          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <div className="text-3xl mb-4">✅</div>

            <h3 className="text-xl font-semibold">
              Track Progress
            </h3>

            <p className="text-slate-400 mt-2">
              Move books between Want to Read, Reading and Completed.
            </p>
          </div>


          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
            <div className="text-3xl mb-4">🏷️</div>

            <h3 className="text-xl font-semibold">
              Organize With Tags
            </h3>

            <p className="text-slate-400 mt-2">
              Add tags to quickly categorize and filter your collection.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
