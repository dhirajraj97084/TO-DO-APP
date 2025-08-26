import React, { useState } from "react";

function TodoPage() {
    const [todo,setTodo]=useState("");
    
  return (
    <div className="">
      <div className="heading container mx-auto">
        <h1 className="flex justify-center item-center py-5 text-3xl font-bold">
          TODO-APP PAGE
        </h1>
      </div>
      <div className="main_box  p-3 mx-auto  rounded-lg shadow-xl bg-gray-400 w-fit  ">
        <div className="div  ">
          <div className="box flex justify-center item-center gap-5">
            <input
              className="w-96 outline-non py-2 px-5 rounded-xl"
              type="text"
              placeholder="Write here.."
            />
            <button className="px-6 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-900 ">
              {" "}
              Add
            </button>
          </div>
          
          <div className="items  bg-pink-500 mt-5 py-3 rounded-lg">
            <div className="box flex justify-center item-center gap-5">
              <h1 className="bg-gray-100 px-4 py-1 rounded-lg">
                Lorem ipsum dolor sit.
              </h1>
              <button className="px-6 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-900 ">
                Edit
              </button>
              <button className="px-6 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-900 ">
                Delete
              </button>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
