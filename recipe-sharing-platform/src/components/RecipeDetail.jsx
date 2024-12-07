import { useEffect } from 'react';
import recipesList from '../data.json'
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const id = parseInt(useParams().id);

    const recipe = recipesList.find(e => e.id === id);
    useEffect(() => {}, [])
    if (!recipe) {
        return <h1> Not found </h1>
    }

    return (
        <div className="user-profile bg-gray-100 md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm mx-auto mx-auto rounded-lg shadow-lg my-20 hover:shadow-xl" key={recipe.id}>
            <img src={recipe.image} className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" alt="User" />
            <h1 className="md:text-xl sm:text-lg text-blue-800 my-4"> {recipe.title} </h1>
            <p className="text-gray-600 md:text-base sm:text-sm hover:text-blue-500"> {recipe.summary} </p>
            <ul className='list-disc font-thin text-gray-600 md:text-base sm:text-sm'>{recipe.ingredients.map((e, i) => <li key={i}> {e} </li>)}</ul>
            <p className="text-gray-600 md:text-base sm:text-sm"> {recipe.instructions} </p>
        </div>
    )
}

export default RecipeDetail;