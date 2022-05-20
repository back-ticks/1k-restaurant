import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './pages/signup/Signup';
import Login from './pages/signup/login';


import AddClient from './pages/signup/addClient';
import Home from './pages/Home/Home';
import Client from './pages/clients/clientsPage.js';
import CreateRestaurant from './pages/createRestaurant/CreateRestaurant';
import Overview from './pages/overview/Overview';
import Orders from './pages/orders/orders';
import Menu from './pages/menu/Menu';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/create' element={<CreateRestaurant/>} />
        <Route path="/" exact element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/clients' element={<Client />} />
        <Route path="/addClient" element={<AddClient/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path="/menu" element={<Menu />}/>
      </Routes> 
    </Router>
  )
}
export default App;
