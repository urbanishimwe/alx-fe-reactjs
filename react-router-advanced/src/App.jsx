import './App.css'
import { Routes, BrowserRouter} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ProtectedRoute()}
      </Routes>
    </BrowserRouter>
  )
}


export default App;