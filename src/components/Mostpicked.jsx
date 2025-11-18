import React from 'react'
import { useContext } from 'react'
import {AppContext} from "../context/AppContext"
import { motion } from 'motion/react'
const Mostpicked = () => {
    const {hotelData}=useContext(AppContext);
  return (
    <div className='py-16'>
      <h1 className='text-gray-950 text-3xl font-semibold text-center mx-auto '>Most Picked Hotels</h1>
      <p className='text-gray-900 text-sm text-center max-w-lg mx-auto'  >Explore our top rated rooms, loved by gusets for comfort and location. </p>
      <div className='flex flex-wrap items-center justify-center mt-12 gap-4 max-w-5xl mx-auto'>
        {
            hotelData.map((item,index)=>(
                <motion.div key={index} 
                animate={{y:[0,-30,0]}} 
                transition={{duration:2, ease:"easeInOut", repeat:Infinity}} 
                className='relative group rounded overflow-hidden cursor-pointer'
                >
                 <img src={item.image} 
                 alt="" 
                 className='size-56 object-cover object-top' 
                 />
                 <div className='absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                   <h1 className='text-lg font-medium'>{item.name}</h1>
                   <p className='text-sm'>{item.adress}</p>
                   <p className='text-lg font-medium'>{item.price}</p>
                 </div>
                </motion.div>
            ))}
      </div>
    </div>
  )
}

export default Mostpicked
