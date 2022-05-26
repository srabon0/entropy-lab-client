import React from "react";
import { useQuery } from "react-query";
import SingleProduct from "./SingleProduct";
import Loading from '../../../Shared/Loading';

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", () =>
    fetch("https://powerful-mesa-47934.herokuapp.com/labitems").then((res) => res.json())
  );

  if (isLoading) return <Loading></Loading>

  if (error) return "An error has occurred: " + error.message;

  return (
    <section id="products" className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
            EntropyLab is World's First
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Explore our <span className="text-primary" > Products </span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Our products are precise and accurate for every segment of the Scientific Lab Industry.
          </p>
        </div>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
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
