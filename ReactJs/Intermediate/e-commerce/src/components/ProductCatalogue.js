import React, { useState } from "react";
import "./ProductCatalogue.css";

const products = [
  // Laptops
  {
    id: 1,
    name: "HP Pavilion",
    price: "Rs 75,000/-",
    category: "Laptops",
    image: "https://www.asifcomputers.com/wp-content/uploads/2022/03/hp-pavilion-15-16-05-01-min-1200x900.jpg",
  },
  {
    id: 2,
    name: "Dell Inspiron",
    price: "Rs 82,000/-",
    category: "Laptops",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/12/OE/LQ/HB/76083259/dell-inspiron-15-3000-laptop.jpg",
  },
  {
    id: 3,
    name: "Apple MacBook Air",
    price: "Rs 99,000/-",
    category: "Laptops",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654122880566",
  },

  // Smartphones
  {
    id: 4,
    name: "iPhone 13",
    price: "Rs 69,999/-",
    category: "Smartphones",
    image: "https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-black-hybrid-clear-case-cover-for-iphone-13-mini-images/DailyObjects-Black-Hybrid-Clear-Case-Cover-for-iPhone-13-Mini.png?tr=cm-pad_resize,v-3,w-412,h-490,dpr-2,q-60",
  },
  {
    id: 5,
    name: "Samsung Galaxy S22",
    price: "Rs 74,999/-",
    category: "Smartphones",
    image: "https://mobilebuzzbd.com/wp-content/uploads/2023/07/Galaxy-S23-1.jpg",
  },
  {
    id: 6,
    name: "OnePlus 10 Pro",
    price: "Rs 66,000/-",
    category: "Smartphones",
    image: "https://www.xparts.in/wp-content/uploads/2024/05/OnePlus-11-5G-Back-Housing-3.png",
  },

  // Accessories
  {
    id: 7,
    name: "Sony Wireless Headphones",
    price: "Rs 12,000/-",
    category: "Accessories",
    image: "https://www.sony.ca/image/3cacfb2e045ad0250f1673ac46a42b70?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9",
  },
  {
    id: 8,
    name: "Apple AirPods Pro",
    price: "Rs 19,999/-",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "Logitech Wireless Mouse",
    price: "Rs 1,500/-",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UF1000,1000_QL80_.jpg",
  },
];

const categories = ["Laptops", "Smartphones", "Accessories"];

function ProductCatalogue() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container">
      <h2>Services....</h2>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-price">{product.price}</p>
                  <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalogue;