"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PersonalBooks() {
  const router = useRouter();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBooks() {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/books`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      setBooks(data.books || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">My Books</h1>
            <p className="text-slate-400 mt-2">
              Your personal collection
            </p>
          </div>

          <button
            onClick={logout}
            className="text-red-400 hover:text-red-300"
          >
            Logout
          </button>
        </div>

        {books.length === 0 ? (
          <div className="bg-slate-900 rounded-2xl p-10 text-center">
            <h2 className="text-xl font-semibold">
              Your library is empty
            </h2>

            <p className="text-slate-400 mt-2">
              Add your first book soon.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <h2 className="text-xl font-bold">
                  {book.title}
                </h2>

                <p className="text-slate-400 mt-2">
                  {book.author}
                </p>

                <div className="mt-4">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                    {book.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {book.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-800 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}