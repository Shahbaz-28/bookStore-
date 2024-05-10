import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState } from "react";
import axios from "axios";

const Freebook = () => {
  const [book, setbook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const data = res.data.filter((data) => data.price === "free");
        console.log(data);
        setbook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx:auto md:px-20 px-4 py-10">
        <div  className="bgcolour">
          <h1 className="font-semibold text-2xl pb-2">Free Books</h1>
          <p>
            "Explore our Free Books section, where literary treasures await
            without costing a dime. Dive into a world of possibilities and
            discover your next favorite read, completely free of charge. Dive
            into a world of literary treasures without spending a penny,
            courtesy of our Free Books section because everyone deserves a
            chance to get lost in a good story."
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
