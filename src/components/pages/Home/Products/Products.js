import React from "react";
import { useQuery } from "react-query";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/labitems").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-primary tracking-widest font-medium title-font mb-1">
            EntropyLab is World's First
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.map((product) => (
              <SingleProduct
                key={product._id}
                product={product}
              ></SingleProduct>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
