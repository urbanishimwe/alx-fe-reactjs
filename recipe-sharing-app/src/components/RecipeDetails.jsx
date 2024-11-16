import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
    const path = window.location.pathname || "";
    const recipeId = parseInt(path.substring(path.lastIndexOf('/') + 1));
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));
    if (recipe) {
        return (
            <div>
                <h1> Edit Recipe </h1>
                <EditRecipeForm recipeId={recipe.id} />
                <DeleteRecipeButton recipeId={recipe.id} />
            </div >
        );
    }

    return (
        <h1> Recipe not found </h1>
    );
};

export default RecipeDetails;