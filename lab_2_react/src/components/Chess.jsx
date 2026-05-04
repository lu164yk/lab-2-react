// Chess — основний компонент резюме з секціями: Про мене, Кар'єра, Освіта, Досвід, Навички, Контакти
function Chess() {
  // Навички для секції "Навички"
  const skills = ["HTML5 / CSS3", "Основи JavaScript", "Git / GitHub", "Python"];

  return (
    <main className="flex flex-col gap-5">

      {/* ── Про мене ──────────────────────────────────── */}
      {/* border-l-4 — акцентна ліворуч смужка індиго */}
      <section className="bg-white border-l-4 border-indigo-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-indigo-700 uppercase tracking-wide mb-3">
          👤 Про мене
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Я студент 3-го курсу кафедри кібербезпеки. Поєдную навчання з
          професійною грою в шахи та викладанням. Маю звання Кандидата у
          майстри спорту (КМС). Та 10 рівень на faceit.
        </p>
      </section>

      {/* ── Шахова кар'єра ────────────────────────────── */}
      {/* border-l-4 border-purple-500 — фіолетова акцентна смужка */}
      <section className="bg-white border-l-4 border-purple-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-purple-700 uppercase tracking-wide mb-3">
          ♟️ Шахова кар'єра
        </h2>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
            <strong className="text-slate-800">Кандидат у майстри спорту (КМС) з шахів</strong>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
            Шаховий тренер (онлайн та офлайн)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
            Учасник та призер міжнародних турнірів
          </li>
        </ul>
      </section>

      {/* ── Освіта ────────────────────────────────────── */}
      {/* Education — border-sky-500 — блакитна смужка */}
      <section className="bg-white border-l-4 border-sky-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-sky-700 uppercase tracking-wide mb-3">
          🎓 Освіта
        </h2>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-sky-400 shrink-0" />
            Національний університет "Львівська політехніка" (2023 – теперішній час)
          </li>
        </ul>
      </section>

      {/* ── Досвід ────────────────────────────────────── */}
      {/* Experience — border-emerald-500 — зелена смужка */}
      <section className="bg-white border-l-4 border-emerald-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-emerald-700 uppercase tracking-wide mb-3">
          💼 Досвід
        </h2>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            Я — кандидат у майстри спорту з шахів 🏅 та шаховий тренер з досвідом викладання.
            З 2018 року граю на міжнародному рівні, брав участь у численних турнірах у класичних
            шахах, рапіді та бліці.
          </li>
        </ul>
      </section>

      {/* ── Навички ───────────────────────────────────── */}
      {/* bg-indigo-50 — легкий фоновий тон для виразності */}
      <section className="bg-indigo-50 border-l-4 border-indigo-400 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-indigo-700 uppercase tracking-wide mb-4">
          🛠️ Навички
        </h2>
        {/* Навички як pill-бейджі з hover:scale-105 */}
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-white text-indigo-700 border border-indigo-200 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-200 cursor-default"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Контакти ──────────────────────────────────── */}
      {/* border-rose-500 — рожева смужка для виділення */}
      <section className="bg-white border-l-4 border-rose-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold text-rose-600 uppercase tracking-wide mb-3">
          📬 Контакти
        </h2>
        <p className="text-slate-600">
          Email:{" "}
          <a
            href="mailto:liubomyr.levytskyi.kb.2023@lpnu.ua"
            className="text-indigo-600 font-medium hover:text-purple-700 underline underline-offset-4 transition-colors duration-200"
          >
            liubomyr.levytskyi.kb.2023@lpnu.ua
          </a>
        </p>
      </section>

    </main>
  );
}

export default Chess;
