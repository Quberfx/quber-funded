import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-800 to-[#000510] flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 with globe icon */}
        <div className="mb-8">
          <h1 className="text-white text-8xl md:text-9xl font-bold flex items-center justify-center gap-4">
            <span>4</span>
            <div className="relative">
              <svg
                className="w-24 h-24 md:w-32 md:h-32 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 12h20"
                />
              </svg>
            </div>
            <span>4</span>
          </h1>
        </div>

        {/* Message */}
        <h2
          className="text-white text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          We've lost this page
        </h2>
        <p className="text-blue-200 text-lg mb-8">
          Sorry, the page you are looking for doesn't exist or has been removed.
        </p>

        {/* Back to homepage button */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to homepage
        </button>
      </div>
    </div>
  );
}
