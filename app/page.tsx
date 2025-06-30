import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">My Cooler Website</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Features />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 p-4 text-center shadow-inner">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} My Cooler Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

