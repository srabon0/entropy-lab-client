import axios from "axios";
import React from "react";

import { Confirm } from "react-st-modal";
import { toast } from "react-toastify";

const UserRow = ({ index, order,refetch}) => {
    const {_id,productName, productId, pricePerUnit,transactionId,customer,orderQ,shipped} = order

    const handleShipping = async(id) => {
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          };
        const url = `https://powerful-mesa-47934.herokuapp.com/order/delivered/${id}`;
        const proceed = await Confirm('Are you ready for shipment ?', 
        'Warning');
        if (proceed) {
          const {data} = await axios.put(url,{headers:headers});
          if(data){
              console.log(data)
              toast.success("Deliverd");
              refetch();
          }else{
              toast.error("operation failed")
          }
          
        }
      };

     

    
  return (
    <>
      <tr>
          <th>{index+1}</th>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          
          
              <p class="text-gray-900 whitespace-no-wrap">{productName}</p>
              <p class="text-gray-900 whitespace-no-wrap text-sm">{productId}</p>
              <p class="text-gray-900 whitespace-no-wrap text-sm">{customer}</p>
            
          
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{pricePerUnit} TK </p> 
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{orderQ} Unit </p> 
        </td>
        
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {
            transactionId ? <span class="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
            <span
              aria-hidden
              class="absolute inset-0 bg-info rounded-sm"
            ></span>
            <span class="relative">Paid</span>
          </span>
          :<span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
          <span
            aria-hidden
            class="absolute inset-0 bg-error opacity-50 rounded-sm"
          ></span>
          <span class="relative">Unpaid</span>
        </span> 
           
            
           
          } 
        </td>
        {
          shipped ? <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button disabled = { transactionId ? false : true } onClick={() => handleShipping(_id)}>
          <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight ">
            <span
              aria-hidden
              class={`absolute inset-0 rounded-sm ${transactionId ? "bg-success text-white" : "bg-error"   }`}
            ></span>
            <span class="relative">Delivered</span>
          </span>
          </button>
        </td> :

          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button disabled = { transactionId ? false : true } onClick={() => handleShipping(_id)}>
          <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight ">
            <span
              aria-hidden
              class={`absolute inset-0 rounded-sm ${transactionId ? "bg-success text-white" : "bg-error"   }`}
            ></span>
            <span class="relative">Ship</span>
          </span>
          </button>
        </td>
        }

      </tr>
    </>
  );
};

export default UserRow;
