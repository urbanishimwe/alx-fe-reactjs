import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'
import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId));
    return (
        <div>
            <h1> Edit Recipe </h1>
            <EditRecipeForm recipeId={recipe.id}/>
            <DeleteRecipeButton recipeId={recipe.id}/>
        </div >
    );
};

export default RecipeDetails;