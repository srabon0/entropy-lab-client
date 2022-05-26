import axios from "axios";
import React from "react";

import { Confirm } from "react-st-modal";
import { toast } from "react-toastify";

const UserRow = ({user,refetch}) => {
    const {_id,name,img,email,contact, role} = user

    const handleRemoveUser = async(id) => {
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          };
        const url = `https://powerful-mesa-47934.herokuapp.com/deluser/${id}`;
        const proceed = await Confirm('Are you Sure you want to remove the user ?', 
        'Warning');
        if (proceed) {
          const {data} = await axios.delete(url,{headers:headers});
          if(data){
              console.log(data)
              toast.success("User Removed");
              refetch();
          }else{
              toast.error("operation failed")
          }
          
        }
      };

      const handleMakeAdmin = async(email)=>{
       
      const proceed = await Confirm('Confirm Again !!!', 
        'Confirmation');
        if (proceed) {
          const adminUrl = `https://powerful-mesa-47934.herokuapp.com/secretAdmin/${email}`;
          fetch(adminUrl,{
            method:"PUT",
            headers:{
              'content-type':'application/json',
              'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
          })
          

      }
    }

    
  return (
    <>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
              <img
                class="w-full h-full rounded-full"
                src={img || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" }
                alt=""
              />
            </div>
            <div class="ml-3">
              <p class="text-gray-900 whitespace-no-wrap">{name || "no name"}</p>
              <p class="text-gray-900 whitespace-no-wrap">{email}</p>
            </div>
          </div>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{role || "Platinum User"}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{contact|| "NO Phone record   "}</p>
        </td>
        
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {
            !role &&
            <button onClick={()=>handleMakeAdmin(email)}>
            <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
              <span
                aria-hidden
                class="absolute inset-0 bg-accent opacity-50 rounded-sm"
              ></span>
              <span class="relative">Make Admin</span>
            </span>
            </button>
          } 
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button  onClick={() => handleRemoveUser(_id)}>
          <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
            <span
              aria-hidden
              class="absolute inset-0 bg-red-700 opacity-50 rounded-sm"
            ></span>
            <span class="relative">Remove user</span>
          </span>
          </button>
        </td>

      </tr>
    </>
  );
};

export default UserRow;
