const library = [ 
  { title: "JavaScript Essentials", author: "John", available: true }, 
  { title: "React in Depth", author: "Sara", available: false }, 
  { title: "Node.js Guide", author: "Bob", available: true } 
];

function findBook(library, title) {
  return library.find(book => book.title === title);
}


function getAvailableBooks(library) {
  return library.filter(book => book.available);
}

console.log(findBook(library, "React in Depth"));


console.log(getAvailableBooks(library));

