import React, { useContext, useState } from "react";
import productsContext from "../../Context/ProductsContext";

export default function ProductSection({ title, details }) {
  const contextData = useContext(productsContext);

  return (
    <>
      {contextData.allProducts.map((productSection, index) => (
        <div key={index} className=" justify-center m-5 ">
          <h3 className="text-center text-2xl font-bold text-indigo-700 mb-4">
            {productSection.title}
          </h3>
          <div className="grid grid-cols-3 justify-items-center">
            {productSection.details.map((product) => {
              return (
                <div
                  key={product.id}
                  className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg"
                      src={product.img}
                      alt="product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse text-2xl font-bold">
                      <p className="mb-2"> {product.title}</p>
                    </div>
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight
                        Sport
                      </h5>
                    </a>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${product.price}
                      </span>
                      <a
                        href="javascript:void(0)"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          contextData.setIsToastShow(true);

                          setTimeout(() => {
                            contextData.setIsToastShow(false);
                          }, 3000);

                          let newUserProduct = {
                            id: contextData.ShoppingCardSection.length + 1,
                            title: product.title,
                            price: product.price,
                            image: product.img,
                            count: 1
                          }
                          contextData.setTotalPrice(perv => [parseInt(perv) + parseInt(product.price)])
                          contextData.setShoppingCardSection(pervProduct => [...pervProduct , newUserProduct])
                        }}

                      >

                        Add to cart
                      </a>
                    </div>
                    <p className="text-center text-lg m-2">
                      Number: {product.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
