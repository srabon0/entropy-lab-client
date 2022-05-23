import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// const item = {
//     productName:productName ,
//     img: imgurl,
//     availableQ: avq,
//     minimumQ:minq,
//     pricePerUnit: ppu,
//     desc:desc
//   }

const SingleItem = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
      const url = `http://localhost:5000/item/${id}`;
      const { data } = await axios.get(url, { headers: headers });
      console.log(data);
      setItem(data);
    };
    getItem();
  }, [id]);

  return (
    <div>
      <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <img class="object-cover w-4/6 h-72" src={item.img} alt="Article" />

        <div class="p-6">
          <div>
            <span class="flex flex-col md:flex-row text-xs font-medium text-primary">
              <button class="btn btn-xs gap-2">
                Available Quantity
                <div class="badge bg-red-600 text-white">{ item.availableQ }</div>
              </button>

              <button class="btn btn-xs gap-2">
                Minimum order Qunatity
                <div class="badge bg-emerald-700 text-white">{ item.minimumQ }</div>
              </button>
              <button class="btn btn-xs gap-2">
            Per Unit Price <span>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z" clip-rule="evenodd" />
</svg>
            </span>
                <div class="badge bg-emerald-700 text-white">{ item.pricePerUnit }</div>
              </button>
            </span>
            <a
              href="#"
              class="block mt-2 text-2xl font-semibold text-primary transition-colors duration-200 transform  hover:text-gray-600 hover:underline"
            >
              {item.productName}
            </a>
            <p class="mt-2 text-sm text-gray-600 ">{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
