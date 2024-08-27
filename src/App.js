// import logo from './logo.svg';
// import { useEffect } from 'react';
// import './index.css';
import { useState } from "react";
import NabarSection from "./Component/navbar/NabarSection";
import ProductSection from "./Component/product/ProductSection";
import products from "./ProdcutData";
import Toast from "./Component/toast/Toast";
import ShoppingCard from "./Component/sideBar/ShoppingCard";
import productsContext from "./Context/ProductsContext";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [ShoppingCardSection, setShoppingCardSection] = useState([]);
  const [isToastShow, setIsToastShow] = useState(false);
  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState( 0 )


  return (
    <div>
      <productsContext.Provider
        value={{
          allProducts,
          ShoppingCardSection,
          setShoppingCardSection,
          isToastShow,
          setIsToastShow,
          isSideBarShow,
          setIsSideBarShow,
          totalPrice,
          setTotalPrice
        }}
      >
        <NabarSection />
        <main className="py-4">
          <div className="container">
            <h1 className=" text-center text-green-700 text-2xl font-bold ">
              All products
            </h1>
            
              <ProductSection />
            
          </div>
        </main>
        <Toast />
        <ShoppingCard />
      </productsContext.Provider>
    </div>
  );
}

export default App;
