import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = ({ recipeId }) => {
    return (
        <div>
            <h1> Edit Recipe </h1>
            <EditRecipeForm recipeId={recipeId}/>
            <DeleteRecipeButton recipeId={recipeId}/>
        </div >
    );
};

export default RecipeDetails;