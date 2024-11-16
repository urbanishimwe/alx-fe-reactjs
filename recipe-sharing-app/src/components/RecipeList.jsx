import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  if(recipes.length > 0) {
    return (
      <div>
        <h1> Recipes on your list </h1>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/view/${recipe.id}`}> Edit Recipe </Link>
          </div>
        ))}
      </div>
    );
  }

  return (<h1> There are no recipes on your list </h1>)
};

export default RecipeList;