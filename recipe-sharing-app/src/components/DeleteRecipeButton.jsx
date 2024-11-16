import { useRecipeStore } from './recipeStore'
import { useNavigate  } from 'react-router-dom';


const DeleteRecipeButton = ({recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const to = useNavigate();

    function handleClick() {
        deleteRecipe(recipeId)
        to("/recipe/list")
    }

    return (
        <button onClick={handleClick}> Delete Recipe </button>
    )
}

export default DeleteRecipeButton;