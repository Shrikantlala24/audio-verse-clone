
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-spotify-white mb-4">404</h1>
          <p className="text-2xl text-spotify-lightGray mb-8">Page not found</p>
          <Link 
            to="/" 
            className="bg-spotify-green hover:bg-spotify-lightGreen text-black font-bold py-3 px-8 rounded-full transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
