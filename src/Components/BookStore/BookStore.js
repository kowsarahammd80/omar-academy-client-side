import React, { useEffect, useState } from "react";
import BooksStoreMap from "../booksStoreMap/BooksStoreMap";

const BookStore = ({len}) => {

  const [books, setBooks] = useState([])


  useEffect(() => {

    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
    .catch(e => console.error(e))

  },[])

  let length = 0;
  !len ? length = books.length : length = len;

  
  return (
    <div className="mb-10">
      {/* headline */}
      <div className="mt-10 lg:mt-16">
        <h1 className="w-full text-3xl lg:text-5xl font-bold text-center mb-10 lg:mb-16">
          Book Store
        </h1>
      </div>

      {/* book image */}

      <div className="flex justify-center ">

          <div className="flex-none lg:flex justify-between">

           {
                books.slice(0, length).map(book => <BooksStoreMap
                key={book._id} booksData = {book}

                />)
           }

          </div>

      </div>
       
       {/* button */}

       

    </div>
  );
};

export default BookStore;
