import React from "react";
import { Link } from "react-router-dom";
import BookStore from "../../Components/BookStore/BookStore";

const BookStorePages = () => {
  return (
    <div>
      <BookStore len={1}/>

      <div className="text-center mt-5">

         <Link to="/booksStore">

           <button className="bg-blue-400 p-3 font-semibold  rounded-lg">
              See More
           </button>

         </Link>

      </div>

    </div>
  );
};

export default BookStorePages;
