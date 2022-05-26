import axios from 'axios';
import React from 'react';
import { Confirm } from 'react-st-modal';
import { toast } from 'react-toastify';

const ProductRow = ({product,index,refetch}) => {

    const cancelOrder = async (id) => {
        const url = `https://powerful-mesa-47934.herokuapp.com/removeitem/${id}`;
        const headers = {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };
        const result = await Confirm(
          "Are you Sure You want to cancel the order?",
          "Warning"
        );
    
        if (result) {
          const { data } =await axios.delete(url, { headers: headers });
          toast.success("Order cancelled");
          refetch();
        } else {
          // Сonfirmation not confirmed
        }
      };

    const { _id, productName,pricePerUnit, availableQ,minimumQ,desc} = product
    return (
        <>
      <tr>
          <th>{index+1}</th>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          
          
              <p class="text-gray-900 whitespace-no-wrap">{productName}</p>
              <p class="text-gray-900 whitespace-no-wrap">{pricePerUnit} TK/per unit </p>
              
            
          
        </td>
        
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap"> {availableQ} Unit </p> 
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap"> {minimumQ} Unit </p> 
        </td>
        
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
              onClick={() => cancelOrder(_id)}
              className="btn btn-sm btn-error mx-1"
            >
              Delete
            </button>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
           
        </td>

        
        
        

      </tr>
    </>
    );
};

export default ProductRow;