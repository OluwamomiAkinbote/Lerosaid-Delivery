export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js + Tailwind 3.4.1 </h1>
      <p className="text-lg max-w-xl text-center">
        This is a simple reusable Home component styled with Tailwind CSS.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
}
