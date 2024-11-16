import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const favorites =  useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  function isFavorite(recipeId) {
    return favorites.includes(recipeId);
  }

  if(recipes.length > 0) {
    return (
      <div>
        <SearchBar/>
        <h1> Recipes on your list </h1>
        {(searchTerm.trim() === ''? recipes: filteredRecipes ).map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => isFavorite(recipe.id) ? removeFavorite(recipe.id) : addFavorite(recipe.id) }> { isFavorite(recipe.id) ? 'Remove from favorite': 'Add to favorite'  } </button> <br/>
            <Link to={`/recipe/view/${recipe.id}`}> Edit Recipe </Link>
          </div>
        ))}
      </div>
    );
  }

  return (<h1> There are no recipes on your list </h1>)
};

export default RecipeList;