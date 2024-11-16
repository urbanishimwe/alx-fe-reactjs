import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
    setFeedback('Recipe added to your list');
  };

  return (
    <>
      <h1> Add new Recipe </h1>
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
        <button type="submit"> Add recipe </button>
      </form>
    </>
  );
};

export default AddRecipeForm;