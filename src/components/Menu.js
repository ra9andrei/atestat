import { Link, Outlet } from 'react-router-dom';
import "../App.css"
const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-black shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="text-white hover:text-gray-300 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                       Cineverse
                        </Link>
                        <div className="hidden md:flex space-x-8">
                            <Link
                                to="/" 
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/Movies"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Movies
                            </Link>
                            <Link
                                to="/Series"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Series
                            </Link>
                              <Link
                                to="/About"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                About us
                            </Link>
                            <Link
                                to="/Favourites"
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                Favourites
                            </Link>
                        </div>


                    </div>
                </div>
            </nav>



            <Outlet />



            <footer className="bg-black text-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="mb-4">&copy; 2025 Cineverse. All rights reserved.</p>
                    <div className="flex justify-center space-x-6">
                        <Link to="/terms" className="hover:text-gray-300">Terms and conditions</Link>
                        <Link to="/privacy" className="hover:text-gray-300">Confidentiality</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;  