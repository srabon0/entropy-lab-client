import React from "react";
import { useQuery } from "react-query";
import SingleProduct from './SingleProduct'

const Products = () => {

    const { isLoading, error, data:products } = useQuery('products', () =>
    fetch('http://localhost:5000/labitems').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
          <h1> {products.length} </h1>
        <div class="flex flex-wrap -m-4">
          {
              products.map(product=><SingleProduct key={product._id} product={product}></SingleProduct>)
          }
        </div>
      </div>
    </section>
  );
};

export default Products;
