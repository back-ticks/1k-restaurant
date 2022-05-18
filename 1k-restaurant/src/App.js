import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from './pages/signup/Signup';
import Login from './pages/signup/login';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" element={<Signup/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
