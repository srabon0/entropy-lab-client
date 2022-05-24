import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
    return (
        <>
         
          

<div class="h-full">
 
  <div class="border-b-2 block md:flex">

    <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div class="flex justify-between">
        <span class="text-xl font-semibold block">User Profile</span>
        <Link to="/editprofile" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</Link>
      </div>

      <span class="text-gray-600">Your Profile information</span>
      <div class="w-full p-8 mx-2 flex justify-center">
        <img id="showImage" class="max-w-xs w-32 items-center border" src={user.photoURL} alt="" />                          
        </div>
    </div>
    
    <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
      <div class="rounded  shadow p-6">
        <div class="pb-6">
          <label htmlFor="name" class="font-semibold text-gray-700 block pb-1">Name</label>
          <div class="flex">
            <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value={user.displayName} />
          </div>
        </div>
        <div class="pb-4">
          <label htmlFor="about" class="font-semibold text-gray-700 block pb-1">Email</label>
          <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value={user.email} />
          <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
        </div>
      </div>
    </div>

  </div>
 
</div>
        </>
    );
};

export default Profile;