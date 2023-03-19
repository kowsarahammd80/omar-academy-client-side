import React from "react";
import "./BooksDetails.css";
import bookImage from "../../assats/book-store.png";

const BooksDetails = () => {
  return (
    <div className="mx-3 lg:mx-24 mt-5 lg:mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* image card */}

        <div className="card card-compact w-full rounded-none bg-base-100 border-2">
          <figure>
            <img src={bookImage} alt="booksName" className="booksImage-set" />
          </figure>
        </div>

        {/* buy Option  */}

        <div className="flex justify-center">
          <div>
            <div className="text-center mt-10">
              <h1 className="text-2xl lg:text-3xl font-bold ">
                Omar’s Basic Math
              </h1>

              <p className="font-semibold opacity-60 mt-3 mb-2">
                Writer: Mohammad Faruk Bhuiyan
              </p>

              <p className="font-semibold opacity-60">Category: Mathematics</p>
            </div>

            {/* review */}

            <div className="text-xl mt-5">
              <i class="fa-solid text-yellow-400 fa-star mr-3"></i>
              <i class="fa-solid text-yellow-400 fa-star mr-3"></i>
              <i class="fa-solid text-yellow-400 fa-star mr-3"></i>
              <i class="fa-solid text-yellow-400 fa-star mr-3"></i>
              <i class="fa-solid text-yellow-400 fa-star mr-5"></i>

              <span className="font-semibold text-lg text-blue-600">
                6 review
              </span>
            </div>

            <hr className="hr-set mt-5" />

            {/* price  */}

            <div className="mt-5 mb-5">
              <p className="font-bold text-xl">500 Taka</p>
            </div>

            {/* quantity and wish list */}

            <div className="flex items-center font-semibold">
              <span className="mr-3">Quantity</span>

              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-20 max-w-xs"
                defaultValue="1"
              />

              <button className="ml-20 text-3xl text-red-500">
                {" "}
                <i class="fa-regular fa-heart"></i>{" "}
              </button>
            </div>

            <hr className="hr-set mt-5" />

            {/* button */}

            <div className="mt-5 flex justify-around">
              <button className="buy-now-book-button">Buy Now</button>

              <button className="add-book-button">Add to Card</button>
            </div>
          </div>
        </div>

        {/* buy option end */}

        {/* summery  */}

        <div className="w-72">

          <div className="summer-bg-set">

            <p className="text-center summery-text-bg p-4">SUMMERY</p>

            <p className="text-bg-set-summery mt-3 p-3 text-center ">Cash On Delivery</p>

            <p className="text-bg-set-summery mt-3 p-3 text-center ">Delivery Charge 60 Taka (Inside Dhaka)</p>

            <p className="text-bg-set-summery mt-3 mb-10 p-3 text-center ">Delivery Charge 120 Taka (Outside Dhaka)</p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BooksDetails;
