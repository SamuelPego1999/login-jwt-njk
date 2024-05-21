let page = 1;
const limite = 12;
const btnSkip = document.querySelector(".btn-skip")

async function fetchProducts(page=1,limite=12) {
  const offset = (page - 1) * limite;
  const products = await fetch(`/products?limit=${limite}&offset=${offset}`)
    .then((res) => res.json())
    .then((products) => {
      if (products.length == 0) {
        btnSkip.classList.add("invisible")
      }
      console.log(products)
      for (let product of products) {
        const productsContainer = (document.querySelector(
          ".products-container"
        ).innerHTML += `
   <div class="col">
     <div class="card">
       <img src="${product.name}" class="card-img-top object-fit-cover" height="200" alt="${product.name}">
       <div class="card-body">
         <h5 class="card-title"></h5>
         <p class="card-text">$${product.price}</p>
         <div class="d-flex justify-content-around">
              <button type="button" class="btn btn-success w-25"><i class="bi bi-cart-plus" title="add to cart"></i></button>
              <button type="button" class="btn btn-success w-25"><i class="bi bi-cart-dash-fill" title="remove from cart"></i></button>
         </div>
       </div>
     </div>
   </div>
   `);
      } 
    });
}
window.onload = fetchProducts()

btnSkip.addEventListener("click",async ()=> {
  ++page
  await fetchProducts(page)
})