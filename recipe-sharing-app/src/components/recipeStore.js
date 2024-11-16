import { create } from 'zustand'

export const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
    deleteRecipe: (recipeId) => set(state => ({ recipes: state.recipes.filter(e => e.id !== recipeId) })),
    updateRecipe: (recipeId, newRecipe) => set(state => ({ recipes: state.recipes.map(e => e.id === recipeId ? newRecipe : e) })),
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(
            recipe => recipe.title.toLowerCase().includes(state.searchTerm.trim().toLowerCase()) ||
                recipe.description.toLowerCase().includes(state.searchTerm.trim().toLowerCase()))
    })),
}));
