import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Noimage from '../assets/noimage.jpg';
import { usePageTitle } from "../hooks/usePageTitle";

export const CelebrityDetails = () => {
  const params = useParams();
  const [celebrity, setCelebrity] = useState({});
  const [showFullBiography, setShowFullBiography] = useState(false);
  const image = celebrity.profile_path
    ? `https://image.tmdb.org/t/p/w500/${celebrity.profile_path}`
    : Noimage;

  useEffect(() => {
    async function fetchCelebrity() {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${params.id}?language=en-US&page=1&api_key=f7141e8132a6dafc89945afaa95acec3`
      );
      const json = await response.json();
      setCelebrity(json);
      console.log(json);
    }
    fetchCelebrity();
  }, []);

  const handleShowMore = () => {
    setShowFullBiography(true);
  };

  const titlePage = usePageTitle(`${celebrity.name} / Alkatube`);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt="Celebrity image" className="w-full" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {celebrity.name}
          </h1>
          <p className="my-4">
            {celebrity.biography && !showFullBiography
              ? `${celebrity.biography.substring(0, 200)}...`
              : celebrity.biography}
          </p>
          {!showFullBiography && celebrity.biography && (
            <button className="text-blue-500 underline" onClick={handleShowMore}>
              Show More
            </button>
          )}

          <h2 className="pt-6 text-2xl font-bold my-3 text-center lg:text-left">Known For</h2>
          {celebrity.also_known_as ? (
            <p className="my-7 flex flex-wrap gap-2">
              {celebrity.also_known_as.map((item) => (
                <span
                  key={item.id}
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                >
                  {item}
                </span>
              ))}
            </p>
          ) : null}

          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{celebrity.popularity}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-sm font-medium text-gray-900  dark:text-white">Popularity</span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Known For Department: </span>
            <span>{celebrity.known_for_department}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Gender: </span>
            <span>{celebrity.gender === 2 ? 'Male' : 'Female'}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Birthday: </span>
            <span>{celebrity.birthday}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Place of Birth: </span>
            <span>{celebrity.place_of_birth}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
