"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PersonalBooks() {
  const router = useRouter();

  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("Want to Read");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Get user's books
  async function getBooks() {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Unable to load books");
        return;
      }

      setBooks(data.books || []);
    } catch (error) {
      setMessage("Unable to connect to server.");
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  // Add book
  async function handleAddBook(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");

    const bookData = {
      title,
      author,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
      status,
    };

    try {
      const response = await fetch(`${API_URL}/api/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Unable to add book");
        return;
      }

      setMessage("Book added successfully!");

      // Clear form
      setTitle("");
      setAuthor("");
      setTags("");
      setStatus("Want to Read");

      setShowForm(false);

      // Reload books
      getBooks();
    } catch (error) {
      setMessage("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      {/* Header */}
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-3xl font-bold">
              📚 Personal Books
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your personal library.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-lg font-semibold"
          >
            {showForm ? "Cancel" : "+ Add Book"}
          </button>

        </div>


        {/* Add Book Form */}
        {showForm && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">

            <h2 className="text-xl font-bold mb-5">
              Add a New Book
            </h2>

            <form
              onSubmit={handleAddBook}
              className="space-y-4"
            >

              {/* Title */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Book Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter book title"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500"
                />
              </div>


              {/* Author */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Author
                </label>

                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter author name"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500"
                />
              </div>


              {/* Tags */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Tags
                </label>

                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Programming, Technology, Fiction"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500"
                />

                <p className="text-xs text-slate-500 mt-1">
                  Separate tags with commas.
                </p>
              </div>


              {/* Status */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Reading Status
                </label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none"
                >
                  <option value="Want to Read">
                    Want to Read
                  </option>

                  <option value="Reading">
                    Reading
                  </option>

                  <option value="Completed">
                    Completed
                  </option>
                </select>
              </div>


              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Adding..." : "Add Book"}
              </button>

            </form>
          </div>
        )}


        {/* Message */}
        {message && (
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-6">
            {message}
          </div>
        )}


        {/* Books */}
        <div>

          <h2 className="text-xl font-bold mb-4">
            My Books
          </h2>

          {books.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center">

              <p className="text-slate-400">
                You haven't added any books yet.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="mt-4 text-emerald-400 hover:text-emerald-300"
              >
                + Add your first book
              </button>

            </div>
          ) : (

            <div className="grid gap-4">

              {books.map((book) => (

                <div
                  key={book._id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                >

                  <div className="flex justify-between">

                    <div>
                      <h3 className="text-xl font-bold">
                        {book.title}
                      </h3>

                      <p className="text-slate-400 mt-1">
                        by {book.author}
                      </p>
                    </div>

                    <span className="text-sm bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full h-fit">
                      {book.status}
                    </span>

                  </div>


                  {/* Tags */}
                  {book.tags?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-4">

                      {book.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}

                    </div>
                  )}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </main>
  );
}
