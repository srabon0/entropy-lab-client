import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Myprofile = () => {
  const imgApiKey = "e93becba76932bc2bf5cc1518db458ba";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [user, loading, error] = useAuthState(auth);
  const url = ` https://powerful-mesa-47934.herokuapp.com/ user/${user.email}`;
  const {
    isLoading,
    error2,
    data: currentUser,
    refetch,
  } = useQuery(["user", user], () => fetch(url).then((res) => res.json()));

  const onSubmit = async (data) => {
    const image = data.image[0];
    var formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          const myimg = result.data.url;
          const userinfo = {
            name: data.name,
            contact: data.contact,
            img: myimg,
          };
          console.log(userinfo);
          const urlToUpdate = `https://powerful-mesa-47934.herokuapp.com/ update/${currentUser.email}`;
          fetch(urlToUpdate, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(userinfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                toast.success("user updated Successfully");
                console.log(data);
                refetch();
              } else {
                toast.error("cant update the user");
              }
            });
        }
      });
  };

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  if (error || error2) {
    return (
      <div>
        <p>Error: {error || error2}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row gap-8 ">
      <div class="max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          class="object-cover object-center w-full h-48"
          src={
            currentUser?.img || user?.photoURL ||
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          }
          alt="avatar"
        />
        {(!currentUser?.img && !user?.photoURL ) && <p className="text-white"> update ur image</p>}

        <div class="px-6 py-4">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            {currentUser?.name || user.displayName || "please update name"}
          </h1>

          <p class="py-2 text-gray-700 dark:text-gray-400">Platinum User.</p>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 11H10V13H14V11Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              />
            </svg>

            <h1 class="px-2 text-sm"></h1>
          </div>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>

            <h1 class="px-5 text-sm">{currentUser?.contact}</h1>
            {user?.phoneNumber ? (
              <span> {user.phoneNumber} </span>
            ) : (
              <span> No contact found in google </span>
            )}
          </div>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
              />
            </svg>

            <h1 class="px-2 text-sm">{user.email}</h1>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <h1 className="m-4 text-2xl text-primary">Update your information</h1>
        <div class="card-body">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="contact"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  {...register("contact", {
                    required: {
                      value: true,
                      message: "Phone is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.contact?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <input
                  type="file"
                  placeholder="your image here"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />

                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="card-actions justify-end">
                <input
                  type="submit"
                  className="btn btn-secondary mt-6  text-base-100 w-full max-w-md"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
