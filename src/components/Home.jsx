import React from 'react';
import { RiWindowsFill } from "react-icons/ri";
import Product from './product';
import { CgDetailsMore } from "react-icons/cg";

const Home = () => (
  <div className="home">
    <div><h3 className='heading'>
      Forklift Parts</h3>
      <div className="flex"> 
      
        <div className="w-[300px] flex flex-col items-start space-y-4 p-5">
          <select className="p-2 border rounded-md w-full">
            <option value="range1">price range</option>
            <option value="range2">Range 2</option>
          </select>
          <div className='price'>
          <span className='price1'>$0B</span>
          <span className="text-gray-700">$10B</span>
          </div>
          
          <div className="w-full flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="10000000000"
              className="text-orange-500 w-full h-2 bg-orange-500 rounded-lg"
            />
            
           
          </div>

          <div className="flex space-x-2">
            <button className="price-box bg-whte-500  p-2 rounded-md">Min</button>
            <button className="price-box bg-white-500  p-2 rounded-md">Max</button>
          </div>
        </div>

        
        <div className="flex-1 flex flex-col items-start space-y-4 p-5">
          <div className="flex w-full">
            
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Search..."
            />
            <button className="ml-2 bg-orange-500 text-white-500 p-3 ">Search</button>
          </div>

          <div className="flex space-x-4">
            <button className="p-2 bg-gray-200 rounded-full">
              <span className="material-icons">< RiWindowsFill/></span>
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <span className="material-icons"><CgDetailsMore/></span>
            </button>
            <select className="p-2 border rounded-md">
              <option value="latest">Sort by Latest</option>
              <option value="oldest">Sort by Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <Product/>
  </div>

);

export default Home;