import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Rating from './Rating'
const Addreview = () => {
    const[user,loading,error] =  useAuthState(auth)

  const [rating, setRating] = useState(null);
  console.log(rating)
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error }</p>
      </div>
    );
  }

  const handleSubmitReview = async(event) =>{
      event.preventDefault()
      const reviwRating = {
            rating : rating,
         review : event.target.review.value,
         userEmail : user?.email,
         userName:user?.displayName
      }
      console.log(reviwRating)
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
       
       const url  = "https://powerful-mesa-47934.herokuapp.com/addreview"
       const {data} = await axios.post(url,reviwRating,{headers:headers});
       if(data.insertedId){
        console.log(data)
        toast.success("Review Added")
        setRating(null)
        event.target.reset()
       
          
      }else{
          toast("operation failed")
      }
      

  }
  return (

    <div className="card w-96 bg-base-100 shadow-xl">
        <h1 className="text-primary mb-4">Add your rating and write something aboout EntropyLab</h1>
        <Rating key={1}
      setRating={setRating}
      ></Rating>
      
    
  <div className="card-body">
  {
          rating && <p className=" text-sm text-yellow-700">You decided to rate this {rating} </p>
      }
      <form onSubmit={handleSubmitReview}>
      <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">Message</label>

                <textarea name="review" className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
            </div>
    <div className="mt-4 card-actions justify-end">
      <input type="submit" value="Submit Review" className="btn btn-primary" />
    </div>
    </form>
  </div>
</div>
   
      
  );
};

export default Addreview;
