import { useState, useEffect } from "react";

// Reviews — відгуки роботодавців із JSONPlaceholder
function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/20/comments")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition-colors duration-300">
      <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-4 flex items-center gap-2">
        <span>💬</span> Відгуки роботодавців
      </h2>

      {/* Стан завантаження */}
      {loading && (
        <p className="text-sm text-slate-400 dark:text-slate-500 italic">
          Завантаження відгуків...
        </p>
      )}

      {/* Помилка */}
      {error && (
        <p className="text-sm text-red-400 italic">
          Не вдалося завантажити відгуки: {error}
        </p>
      )}

      {/* Список карток */}
      {!loading && !error && (
        <ul className="flex flex-col gap-3">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="border-l-4 border-indigo-500 dark:border-indigo-400 bg-indigo-50 dark:bg-gray-700/60 rounded-r-xl px-4 py-3 transition-colors duration-200"
            >
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <strong className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {review.name}
                </strong>
                <span className="text-xs text-indigo-500 dark:text-indigo-400">
                  {review.email}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {review.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Reviews;
