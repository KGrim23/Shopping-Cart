let carts = document.querySelectorAll(".add-to-cart-btn");
let products = [
  {
   name: 'Mandala T-shirt',
   tag: 'black-tshirts',
   price: 20.00,
   inCart: 0
  },
  {
    name: 'Lotus Tshirts',
    tag: 'black-tshirts',
    price: 20.00,
    inCart: 0
   },
   {
    name: 'Mandala Hoodies',
    tag: 'grey-hoodies',
    price: 30.00,
    inCart: 0
   },
   {
    name: 'Lotus Hoodies',
    tag: 'white-hoodies',
    price: 30.00,
    inCart: 0
   },
   {
    name: 'Lotus Hoodies',
    tag: 'black-hoodies',
    price: 30.00,
    inCart: 0
   },
   {
    name: 'Lotus Hoodies',
    tag: 'white-hoodies',
    price: 30.00,
    inCart: 0
   },
   {
    name: 'Mnadala Hoodies',
    tag: 'white-hoodies',
    price: 30.00,
    inCart: 0
   },
   {
    name: 'Lotus Hoodies',
    tag: 'grey-hoodies',
    price: 30.00,
    inCart: 0
   },
   {
    name: 'Lotus Love Tshirts',
    tag: 'black-tshirts',
    price: 20.00,
    inCart: 0
   },
   {
    name: 'Lotus Tshirts',
    tag: 'white-tshirts',
    price: 20.00,
    inCart: 0
   },
   {
    name: 'Lotus Tshirts',
    tag: 'white-tshirts',
    price: 20.00,
    inCart: 0
   },
   {
    name: 'Wedding Mugs',
    tag: 'wedding mugs 1',
    price: 15.00,
    inCart: 0
   },
   {
    name: 'Wedding Mugs',
    tag: 'wedding mugs2',
    price: 15.00,
    inCart: 0
   },
   {
    name: 'Wedding Mugs',
    tag: 'wedding mugs3',
    price: 15.00,
    inCart: 0
   },
   

]
for(let i = 0; i < carts.length; i++) {
 carts[i].addEventListener("click", () => {
  cartNumbers(products[i]);
  totalCost(products[i]);
 })
}


//GET ITEMS
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if(productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) { 
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  }
  else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
} 

//SET ITEMS

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  }
  else {
   product.inCart = 1;
   cartItems = {
    [product.tag]: product
   }
  } 
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//TOTAL COST
function totalCost(product) { 
  let cartCost = localStorage.getItem("totalCost");
  
   if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  }
  else {
    localStorage.setItem("totalCost", product.price);
  }
}


//DISPLAY CART
function displayCart() {
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);
let productContainer = document.querySelector(".products");
let cartCost = localStorage.getItem("totalCost");

  if (cartItems && cartItems != 0) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <ion-icon name="close-circle-outline"></ion-icon>
        
        <span>${item.name}</span>
      </div>
      <div class="price">£${item.price},00</div>

      <div class="quantity"><ion-icon name="arrow-dropleft-circle"></ion-icon>

      <span>${item.inCart}</span><ion-icon name="arrow-dropright-circle"></ion-icon></div>
      <div class="total">£${item.inCart * item.price},00
      </div>
      `;
    });
productContainer.innerHTML += `
<div class="basketTotalContainer">
  <h4 class="basketTotalTitle">Basket Total</h4>
  <h4 class="basketTotal">£${cartCost},00</h4> `
  }
}

//CLEAR BASKET
function clearBasket(){
  localStorage.removeItem("productsInCart");
  localStorage.removeItem("totalCost");
  localStorage.removeItem("cartNumbers");
  let cartItems = document.querySelector(".products");
  cartItems.innerHTML = '';
  let cartCost = document.querySelector(".basketTotal");
  cartCost.textContent = 0.00;
  let cartNumbers = document.querySelector(".cart span");
  cartNumbers.textContent = 0;
  let total = document.querySelector(".basketTotal");
  total.textContent = 0.00;
  let totalItems = document.querySelector(".totalItems");
  totalItems.textContent = 0;
  let cartIcon = document.querySelector(".cart-icon span");
  cartIcon.textContent = 0;
  let cartTotal = document.querySelector(".basketTotal");
  cartTotal.textContent = 0.00;
  let cartTotalItems = document.querySelector(".totalItems");
  cartTotalItems.textContent = 0;
  let cartTotalCost = document.querySelector(".basketTotal");
  cartTotalCost.textContent = 0.00;
}

onLoadCartNumbers()
displayCart()

// PRODUCT FILTER
// const buttons = document.querySelector('.product-filter');
// const optionEl = document.querySelector('.options-btn');
// const productContainer = document.querySelector('.container');

// buttons.forEach((button) => {
//   button.onclick = function () {
//     const value = button.textContent;
//     console.log(value);

//   productContainer.forEach((container) => {
//     container.style.display = "none"
//   })
//   if (container.getAttribute('data-filter') === value.toLowerCase() || value === "All") {
//     container.style.display = "block"
//   }

//   }
// })


