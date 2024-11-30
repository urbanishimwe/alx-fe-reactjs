import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from "./components/Blog"
import Profile from './components/Profile';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ProtectedRoute()}
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;