import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 shadow-xl hover:scale-105 duration-200 cursor-pointer">
        <figure>
          <img className="h-[320px] w-320px" src={item.image} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm ">
            {item.title}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-4">${item.price}</div>
            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white p-4 duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
