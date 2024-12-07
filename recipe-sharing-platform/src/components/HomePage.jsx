import { useState, useEffect } from 'react';
import recipesList from '../data.json'

const HomePage = () => {
    const [recipes, setRecipes] = useState(recipesList);

    useEffect(() => {
        setRecipes(recipesList);
    }, [])

    console.log(recipes);
    return (
        <div className='grid grid-cols-1 grid-cols-2 grid-cols-3'>
            {recipes.map(e =>
                <div className="user-profile bg-gray-100 md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm mx-auto mx-auto rounded-lg shadow-lg my-20 hover:shadow-xl" key={e.id}>
                    <img src={e.image} className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" alt="User" />
                    <h1 className="md:text-xl sm:text-lg text-blue-800 my-4"> {e.title} </h1>
                    <p className="text-gray-600 md:text-base sm:text-sm hover:text-blue-500"> {e.summary} </p>
                </div>
            )}
        </div>
    )
}

export default HomePage;