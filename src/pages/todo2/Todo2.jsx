import React from "react";

function Todo2() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto container px-5">
        <h1>hello this is my Second todoPage</h1>
        <div className="box1 bg-white shadow-lg mx-auto w-full max-w-xl p-4 rounded-xl">
          <div className="box2 flex gap-3 justify-center item-center">
            <input className="w-full border rounded-lg px-4 py-2 outline-none" type="text" />
            <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo2;
