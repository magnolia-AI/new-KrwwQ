import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-lg">
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

      {/* Hero Section */}
      <main 
        className="relative flex-grow flex flex-col items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519681577576-f83616641697?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
        <div className="relative z-10 text-white">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Discover a New Digital Experience
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            We build modern, performant, and beautiful web applications that bring your ideas to life.
          </p>
          <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-xl">
            Get Started
          </Button>
        </div>
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

