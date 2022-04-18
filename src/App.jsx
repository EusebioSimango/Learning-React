import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route exect path="/" element={<Home />} /> 
            <Route path="/create" element={<Create />} /> 
            <Route path="/blogs/:id" element={<BlogDetails />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
