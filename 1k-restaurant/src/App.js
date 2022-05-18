import './App.css';
import Overview from './pages/overview/Overview';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home/>} />
        <Route path='/overview' element={<Overview/>} />
      </Routes>
    </Router>
    )
}

export default App;
