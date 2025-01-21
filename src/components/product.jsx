import React, { useState, useEffect } from 'react';
import productImage from '../assets/product.jpg'; 
import Footer from './footer';

function Product() {
  const [mainProduct, setMainProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedMainProduct = {
      name: "Featured Product",
      price: "$99.99",
      image: productImage, 
    };
    const fetchedProducts = [
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" },
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" },
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" },
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" },
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" },
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" },
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" },
      { name: "140091 TILY CYLINDER SEAL KIT", price: "$20", discountPrice: "$18" }
    ];

    setMainProduct(fetchedMainProduct);
    setProducts(fetchedProducts);
  }, []);

  if (!mainProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between">
        <div className="w-[300px] flex flex-col items-center space-y-4">
          <div className="flex justify-between items-center w-full">
            <button className="text-2xl">&lt;</button>
            <select className="p-2 border border-gray-300 rounded-md">
              <option>Featured Product</option>
              <option>Product 2</option>
            </select>
            <button className="text-2xl">&gt;</button>
          </div>
          <img src={mainProduct.image} alt="Product Image" className="w-full h-64 object-cover rounded-lg" />
          <div className="text-center">
            <h4
             className="text-xl font-semibold">{mainProduct.name}</h4>
            <p className="text-lg text-gray-500">{mainProduct.price}</p>
            <button className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
          <button className="text-xl text-blue-500 mt-2">→</button>
        </div>

        <div className="w-full ml-4 grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-60">
              <img src={productImage} alt="Small Product" className="w-full h-56 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.price} {product.discountPrice}</p>
              <div className="flex justify-between mt-4">
            
                <button className='card' >Add to card  →</button>
              </div>
            </div>
          ))}
        </div>

       
      </div>


      <div class="flex items-center justify-center space-x-4 mt-6">
  <div class="flex space-x-2">
    <button class="px-6 py-3  bg-black text-white">
      1
    </button>
    <button class="px-6 py-3  bg-gray-200 text-black">
      2
    </button>
  </div>

  <button class="px-4 py-2 bg-gray-300 text-white rounded-full">
    &gt;
  </button>
</div>
<div>
    <Footer/>
</div>

    </div>
  );
}

export default Product;