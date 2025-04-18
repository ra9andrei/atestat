import { Link, Outlet } from "react-router-dom";
import "../App.css";

const Layout = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Movies", label: "Movies" },
    { path: "/About", label: "About us" },
  ];

  const footerLinks = [
    { path: "/terms", label: "Terms and conditions" },
    { path: "/privacy", label: "Confidentiality" },
  ];

  const linkStyle = "text-white hover:text-gray-300 transition-colors";
  const containerStyle = "max-w-6xl mx-auto px-4";

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-950 shadow-sm">
        <div className={containerStyle}>
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-white hover:text-gray-300 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold text-xl"
            >
              Cineverse
            </Link>

            <div className="hidden md:flex space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link key={path} to={path} className={linkStyle}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-6 flex">
        <div className={containerStyle}>
          <p className="mb-4 text-gray-400">
            © 2025 Cineverse. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {footerLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="hover:text-gray-300 text-gray-400 text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
