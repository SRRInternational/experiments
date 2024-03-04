// Data for the template

function renderProducts() {
  const data = {
    products: [
      { name: "Product 1", price: 19.99 },
      { name: "Product 2", price: 29.99 },
      { name: "Product 3", price: 39.99 },
    ],
  };

  // Compile the template
  const source = document.getElementById("product-template").innerHTML;
  const template = Handlebars.compile(source);

  // Render the template with data
  const html = template(data);

  // Display the rendered HTML
  document.getElementById("output").innerHTML = html;
}
