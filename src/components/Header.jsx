import React from "react";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { CiHeart, CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import logo from "../assets/logo.jpg";
import { MdNavigateNext } from "react-icons/md";
import Home from "./home";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img className="logo-box" src={logo} alt="Logo" />
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search here"
            className="search-box"
          />
          <button className="search-btn">
            <CiSearch />
          </button>
        </div>

        <div className="nav-links-right">
          <span>
            <HiMiniArrowsRightLeft />
          </span>
          <span>
            <CiHeart />
          </span>
          <span>
            <CiShoppingCart /> 0 items
          </span>
          <button className="login-btn">
            <CiUser />
            Login
          </button>
        </div>


      </header>
      <div className="second">  
  <nav class="flex justify-center items-center overflow-x-auto whitespace-nowrap">
    <div class="space-x-4">
      <a href="/" class="text-black font-bold">Home</a>
      <a href="/about" class="text-gray-500">About</a>
      <a href="/services" class="text-gray-500">Equipments</a>
      <a href="/signup" class="text-gray-500">Services</a>
      <a href="/signup" class="text-gray-500">Parts</a>
      <a href="/signup" class="text-gray-500">Rentals</a>
      <a href="/signup" class="text-gray-500">Ebooks</a>
      <a href="/signup" class="text-gray-500">Contact</a>
      <a href="/signup" class="text-gray-500">Blog</a>
    </div>
  </nav>
</div>
<div className="second1">
<a href="/" class="text-gray-500">Home  </a>
<MdNavigateNext />


<a href="/about" class="text-black font-bold">Sales</a>

</div>

    </div>
  );
}

export default Header;