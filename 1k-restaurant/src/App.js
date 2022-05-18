import './App.css';
import Overview from './pages/overview/Overview';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import CreateRestaurant from './pages/createRestaurant/CreateRestaurant';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home/>} />
        <Route path='/overview' element={<Overview/>} />
        <Route path='/create' element={<CreateRestaurant/>} />
      </Routes>
    </Router>
    )
}

export default App;
