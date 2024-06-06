import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import {ProductsContext} from "../utils/Context"

function Details() {
  
  const [products,setProducts]=  useContext(ProductsContext)
  const { id} = useParams();
  const [idData, setIdData] = useState(null);
  const getIdProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setIdData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIdProduct();
  }, [idData]);


  const handleDelete=()=>{
    console.log(products)
    setProducts(products.filter((product)=>product.id!=id))
  }

  // const clickedimg = (imgSrc) => {
  //   return imgSrc;
  // };
  return idData ? (
    <div className="w-[75%] h-[80vh] bg-zinc-200 mx-[5%] my-[10vh] flex  p-10">
      <div className="images h-[100%] w-[50%]">
        <img
          className="h-full w-[90%] object-contain"
          src={idData.image}
          alt=""
        />
        {/* <div className='small-images bg-red-200 flex'>
          <img className='h-[30%] w-[20%] object-cover m-1' src="https://unsplash.com/photos/black-acoustic-guitar-on-green-grass-7kueosQ7Inc" alt="" />
          <img className='h-[30%] w-[20%] object-cover m-1' src="https://unsplash.com/photos/person-playing-guitar-fCEJGBzAkrU" alt="" />
          <img className='h-[30%] w-[20%] object-cover m-1' src="https://unsplash.com/photos/man-playing-acoustic-guitar-selective-focus-photography-hUHzaiAHuUc" alt="" />
          <img className='h-[30%] w-[20%] object-cover m-1' src="https://unsplash.com/photos/a-person-holding-a-guitar-in-their-hands-hIj7FPdoQxg" alt="" />
        </div> */}
      </div>
      <div className="w-[50%] details flex flex-col gap-2 justify-center ">
        <h1 className="text-2xl font-bold  text-wrap">{idData.title}</h1>
        <h2 className="text-xl font-semibold text-wrap opacity-50">
          {idData.category}
        </h2>
        <h2 className="text-xl font-semibold ">$ {idData.price}</h2>
        <p className="font-semibold text-wrap">{idData.description}</p>
        <div className="buttons flex gap-2">
          <NavLink
            to={`/Edit/${id}`}
            onClick={(e)=>console.log(e)}
            className="h-8 w-20 text-center font-semibold rounded-md px-2 py-1 bg-blue-500 text-zinc-100"
            >
            Edit
          </NavLink>
          <NavLink
            onClick={()=>handleDelete}
            to="/"
            className="h-8 w-20 text-center font-semibold rounded-md px-2 py-1 bg-red-500 text-zinc-100"
          >
            Delete
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
