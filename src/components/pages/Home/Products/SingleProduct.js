import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/item/${id}`);
    console.log("im clicked");
  };
  const { _id, productName, img, desc,availableQ ,minimumQ, pricePerUnit} = product;
  return (
    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="object-cover object-center md:w-3/4  min-w-max rounded-md h-72 bg-white"
          src={img}
          alt={_id + " img"}
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {productName}
            <span className="block">
              <div class=" badge rounded-md badge-md bg-primary text-white">In stock:{availableQ} </div>
              <div class=" badge rounded-md badge-md bg-secondary text-white">Min order:{minimumQ} </div>
              <div class=" badge rounded-md badge-md bg-error text-white">Unit price:{pricePerUnit} </div>
              
            </span>
          </h1>
          <p class="leading-relaxed mb-3">
            {desc.slice(0, 150) + "...see more"}
          </p>
        

          <div class="flex items-center flex-wrap ">
          <button 
          onClick={() => navigateToDetails(_id)}
          
          class="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd" />
</svg>
        <span class="mx-1">Buy Now</span>
    </button>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
