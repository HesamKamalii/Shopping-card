import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import productsContext from "../../Context/ProductsContext";

export default function ShoppingCard() {
  const contextData = useContext(productsContext);
  
 
    
    // if (contextData.ShoppingCardSection.length != 0) { 
    //   //  contextData.ShoppingCardSection[0].price 
    //   // contextData.ShoppingCardSection.map(product => ( console.log( product.price))

    //   // )
    //   // let pervCount =  contextData.ShoppingCardSection[0].price
    //   setTotalPrice( perv => perv + contextData.ShoppingCardSection[0].price)
    // } else {
    //   console.log('no');
      
    // }

  console.log(contextData.ShoppingCardSection);
  
  return (
    <>
    
      <div
        className={`${
          contextData.isSideBarShow ? " " : "invisible"
        } fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}
      >
        <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-6 relative">
          <div className=" absolute top-4 right-4">
            <IoMdClose
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                contextData.setIsSideBarShow(false);
              }}
            />
          </div>

          <h4 className="text-base font-bold text-gray-800 mt-6">{contextData.ShoppingCardSection.length} Items</h4>

          {contextData.ShoppingCardSection.map((product) => (
            <div key={product.id} className="space-y-4 mt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md"
                    src={product.image}
                  />
                  <div className="ml-4">
                    <p className="text-sm text-gray-800">{product.title}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      {product.count}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-base font-bold text-gray-800 mr-4">
                    ${product.price}
                  </span>

                  <svg onClick={()=> {
                    contextData.setTotalPrice(perv => [parseInt(perv) - parseInt(product.price)])
                    contextData.ShoppingCardSection.splice(0 ,1)
                    
                  }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] fill-red-500 inline cursor-pointer"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
         
          <div className="flex mt-6">
            <span className="text-base font-bold text-gray-800 flex-1">
              Total
            </span>
            <span className="text-base font-bold text-gray-800">
              ${contextData.totalPrice}
            </span>
          </div>

          <div className="flex max-sm:flex-col gap-4 mt-6">
            <button
              onClick={() => {
                contextData.setIsSideBarShow(false);
              }}
              type="button"
              className="text-sm px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md tracking-wide"
            >
              Continue shopping
            </button>
            <button
              type="button"
              className="text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
