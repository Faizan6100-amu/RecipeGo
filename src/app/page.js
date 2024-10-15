import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-400">
      <img
        src="logo.webp"
        alt="Recipe App Logo"
        className="w-28 h-28 mb-8 rounded-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-6 transform transition-transform duration-500 hover:scale-105">
        Welcome to Recipe App
      </h1>
      <Link
        href="/recipe-list"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Explore Recipes
      </Link>
    </div>
  );
}
