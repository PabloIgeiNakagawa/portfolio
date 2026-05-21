import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-steam-bg text-steam-text text-center px-4">
      <h1 className="text-6xl text-steam-blue font-titulo font-bold mb-4">Error 404</h1>
      <p className="text-lg mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="px-4 py-2 bg-steam-blue hover:bg-steam-blue/80 font-texto text-white rounded-sm transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
