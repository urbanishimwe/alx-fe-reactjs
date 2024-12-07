import { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setsteps] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        const notValid = title === '' || summary === '' || steps === '' || ingredients.split('\n').length < 2
        if(notValid) {
            alert('some field missing')
            return
        }
        alert("form submitted");
    }

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input onChange={e => setTitle(e.target.value)} value={title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary</label>
                <input onChange={e => setSummary(e.target.value)} value={summary} id="summary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <label htmlFor="steps" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">steps</label>
            <textarea onChange={e => setsteps(e.target.value)} value={steps} id="steps" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Ingredients </label>
            <textarea onChange={e => setIngredients(e.target.value)} value={ingredients} id="ingredients" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    )
}

export default AddRecipeForm;