import { useState, useEffect } from "react";
import Header from "./components/Header";
import Chess from "./components/Chess";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

// Визначає початкову тему за годиною (07:00–21:00 → light, інакше → dark)
function getInitialTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? "light" : "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Перемикач: зберігаємо вибір у sessionStorage (скидається при закритті вкладки)
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      sessionStorage.setItem("appTheme", next);
      return next;
    });
  };

  // При монтуванні: якщо є ручний вибір у сесії — відновити його
  useEffect(() => {
    const saved = sessionStorage.getItem("appTheme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  return (
    // Клас 'dark' на кореневому div вмикає всі dark: префікси Tailwind
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
          <Header theme={theme} onToggleTheme={toggleTheme} />

          <main className="flex flex-col gap-5">
            <Chess />
            <Reviews />
          </main>

          <Footer />
        </div>

        {/* Модальне вікно форми (з'являється через 60 с) */}
        <ContactForm />
      </div>
    </div>
  );
}

export default App;