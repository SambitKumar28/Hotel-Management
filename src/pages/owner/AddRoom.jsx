import React, { useState } from 'react'

const AddRoom = () => {
 const [roomData,setRoomData]= useState({
  hotel:"",
  roomtype:"",
  pricePerNight:"",
  description:"",
  images:[],
  amenities:[],
  isAvailable:true,
 })

 const handleChange=(e)=>{
  setRoomData({...roomData, [e.target.name]: e.target.value})
 }
const handleImageChange=(e,index)=>{
  const file=e.target.files[0]
  if(file){
    const updatedImages=[...roomData.images]
    updatedImages[index]=file
    setRoomData({...roomData, images:updatedImages})
  }
}
const handleSubmit=(e)=>{
   e.preventDefult();       
}
   return (
        <div className="py-10 flex flex-col justify-between bg-white">
            <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Hotel Image</p>
                    <div className='w-full my-4'>
                      {/* {image preview} */}
                     {preview &&(
                      <div className='mb-3 flex justify-center '>
                        <img src={preview} alt=""  className='w-24 h-24 object-cover rounded shadow'/>
                      </div>
                     )}
                     {/* {file uplodaded} */}
                     <input type="file" accept='image/*' onChange={handleImageChange}  className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer'/>
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Hotel Name</label>
                    <input 
                     type="text"
                     name='hotelName' 
                     value={data.hotelName} 
                     onChange={handleChange} 
                     placeholder="Type here"
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Hotel Address</label>
                    <textarea 
                     name='hotelAddress' 
                     value={data.hotelAddress} 
                     onChange={handleChange} 
                     rows={4} 
                     className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" 
                     placeholder="Type here"></textarea>
                </div>             
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price"> Price</label>
                        <input  
                          type="number"
                          name='price'
                          value={data.price}
                          onChange={handleChange}
                          placeholder="0" 
                          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>                    
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price"> Rating</label>
                        <input  
                          type="number"
                          name='rating'
                          value={data.rating}
                          onChange={handleChange}
                          placeholder="0" 
                          className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>                    
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description"> Hotel Amenities</label>
                    <textarea  
                     name='amenities' 
                     value={data.amenities} 
                     onChange={handleChange} 
                     rows={4} 
                     className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" 
                     placeholder="Type here"></textarea>
                </div>
                <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">Regeister Hotel</button>
            </form>
        </div>
  )
}

export default AddRoom

