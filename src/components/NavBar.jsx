import React, { useContext } from "react";
import { ProductsContext } from "../utils/Context";
import { Link } from "react-router-dom";

function NavBar() {
  const [products] = useContext(ProductsContext);

  var uniqueCatogries;
  uniqueCatogries = products && products.map((product) => product.category);
  uniqueCatogries = [...new Set(uniqueCatogries)];


  const randomColor=()=>{
    return `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
  }

  return (
    <div className="w-[15%] min-h-screen bg-zinc-200 flex items-center flex-col ">
      <Link
        className="w-[80%] h-8 bg-blue-300 text-zinc-100 px-2 py-1 text-center my-2  rounded"
        to="/add"
      >
        Add New Product
      </Link>
      <Link to="/" className="mx-3 my-1 text-xl font-semibold bg-red-300 px-2 rounded-md text-zinc-100">
        Home
      </Link>
      <h1 className="text-xl font-bold">Categories </h1>
      <ul className="w-[80%] ">
        {uniqueCatogries.map((category,index) => (
          <Link to={`/?category=${category }`} key={index} className=" mt-4 px-2 w-[100%] flex items-center ">
            <span style={{backgroundColor:randomColor()}} className={`h-3 w-3 mr-2 mt-1  rounded-full`}></span>
            {category}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
