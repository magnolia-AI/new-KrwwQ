export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Simple Website</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Your New Website!</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          This is a simple, clean, and modern website built with Next.js and Tailwind CSS.
          It's a great starting point for any project.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
          Learn More
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center shadow-inner">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} My Simple Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

