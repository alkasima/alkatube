import { Link } from "react-router-dom";
import  Noimage  from '../assets/noimage.jpg';

export const CelebrityCard = ({celebrity}) => {
    const {id, name, profile_path } = celebrity;
    const image = profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : Noimage;
  return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to={`/celebrity/${id}`}>
                <img className="rounded-t-lg" src={image} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/celebrity/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                
            </div>
        </div>
  )

}
