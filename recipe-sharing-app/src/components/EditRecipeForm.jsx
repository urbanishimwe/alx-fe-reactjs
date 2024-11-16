import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe(recipeId, { id: recipeId, title, description });
        setFeedback('Recipe updated');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>{feedback}</p>
                <label htmlFor="title"> <h3> Title </h3> </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <br />
                <label htmlFor="description"> <h3>Description </h3> </label>
                <textarea
                    value={description}
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <br />
                <button type="submit"> Edit recipe </button>
            </form>
        </>
    );
};

export default EditRecipeForm;