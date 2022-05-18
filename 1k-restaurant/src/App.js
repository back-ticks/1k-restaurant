import './App.css';
import Overview from './pages/overview/Overview';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/overview' element={<Overview/>} />
      </Routes>
    </Router>
  );
}

export default App;
