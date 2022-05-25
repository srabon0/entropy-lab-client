import React from "react";

import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RevCard = ({ rev }) => {
  const { _id, rating, review, userEmail, userName } = rev;


  return (

      <div class="border-2 border-secondary h-56 max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md">
        <div class="flex items-center justify-between">
          <span class="border-b-2 border-success text-sm font-light text-gray-600">
            {userName || "anonymous user"}
          </span>
          <a class="border-2 border-success px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-200 rounded cursor-pointer hover:bg-gray-300">
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </a>
        </div>

        <div class="mt-2">
          <p class="mt-2 text-gray-600">{review}</p>
        </div>

        <div class="flex items-center justify-between mt-4">
          <Link
            to="/dashboard/addreview"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more
          </Link>

          <div class="flex items-center">
            <a class=" border-t-2 border-success bor font-bold text-gray-700 cursor-pointer">
              {userEmail}
            </a>
          </div>
        </div>
      </div>

  );
};

export default RevCard;
