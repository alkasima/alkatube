import Pagenotfound  from '../assets/notfound.jpg';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { useEffect } from 'react';

export const NotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / Alkatube`;
  });

   return (
     <main>
        <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className="text-7xl tet-gray-700 font-bold my-10 dark:text-white">404, Page Notfound</p>
            <div className="max-w-lg">
                <img className="rounded" src={Pagenotfound} alt="Page not found 404"/>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <Link to="/">
              <Button item="Go Back"/>
            </Link>
          </div>
        </section>
     </main>
   )
 }
 