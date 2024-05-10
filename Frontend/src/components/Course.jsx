import React, { useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Course = () => {
  const [book, setbook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        // console.log(res.data);
        const data = res.data.filter((data) => data.price !== "free");

        console.log("filter data", data);
        setbook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
      <div className="mt-16 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl py-8">
          We are delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>{" "}
        </h1>
        <p className="mt-2">
          Certainly! Here's a line for your paid books section: "Explore our
          exclusive paid books section, where premium reads await to indulge
          your literary cravings and offer unparalleled depth and quality. Elevate your reading experience with our carefully curated selection of premium titles, available exclusively in our paid books section."
        </p>
        <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
