import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-white mb-8">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Pagina nu a fost găsită</h2>
      <p className="text-gray-300 text-lg mb-8">Page doesn't exist .</p>
      <Link
        to="/"
        className="inline-block bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-500 transition-colors"
      >
        Back to Home page
      </Link>
    </div>
  );
};

export default Error;
