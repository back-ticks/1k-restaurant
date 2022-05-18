import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './pages/signup/Signup';
import Login from './pages/signup/login';
import Home from './pages/Home/Home';
import Client from './pages/clients/clientsPage';
import Overview from './pages/overview/Overview';
import Orders from './pages/orders/orders';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/clients' element={<Client />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </Router>
  )
}
export default App;
