import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { usePageTitle } from "../hooks/usePageTitle";
import { Button } from '../components';

export const MovieList = ({ apiPath, title }) => {
  const { data: movies, loading } = useFetch(apiPath);
  const titlePage = usePageTitle(`${title} / Alkatube`);
  const [visibleMovies, setVisibleMovies] = useState(6);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setVisibleMovies(Math.min(visibleMovies, movies.length));
    }
  }, [movies]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 200;

      setShowGoToTop(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleMovies(visibleMovies + 6);
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap smaller:justify-evenly">
          {movies.slice(0, visibleMovies).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        {!loading && visibleMovies < movies.length && (
          <button
            className="w-64 m-3 text-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg py-1.5 font-medium text-white"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </section>
      {showGoToTop && (
        <button
          className="fixed bottom-4 right-4 bg-gray-500 text-white p-2 rounded-full"
          onClick={handleGoToTop}
        >
          Go to Top
        </button>
      )}
    </main>
  );
};
