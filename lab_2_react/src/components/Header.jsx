// Header — шапка резюме з градієнтним фоном та акцентними деталями
function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-14 px-8 text-center rounded-3xl shadow-xl">
      {/* Ім'я — великий жирний заголовок з широким трекінгом */}
      <h1 className="text-5xl font-extrabold tracking-wide mb-3 drop-shadow-md">
        Любомир Левицький
      </h1>

      {/* Роздільник — декоративна лінія */}
      <div className="w-142 h-1 bg-purple-300 rounded-full mx-auto mb-4" />

      {/* Підзаголовок із світлішим кольором */}
      <p className="text-lg text-indigo-200 font-light tracking-widest uppercase">
        Студент · Веб-розробник · Шахіст / Тренер
      </p>
    </header>
  );
}

export default Header;