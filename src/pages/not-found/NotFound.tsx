import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white text-center px-4">
      <h1 className="text-6xl text-red-600 font-bold mb-4">Error 404</h1>
      <p className="text-lg mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
