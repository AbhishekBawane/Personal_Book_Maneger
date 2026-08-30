export default function Books() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold">
          Books
        </h1>

        <p className="text-slate-400 mt-2">
          Explore books and discover your next read.
        </p>

        {/* Search */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full md:w-96 px-4 py-3 rounded-lg
                       bg-slate-900
                       border border-slate-800
                       text-white
                       placeholder-slate-500
                       outline-none
                       focus:border-emerald-500"
          />
        </div>

        {/* Temporary books */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold">
              Atomic Habits
            </h2>

            <p className="text-slate-400 mt-2">
              James Clear
            </p>

            <p className="text-slate-500 text-sm mt-4">
              A guide to building good habits and breaking bad ones.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold">
              The Alchemist
            </h2>

            <p className="text-slate-400 mt-2">
              Paulo Coelho
            </p>

            <p className="text-slate-500 text-sm mt-4">
              A story about dreams, purpose and finding your path.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold">
              Clean Code
            </h2>

            <p className="text-slate-400 mt-2">
              Robert C. Martin
            </p>

            <p className="text-slate-500 text-sm mt-4">
              Principles and practices for writing maintainable software.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}