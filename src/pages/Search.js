import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { usePageTitle } from "../hooks/usePageTitle";

export const Search = (apiPath) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch('search/movie', queryTerm);
  const titlePage = usePageTitle(`Search Result For ${queryTerm} / Alkatube`);



  return (
    <main className="py-7"> 
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          { movies.length === 0 ? `No result found for ${queryTerm}` : `Result found for ${queryTerm}` }
        </p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
         { movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
         )) }
                                   
      </div>
    </section>
  </main>
  )
}
