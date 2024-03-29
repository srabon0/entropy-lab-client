// import React from 'react';

// const OrderItem =  => {
//    
//     return (
//         <div className=" py-4 my-3 max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
//         <img className="object-cover w-4/6 h-72" src={img} alt="Article" />

//         <div className="p-6">
//           <div>
//             <span className="flex flex-col md:flex-row text-xs font-medium text-primary">
//               <button className="btn btn-xs gap-2">
//                 Available Quantity
//                 <div className="badge bg-red-600 text-white">{availableQ}</div>
//               </button>

//               <button className="btn btn-xs gap-2">
//                 Minimum order Qunatity
//                 <div className="badge bg-emerald-700 text-white">
//                   {minimumQ}
//                 </div>
//               </button>
//               <button className="btn btn-xs gap-2">
//                 Per Unit Price{" "}
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-emerald-600"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//                 <div className="badge bg-emerald-700 text-white">
//                   {pricePerUnit}
//                 </div>
//               </button>
//             </span>
//             <a
//               href="#"
//               className="block mt-2 text-2xl font-semibold text-primary transition-colors duration-200 transform  hover:text-gray-600 hover:underline"
//             >
//               {productName}
//             </a>
//             <p className="mt-2 text-sm text-gray-600 ">{desc}</p>
//           </div>
//           
//         </div>

       
       
//       </div>
//     );
// };

// export default OrderItem;
import React from 'react';

const OrderItem = ({item,setOrder}) => {
  const {img,availableQ,minimumQ,productName,_id,pricePerUnit,desc} = item
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{productName}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1"></a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Before Confirm </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">{desc}</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Avaliable Quantity</span>
          <span className="ml-auto text-gray-900">{availableQ}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Minimum Order Quantity</span>
          <span className="ml-auto text-gray-900">{minimumQ}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Price Per Unit</span>
          <span className="ml-auto text-gray-900">{pricePerUnit}</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">৳ {minimumQ*pricePerUnit}</span>
          <label onClick={()=>setOrder(item)} htmlFor="order-modal" className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Place Order</label>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt={_id} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img}/>
    </div>
  </div>
</section>
  );
};

export default OrderItem;