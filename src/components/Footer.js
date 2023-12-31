import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    
    
  
  <footer className="bg-white border-t-2 border-gray-200   dark:bg-gray-800">
      <div className=" p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Alkatube</Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          
          <li>
              <a href="https://www.linkedin.com/in/kasim-abubakar-jajere-b6651021" target="_blank" rel="noreferrer" className="dark:text-white mr-4 hover:underline md:mr-6">LinkedIn</a>
          </li>
          
          <li>
              <a href="https://www.facebook.com/alkasima2" target="_blank" rel="noreferrer" className="dark:text-white mr-4 hover:underline md:mr-6">Facebook</a>
          </li>
          <li>
              <a href="https://www.instagram.com/realalkasima" target="_blank" rel="noreferrer" className="dark:text-white mr-4 hover:underline md:mr-6 ">Instagram</a>
          </li>
          
          
          <li>
              <a href="https://www.github.com/alkasima" target="_blank" rel="noreferrer" className="dark:text-white hover:underline">Github</a>
          </li>
      </ul>
      </div>
  </footer>

  )
}
