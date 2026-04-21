import Header from "./components/Header";
import Chess from "./components/Chess";
import Footer from "./components/Footer";

// min-h-screen — фон займає всю висоту екрана
// bg-gradient-to-br — діагональний градієнт від індиго до фіолетового
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-sans text-slate-900">
      {/* max-w-3xl обмежує ширину, mx-auto центрує контейнер */}
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        <Header />

        {/* Основний контент */}
        <main className="flex flex-col gap-5">
          <Chess />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;