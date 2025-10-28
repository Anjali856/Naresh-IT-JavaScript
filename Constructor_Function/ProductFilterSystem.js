const products = [ 
  { name: "Phone", price: 10000 },
  { name: "Laptop", price: 50000 }, 
  { name: "Tablet", price: 20000 }, 
  { name: "Earphones", price: 2000 }
];

// Function to filter products within a given price range
function filterProducts(products, minPrice, maxPrice) {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

// Example usage:
console.log(filterProducts(products, 5000, 25000));
