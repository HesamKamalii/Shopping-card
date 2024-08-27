<div
              key={data.id}
              className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={data.img}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse text-2xl font-bold">
                  <p className="mb-2"> {data.title}</p>
                </div>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${data.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
                <p className="text-center text-lg m-2">Number: {data.count}</p>
              </div>
            </div>