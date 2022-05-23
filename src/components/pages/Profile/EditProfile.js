import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const EditProfile = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (error||upError) {
    return (
      <div>
        <p>Error: {error.message || upError}</p>
      </div>
    );
  }

  const onSubmit = async(data) => {
    console.log(data);
    
    await updateProfile({displayName:data.name})
  };
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
        <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
      <div class="rounded  shadow p-6">
        <div class="pb-6">
          <label htmlFor="name" class="font-semibold text-gray-700 block pb-1">Name</label>
          <div class="flex">
            <input name='name' class="border-1  rounded-r px-4 py-2 w-full" type="text" defaultValue={user.displayName} {...register("name", {
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
            </label></div>
        </div>
        <div class="pb-4">
          <label htmlFor="about" class="font-semibold text-gray-700 block pb-1">Email</label>
          <input name="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value={user.email} />
        </div>
        <input type="submit" class="btn btn-primary" value="Edit profile" />
      </div>
    </div>
    </form>
    );
};

export default EditProfile;