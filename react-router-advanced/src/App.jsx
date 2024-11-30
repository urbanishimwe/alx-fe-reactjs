import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from "./components/Blog"



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ProtectedRoute()}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;