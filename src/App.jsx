import react from "react";
import {Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import MyBooking from "./pages/MyBooking";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
const App = () => {
      
  const ownerpath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!ownerpath && <Navbar/> }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/rooms" element={<Rooms />}/>
        <Route path="/room/:id" element={<SingleRoom/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/my-booking" element={<MyBooking/>}/>
      </Routes>
      {!ownerpath && <Footer/> }
    </div>
  )
}

export default App
