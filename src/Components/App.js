import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import ProtectedRoute from './ProtectedRoute';


function App() {
  return(
    <Router>
    <Navbar />
            <Routes>
                <Route path="/" element={<ProtectedRoute>{<Home/>}</ProtectedRoute>}/>
                <Route path="/about" element={<ProtectedRoute>{<About/>}</ProtectedRoute> }/>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
  )
}

export default App
