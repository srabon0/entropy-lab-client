import React from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";
import Loading from '../Shared/Loading';

const Alluser = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch
  } = useQuery("allUsers", () =>
    fetch("https://powerful-mesa-47934.herokuapp.com/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">All User</h2>
          <span className="text-xs">All products item</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="bg-gray-50 outline-none ml-1 block "
              type="text"
              name=""
              id=""
              placeholder="search..."
            />
          </div>
          <div className="lg:ml-40 ml-10 space-x-8">
            <button className="btn btn-primary px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              New Report
            </button>
            <button className="btn btn-primary px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              Create
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
{
    users.map(user=><UserRow refetch={refetch} key={user._id} user={user} refetch={refetch} ></UserRow>)
}


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
