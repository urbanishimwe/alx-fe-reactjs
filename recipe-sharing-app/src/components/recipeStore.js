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
    favorites: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),
    // recommendations: [],
    // generateRecommendations: () => set(state => {
    //     const recommended = state.recipes.filter(recipe =>
    //         state.favorites.includes(recipe.id) && Math.random() > 0.5
    //     );
    //     return { recommendations: recommended };
    // }),
}));
