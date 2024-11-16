import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';

export const Router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='recipe/add' element={< AddRecipeForm />} />
    <Route path='recipe/list' element={< RecipeList />} />
    <Route path='recipe/view/*' element={<RecipeDetails />} />
    <Route path='*' element={<h1> Not found </h1>} />
  </Route>
));

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
