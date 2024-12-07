import { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();
        const errorsList = []
        const checks = [
            {
                check: () => title === '',
                message: "title is required"
            },
            {
                check: () => summary === '',
                message: "summary is required"
            },
            {
                check: () => steps === '',
                message: "steps are required"
            },
            {
                check: () => ingredients.split('\n').length < 2,
                message: "two or more ingredients are required"
            },
        ]
        checks.forEach(e => {
            if (e.check()) {
                errorsList.push(e.message);
            }
        })
        if (errorsList.length === 0) {
            alert("form submitted");
            return
        }
        setErrors(errorsList);
    }

    return (
        <form className="mx-auto md:max-w-sm shadow-lg my-20 hover:shadow-xl" onSubmit={handleSubmit}>
            <ul className="list-disc" id="validate"> {errors.map((e, i) => <li key={i} className="text-red-600">{e}</li>)}</ul>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input onChange={e => setTitle(e.target.value)} value={title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
            </div>
            <div className="mb-5">
                <label htmlFor="summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Summary</label>
                <input onChange={e => setSummary(e.target.value)} value={summary} id="summary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <label htmlFor="steps" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">steps</label>
            <textarea onChange={e => setSteps(e.target.value)} value={steps} id="steps" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Ingredients </label>
            <textarea onChange={e => setIngredients(e.target.value)} value={ingredients} id="ingredients" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    )
}

export default AddRecipeForm;