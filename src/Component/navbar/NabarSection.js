import React ,{ useContext } from "react";
import { BsBag } from "react-icons/bs";
import productsContext from "../../Context/ProductsContext";

export default function NabarSection() {
  const contextData = useContext(productsContext);

  return (
    <nav className="bg-cyan-500 p-4 shadow-md ">
      <div className="container mx-auto flex   ">
        <h3 className="text-white px-1.5 text-lg">
          <a className="no-underline" href="#">
            Shopping Card Project
          </a>
        </h3>

        <ul className="flex gap-2 ml-8 mr-auto text-white ">
          <li className="list-none "> Home </li>
          <li className="list-none "> Home </li>
        </ul>

        <div>
          <a className="flex items-center gap-1 text-white" href="#">
            <BsBag
              onClick={() => {
                contextData.setIsSideBarShow(true);
              }}
            />
            <span className="rounded-full bg-transparent"> {contextData.ShoppingCardSection.length}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
