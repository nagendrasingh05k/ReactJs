import React from "react";

const products = [
  { id: 1, name: "Laptop", price: "Rs 12000/-" },
  { id: 2, name: "Smartphone", price: "Rs 19000/-" },
  { id: 3, name: "Headphones", price: "Rs 1300/-" },
];

function ProductCatalogue() {
  return (
    <div className="container">
      <h2>Product Catalogue</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - <strong>{product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalogue;
