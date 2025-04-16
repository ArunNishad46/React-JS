import React from "react";

export default function MobileList(props){  //{image, title, price}
  console.log(props);
  const {image, title, price} = props;

  return (
    <div className="w-55 h-75 p-2 flex flex-col items-center rounded-lg m-4 border-gray-200 border-2 hover:border-none hover:shadow-md">
      <img className="w-32" src={image} />
      <div className="flex flex-col px-1">
        <h2 className="text-lg text-gray-600 py-2">{title}</h2>
        <div className="flex justify-between">
          <p className="text-xl font-medium text-green-500">${price}</p>
          <button className="bg-green-500 text-white text-lg font-medium px-2 py-1 rounded-lg cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}