// Header — шапка резюме з перемикачем теми
function Header({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-gray-800 dark:to-slate-800 text-white py-14 px-8 text-center rounded-3xl shadow-xl relative transition-colors duration-300">
      {/* Кнопка перемикання теми */}
      <button
        onClick={onToggleTheme}
        title="Перемкнути тему"
        className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 border border-white/40 text-xl transition-all duration-200 hover:scale-110 cursor-pointer"
      >
        {isDark ? "☀️" : "🌙"}
      </button>

      {/* Ім'я */}
      <h1 className="text-5xl font-extrabold tracking-wide mb-3 drop-shadow-md">
        Любомир Левицький
      </h1>

      {/* Роздільник */}
      <div className="w-36 h-1 bg-purple-300 dark:bg-slate-500 rounded-full mx-auto mb-4 transition-colors duration-300" />

      {/* Підзаголовок */}
      <p className="text-lg text-indigo-200 dark:text-slate-400 font-light tracking-widest uppercase transition-colors duration-300">
        Студент · Веб-розробник · Шахіст / Тренер
      </p>
    </header>
  );
}

export default Header;