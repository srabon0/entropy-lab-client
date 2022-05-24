import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Additem = () => {
  const imgApiKey = "e93becba76932bc2bf5cc1518db458ba";
  const navigate = useNavigate()

  const handleAddItem = async(event)=>{
    event.preventDefault()
    const productName = event.target.name.value
    const avq = event.target.avq.value
    const minq = event.target.minq.value
    const ppu = event.target.ppu.value
   
    const desc = event.target.desc.value
    const img = event.target.img.files[0]
    var formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.success){
          const imgurl = result.data.url;
          const item = {
            productName:productName ,
            img: imgurl,
            availableQ: avq,
            minimumQ:minq,
            pricePerUnit: ppu,
            desc:desc
          }
          const addItemUrl = "http://localhost:5000/additem";
          fetch(addItemUrl, {
            method: "POST",
            headers: {
            "content-type":"application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(item),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Item added Successfully");
                console.log(data)
                
              }else{
                  toast.error("Operation Failed")
                  
              }
            });
        }


      })







  }








  return (
    <div>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div class="max-w-md mx-auto">
            <div class="flex items-center space-x-5">
              <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                i
              </div>
              <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 class="leading-relaxed">Add a Item</h2>
                <p class="text-sm text-gray-500 font-normal leading-relaxed">
                  Entropy Lab item product insertion.
                </p>
              </div>
            </div>
            <form onSubmit={handleAddItem} >
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="flex flex-col">
                  <label class="leading-loose">Product Name</label>
                  <input required name="name"
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Product Name"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Available Quantity</label>
                  <input required name="avq"
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="eg: 1000"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <div class="flex flex-col">
                    <label class="leading-loose">
                      Minimum Order Quantity
                    </label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input required name="minq"
                        type="text"
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                       placeholder="eg: 1000"
                      />
                      <div class="absolute left-3 top-2">
                        
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">Per Unit Price</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input required name="ppu"
                        type="text"
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="eg: 150"
                      />
                      <div class="absolute left-3 top-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Item Description</label>
                  <input required name="desc"
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Description"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Item Image</label>
                  <input required name="img"
                    type="file"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Product Img"
                  />
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                
                <input type="submit" class="bg-blue-500 flex hover:cursor-pointer justify-center items-center w-full text-center text-white px-4 py-3 rounded-md focus:outline-none" value="Add item"  />
                
               
              </div>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Additem;