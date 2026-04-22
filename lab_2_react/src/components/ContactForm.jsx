import { useState, useEffect } from "react";

// ContactForm — модальне вікно форми зворотного зв'язку
// Автоматично відкривається через 60 секунд після завантаження сторінки
function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Відкрити модалку рівно через 60 000 мс
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer); // очистка при розмонтуванні
  }, []);

  // Якщо закрите — нічого не рендеримо
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch(e.target.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || "Помилка при відправці форми.");
      }
    } catch {
      setError("Немає з'єднання з мережею.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Напівпрозорий оверлей — перекриває весь екран
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
    >
      {/* Само вікно */}
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transition-colors duration-300">
        {/* Кнопка закриття */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-700 text-xl transition-all cursor-pointer"
          title="Закрити"
        >
          ×
        </button>

        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
          💬 Зворотний зв'язок
        </h3>

        {/* Повідомлення про успіх */}
        {submitted ? (
          <div className="text-center py-6">
            <span className="text-5xl block mb-3">✅</span>
            <p className="text-base font-semibold text-slate-700 dark:text-slate-200">
              Дякуємо! Повідомлення надіслано.
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mqewgqbo"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Ім'я */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                Ім'я
              </label>
              <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                required
                className="rounded-lg border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="rounded-lg border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            {/* Телефон */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                Номер телефону
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+38 (0XX) XXX-XX-XX"
                className="rounded-lg border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>

            {/* Повідомлення */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                Повідомлення
              </label>
              <textarea
                name="message"
                placeholder="Ваше повідомлення..."
                rows={4}
                className="rounded-lg border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition resize-y"
              />
            </div>

            {/* Повідомлення про помилку */}
            {error && (
              <p className="text-xs text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Кнопка відправки */}
            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              {loading ? "Надсилання..." : "Відправити"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
