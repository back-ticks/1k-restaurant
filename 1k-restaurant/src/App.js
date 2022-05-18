import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Client from './pages/clients/clientsPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/clients' element={<Client />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
