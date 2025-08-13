import Link from "next/link";
import { Home, User, Mail, Wrench } from "lucide-react"; // Wrench for Services icon

export default function MobileHeader() {
  return (
    <>
      {/* Top logo (solid, no blur) */}
      <div className="md:hidden fixed top-0 left-0 right-0 px-3 py-2 flex justify-center bg-white shadow-md z-50">
        <Link href="/">
          <img 
            src="https://boltzmann.s3.us-east-1.amazonaws.com/Abstract/Lerosaid-logo.png" // Place your logo in /public/logo.png
            alt="Lerosaid Logistics Logo" 
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Bottom nav with glassmorphism - no border, reduced spacing */}
      <nav
        className="md:hidden fixed bottom-3 left-1/2 transform -translate-x-1/2 
        bg-white/20 backdrop-blur-lg rounded-xl 
        flex justify-around items-center w-[90%] max-w-xs py-1 px-2 z-50 shadow-lg"
      >
        <Link href="/" className="flex flex-col items-center text-purple-500">
          <div className="p-1.5 rounded-lg bg-purple-500/20">
            <Home size={20} />
          </div>
        </Link>

        <Link href="/services" className="flex flex-col items-center text-gray-200">
          <div className="p-1.5 rounded-lg hover:bg-white/10 transition">
            <Wrench size={20} />
          </div>
        </Link>

        <Link href="/profile" className="flex flex-col items-center text-gray-200">
          <div className="p-1.5 rounded-lg hover:bg-white/10 transition">
            <User size={20} />
          </div>
        </Link>

        <Link href="/contact" className="flex flex-col items-center text-gray-200">
          <div className="p-1.5 rounded-lg hover:bg-white/10 transition">
            <Mail size={20} />
          </div>
        </Link>
      </nav>
    </>
  );
}
