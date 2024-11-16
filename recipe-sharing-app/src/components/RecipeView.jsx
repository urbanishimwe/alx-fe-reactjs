import { useRecipeStore } from './recipeStore';
import RecipeDetails from './RecipeDetails';

const RecipeView = () => {
    const path = window.location.pathname || "";
    const recipeId = parseInt(path.substring(path.lastIndexOf('/') + 1));
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));

    var returnElement;
    if (!recipe) {
        returnElement = (<h1> Recipe not found </h1>);
    } else {
        returnElement = <RecipeDetails recipeId={recipeId}/>;
    }

    return returnElement;
};

export default RecipeView;