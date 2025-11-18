
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Bath, Building, Calendar, Car, CheckCircle, Coffee, Eye, MapPin, Mountain, Phone, Star, TreePine, Tv, User, Utensils, Wifi, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';


const SingleRoom = () => {
 const {roomData}=useContext(AppContext)
  const {id} = useParams();
  const room = roomData.find((r) => r._id === id);
   
  const [selectedImage, setSelectedImage]=useState(0)
  const [checkIn, setCheckIn]=useState("")
  const [checkOut, setCheckOut]=useState("")
  const [persons, setPersons]=useState(1)

  const getAmenityIcon=(amenity)=>{
    const iconMap={
      "Ocean View":Eye,
      "Mountain View":Mountain,
      "City View":Building,
      "Garden View":TreePine,
      "Balcony":Building,
      "Mini Bar":Coffee,
      "Room Service":Utensils,
      "Free Wifi":Wifi,
      "Primium Wifi":Wifi,
      "Work Desk":Building,
      "Concierge Desk": User,
      "Breakfast Included":Coffee,
      "Parking":Car,
      "Smart Tv":Tv,
      "Spa acess":Bath,
      "Pool Acess":Bath,
      "Kitchen":Utensils,
      "Living Area":Building,
      "Private Terrace":Building,
      "Butler Services":User,
      "Jacuzzi":Bath,
      "Panoramic View":Eye,
    }
    return iconMap[amenity] || CheckCircle
  }

  const handleBooking=()=>{
  
    if(!checkIn || !checkOut){
      toast.error("please select both chech-in and check-out dates")
      return;
    }
    toast.success("booking request submitted ")
  }
  return (
    <div className='py-24 min-h-screen bg-gray-50 '>
      <div className='max-w-7xl  mx-auto px-4 py-8'>
        {/* /header section */}
        <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
            <div className='flex-1'>
              <h1 className='text-4xl font-bold text-gray-800'>{room.roomType}</h1>
              <div className=' flex items-center gap-2 text gray-600 mb-4'>
                <MapPin className='w-5 h-5'/>
                <span>{room.hotel.address}</span>
              </div>
               <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                <Star className='w-5 h-5 text-yellow-500 fill-current'/>
                <span>{room.hotel.rating}</span>
                </div>
                <div className={`flex items-center gap-2 px -3 py-1 rounded-full text-sm font-medium ${room.isAvailable?"bg-green-100 text-green-700" :"bg-red-100 text-red-700"}`}>
                  {room.isAvailable?(
                     <>
                     <CheckCircle className='w-4 h-4 '/>Available
                     </>
                  ):(
                     <>
                     <XCircle className='w-4 h-4 '/>Not Available
                     </>
                  )}                 
                </div>
               </div>
            </div>
            <div className='text-right'>
              <div className='text-3xl font-bold text-green-600 mb-2'>
                  ${room.pricePerNight} <span>/night</span>
              </div>            
            <div className='text-gray-600 '>
              <div className='flex items-center gap-2'>
                <User w-4 h-4/>
                <span>{room.hotel.ownerName}</span>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-1'>
                <Phone w-4 h-4/>
                <span>{room.hotel.contactNumber}</span>
              </div>
            </div>
          </div>
        </div>
          {/*image gallery  */}
        <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Room Gallery</h2>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2'>
              <img src={room.images[selectedImage]}
               alt={`${room.roomtype}-Image ${selectedImage + 1}`}
               className='w-full h-96 object-cover rounded-xl' />
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-1 gap-4'>
                 {
                  room.images.map((image,index)=>(
                    <img key={index} src={image} alt={`Thumbnail ${index + 1}`} 
                    className={`h-24 lg:h-20 object-cover rounded-lg cursor-pointer transition-all duration-200
                       ${selectedImage === index?
                        "ring-4 ring-blue-500 opacity-100 ":
                         "opacity-70 hover:opacity-100"}`}
                         onClick={()=>setSelectedImage(index)}
                         />
                  ))
                 }
            </div>
          </div>
        </div>
        {/* room details */}
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 space-y-8 '>
            <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
             <h2 className='text-2xl font-bold text-gray-800 mb-4'>About This Room</h2>
             <p className='text-gray-600 leading-relaxed'>{room.description}</p>
            </div>
            {/* Amenities */}

             <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Room Amenities</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
                  {
                    room.amenities.map((amenity,index)=>{
                      const IconComponent=getAmenityIcon(amenity);
                      return(
                        <div key={index} className='flex items-center gap-3 p-3 bg-blue-50 rounded-lg' >
                          <IconComponent className=" w-5 h-5 text-blue-600"/>
                          <span className='text-gray-700 font-medium'>{amenity}</span>

                        </div>
                      )
                    })
                  }
                </div>
             </div>
{/* hotel amenities */}
             <div className='bg-white rounded-2xl shadow-lg p-8 mb-8'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Hotel Amenities</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
                  {
                    room.hotel.amenities.map((amenity,index)=>{
                      const IconComponent=getAmenityIcon(amenity);
                      return(
                        <div key={index} className='flex items-center gap-3 p-3 bg-blue-50 rounded-lg' >
                          <IconComponent className=" w-5 h-5 text-blue-600"/>
                          <span className='text-gray-700 font-medium'>{amenity}</span>

                        </div>
                      )
                    })
                  }
                </div>
             </div>

          </div>
          {/* Booking From */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-2xl shadow-lg p-8 sticky top-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>Book This Room</h2>
              <div className='space-y-4 '>
                <div>
                  <label htmlFor=""
                   className='block text-sm font-medium text-gray-700 mb-2'>
                    <Calendar className='w-4 h-4 inline mr-2'/>
                    check-in-Date
                   </label>
                   <input type="date"
                    value={checkIn}
                    onChange={(e)=>setCheckIn(e.target.value)}
                    className='w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2
                     focus:ring-blue-500 focus:border-transparent'
                   />
                </div>
                <div>
                  <label htmlFor=""
                   className='block text-sm font-medium text-gray-700 mb-2'>
                    <Calendar className='w-4 h-4 inline mr-2'/>
                    check-out-Date
                   </label>
                   <input type="date"
                    value={checkOut}
                    onChange={(e)=>setCheckOut(e.target.value)}
                    className='w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2
                     focus:ring-blue-500 focus:border-transparent'
                   />
                </div>
                 <div>
                  <label htmlFor=""
                   className='block text-sm font-medium text-gray-700 mb-2'>
                    <User className='w-4 h-4 inline mr-2'/>
                    Number of Guests
                   </label>
                   <input type="number"
                    value={persons}
                    onChange={(e)=>setPersons(e.target.value)}
                    className='w-full px-4 py-3 border-gray-300 rounded-lg focus:ring-2
                     focus:ring-blue-500 focus:border-transparent'
                   />
                </div>
                <div className='border-t pt-4 mt-4'>
                  <div className='flex justify-between items-center mb-4 '>
                    <span className='text-gray-600'>Price Per Night</span>
                    <span className='text-xl font-bold'>
                      ${room.pricePerNight}
                    </span>
                  </div>
                </div>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  room.isAvailable
                  ?"bg-blue-600 hover:bg-blue-700 text-white"
                  :"bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                type='submit' 
                onClick={handleBooking} 
                disabled={!room.isAvailable} >
                  {room.isAvailable ?"check Availability":"Not Available"}

                </button>
              </div>
            </div>
          </div>         
        </div>
      </div>    
    </div>
  )
}

export default SingleRoom
