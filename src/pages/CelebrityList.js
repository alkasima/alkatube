import { useEffect, useState } from "react";
import { CelebrityCard } from "../components/CelebrityCard";
import { useFetchCelebrity } from "../hooks/useFetchCelebrity";
import { usePageTitle } from "../hooks/usePageTitle";


export const CelebrityList = ({title }) => {
  
  const { data: celebrities, loading } = useFetchCelebrity();
  usePageTitle(`${title} / Alkatube`);
  const [visibleCelebrities, setVisibleCelebrities] = useState(9);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    if (celebrities && celebrities.length > 0) {
      setVisibleCelebrities(Math.min(visibleCelebrities, celebrities.length));
    }
  }, [celebrities]);

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
    setVisibleCelebrities(visibleCelebrities + 9);
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap smaller:justify-evenly">
          {celebrities.slice(0, visibleCelebrities).map((celebrity) => (
            <CelebrityCard key={celebrity.id} celebrity={celebrity} />
          ))}
        </div>
        {!loading && visibleCelebrities < celebrities.length && (
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
  )
}
