
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-light-grey">
      <div className="text-center max-w-md px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-charcoal mb-4">
            Page Not Found
          </h2>
          <p className="text-medium-grey mb-8">
            Sorry, the page you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>
          
          <div className="block">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-charcoal hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-medium-grey">
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
