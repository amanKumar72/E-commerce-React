import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { ProductsContext } from "../utils/Context";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductsContext);
  const [filteredData, setfilteredData] = useState(null);
  let { search } = useLocation();
  search = decodeURIComponent(search.split("=")[1]);

  const getFilteredData = async () => {
    try {
      const { data } = await axios.get(`products/category/${search}`);
      setfilteredData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(search!='undefined')getFilteredData();
    else setfilteredData(products)
  }, [search, products]);

  return products ? (
    <>
      <div className="min-h-full w-[85%] bg-zinc-100 overflow-x-hidden overflow-y-auto">
        <div className="cards flex flex-wrap">
          {filteredData &&
            filteredData.map((product, index) => {
              return (
                <NavLink
                  key={index}
                  to={`/details/${product.id}`}
                  className="card w-48 my-4 mx-6 p-2 h-60 bg-zinc-200 rounded-md flex flex-col items-center overflow-y-hidden"
                >
                  <img
                    className="h-[70%] w-[100%] object-contain hover:scale-105 transition duration-200 ease-in "
                    src={product.image}
                    alt=""
                  />
                  <h1 className="title text-sm font-semibold mt-3">
                    {product.title}
                  </h1>
                </NavLink>
              );
            })}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
