import axiosInstance from "../../utils/axiosInstance";
import React from "react";

import { Confirm } from "react-st-modal";
import { toast } from "react-toastify";


const UserRow = ({ user, refetch }) => {
  const { _id, name, img, email, contact, role } = user;

  const handleRemoveUser = async (id) => {
    const proceed = await Confirm(
      'Are you sure you want to remove the user?',
      'Warning'
    );

    if (proceed) {
      try {
        const url = `/deluser/${id}`;
        const response = await axiosInstance.delete(url);
        if (response.data) {
          console.log(response.data);
          toast.success("User Removed");
          refetch();
        } else {
          toast.error("Operation failed");
        }
      } catch (error) {
        console.error("Error removing user:", error);
        toast.error("An error occurred while removing the user");
      }
    }
  };

  const handleMakeAdmin = async (email) => {
    const proceed = await Confirm('Confirm Again !!!', 'Confirmation');

    if (proceed) {
      try {
        const adminUrl = `/secretAdmin/${email}`;
        const response = await axiosInstance.put(adminUrl);
        console.log(response.data);
        toast.success("Appointed as an admin");
        refetch();
      } catch (error) {
        console.error("Error making user admin:", error);
        toast.error("An error occurred while appointing as an admin");
      }
    }
  };


  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src={img || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{name || "no name"}</p>
              <p className="text-gray-900 whitespace-no-wrap">{email}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{role || "Platinum User"}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{contact || "NO Phone record   "}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {
            !role &&
            <button onClick={() => handleMakeAdmin(email)}>
              <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-accent opacity-50 rounded-sm"
                ></span>
                <span className="relative">Make Admin</span>
              </span>
            </button>
          }
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button onClick={() => handleRemoveUser(_id)}>
            <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
              <span
                aria-hidden
                className="absolute inset-0 bg-red-700 opacity-50 rounded-sm"
              ></span>
              <span className="relative">Remove user</span>
            </span>
          </button>
        </td>

      </tr>
    </>
  );
};

export default UserRow;
