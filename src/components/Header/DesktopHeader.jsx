// src/components/DesktopHeader.jsx
export default function DesktopHeader() {
  return (
    <header className="hidden md:flex justify-between items-center px-8 py-4 bg-white shadow font-poppins fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/Lerosaid-logo.png"
          alt="Lerosaid Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Nav Links */}
      <nav className="flex space-x-8 text-gray-700">
        <a href="/" className="hover:text-red-600">Home</a>
        <a href="/about" className="hover:text-red-600">About</a>
        <a href="/services" className="hover:text-red-600">Services</a>
        <a href="/contact" className="hover:text-red-600">Contact</a>
      </nav>

      {/* Call To Action */}
      <a
        href="/get-started"
        className="px-5 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition"
      >
        Get Started
      </a>
    </header>
  );
}
