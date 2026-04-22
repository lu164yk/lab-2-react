import { useState, useEffect } from "react";

// Footer — підвал з інформацією про браузер із localStorage
function Footer() {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    // Зчитуємо дані про браузер/систему
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookiesEnabled: String(navigator.cookieEnabled),
      screenSize: `${screen.width} × ${screen.height}`,
      colorDepth: `${screen.colorDepth} bit`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      onLine: navigator.onLine ? "Так" : "Ні",
      savedAt: new Date().toLocaleString("uk-UA"),
    };

    // Зберігаємо в localStorage
    localStorage.setItem("browserInfo", JSON.stringify(info));

    // Зберігаємо у стані для рендерингу
    setSysInfo(info);
  }, []);

  const labels = {
    userAgent: "User Agent",
    platform: "Платформа (OS)",
    language: "Мова браузера",
    cookiesEnabled: "Cookies увімкнено",
    screenSize: "Роздільність екрану",
    colorDepth: "Глибина кольору",
    timezone: "Часовий пояс",
    onLine: "Онлайн",
    savedAt: "Збережено о",
  };

  return (
    <footer className="rounded-2xl bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-gray-800 dark:to-slate-800 shadow-lg transition-colors duration-300 overflow-hidden">
      {/* Копірайт */}
      <div className="py-5 text-center border-b border-white/20">
        <p className="text-sm text-indigo-200 dark:text-slate-400 tracking-wider font-light uppercase">
          © 2026{" "}
          <span className="font-semibold text-white hover:text-yellow-300 transition-colors duration-200 cursor-default">
            Любомир Левицький
          </span>{" "}
          · Всі права захищені
        </p>
      </div>

      {/* Системна інформація */}
      <div className="px-6 py-5">
        <h4 className="text-xs font-semibold text-indigo-200 dark:text-slate-400 uppercase tracking-widest mb-3">
          Системна інформація (localStorage)
        </h4>

        {sysInfo ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            {Object.entries(sysInfo).map(([key, val]) => (
              <li key={key} className="flex gap-2 text-xs py-1 border-b border-white/10">
                <span className="text-orange-300 dark:text-amber-400 font-semibold shrink-0 min-w-[130px]">
                  {labels[key] || key}:
                </span>
                <span className="text-white/80 break-all">{val}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-white/50 italic">Завантаження...</p>
        )}
      </div>
    </footer>
  );
}

export default Footer;
