import axios from 'axios';
import React, { useEffect, useState } from 'react'


const PAZE_SIZE=10;

function Pagination() {
    const [product,setProduct]=useState([]);
    const getallData=async()=>{
        try {
            const res=await axios.get('https://dummyjson.com/products');
            console.log(res.data.products);
            setProduct(res.data.products);
        } catch (error) {
           console.log("error:",error); 
        }
    }
    useEffect(()=>{
        getallData();
    },[])

  return (
    <div className=' bg-gray-100 px-4 '>
        
        <div className="items py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                product.map((item,index)=>(
                    <div key={index} className="div bg-white p-4  rounded-xl shadow-xl transition-all hover:translate-y-4  ">
                         <img src={item.images} alt={item.images} />
                         <p>Rs. {item.price}</p>
                         <h1>{item.title}</h1>
                         <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Pagination