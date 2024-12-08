import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

//   const randomPerson = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

  return (
    <article className="review flex flex-col space-y-2 items-center justify-center mt-[100px]">
      <h1 className="text-2xl font-bold mb-[50px] lg:text-4xl">Our User's Reviews</h1>
      <div className="img-container">
        <img src={image} alt={name} className="person-img px-2 w-full lg:max-w-[200px] h-[200px]" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info px-2 w-full lg:w-[800px]">{text}</p>
      <div className="button-container flex items-center gap-8 justify-center">
        <button className="prev-btn w-20" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn w-20" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      {/* <button className="random-btn" onClick={randomPerson}>
        Suprise Me!
      </button> */}
    </article>
  );
};

export default Reviews;
