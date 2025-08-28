import axios from 'axios';
import React, { useEffect, useState } from 'react'


const PAZE_SIZE=10;

function Pagination() {
    const [product,setProduct]=useState([]);
    const[currentPage,setCurrent]=useState(0);
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

    const totalProduct=product.length;
    const noOfPages=Math.ceil(totalProduct/PAZE_SIZE);
    const start=currentPage*PAZE_SIZE;
    const end=start+PAZE_SIZE;

  return (
    <div className=' bg-gray-100 px-4 '>
        <div className="heading">

            <h1 className='flex justify-center items-center pt-5 text-2xl font-bold'>Pagination</h1>
            <p>Total product is:{totalProduct}</p>
        </div>
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