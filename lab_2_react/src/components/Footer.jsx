// Footer — підвал резюме з градієнтом та hover-ефектом на тексті
function Footer() {
  return (
    <footer className="mt-4 py-5 text-center rounded-2xl bg-gradient-to-r from-indigo-700 to-purple-700 shadow-lg">
      {/* text-indigo-200 — м'який світлий колір на темному фоні */}
      <p className="text-sm text-indigo-200 tracking-wider font-light uppercase">
        &copy; 2026{" "}
        {/* hover:text-white — посилення кольору при наведенні */}
        <span className="font-semibold text-white hover:text-yellow-300 transition-colors duration-200 cursor-default">
          Любомир Левицький
        </span>
        {" "}· Всі права захищені
      </p>
    </footer>
  );
}

export default Footer;
