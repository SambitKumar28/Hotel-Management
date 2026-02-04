import react, { useContext } from "react";
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
import { AppContext } from "./context/AppContext";
import OwnerLayout from "./pages/owner/OwnerLayout";
import AllHotels from "./pages/owner/AllHotels";
import RegisterHotel from "./pages/owner/RegisterHotel";
import AllRooms from "./pages/owner/AllRooms";
import AddRoom from "./pages/owner/AddRoom";
import Bookings from "./pages/owner/Bookings";
const App = () => {
      
  const ownerpath = useLocation().pathname.includes("owner");
  const{owner} = useContext(AppContext)
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


        <Route path="/owner" element={owner?<OwnerLayout/> : <Login/>}>
        <Route index element={owner? <AllHotels/> : <Login/>}/>
        <Route path="register-hotel" element={owner? <RegisterHotel/> : <Login/>}/>
        <Route path="rooms" element={owner? <AllRooms/> : <Login/>}/>
        <Route path="add-rooms" element={owner? <AddRoom/> : <Login/>}/>
        <Route path="bookings" element={owner? <Bookings/> : <Login/>}/>

        </Route>




      </Routes>
      {!ownerpath && <Footer/> }
    </div>
  )
}

export default App
