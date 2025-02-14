console.log('Connected');
let fButton = document.getElementById("final-btn")

function items(image,iName,iDes,iPrice){
  let card = document.createElement("div")
  card.innerHTML = `<div class="item-card">
                    <div class="item-imageContainer">
                      <img src="${image}" alt="${iDes}">
                    </div>
                    <div class="item-nameContainer">
                      <div class="item-name">${iName}</div>
                      <div class="item-des">${iDes}</div>
                      <div class="item-price">Rs ${iPrice}</div>
                    </div>
                    <div class="btn-container">
                      <button class="btn">Add to Cart</button>
                    </div>
                    
                  </div>`
  document.querySelector(".item-container").append(card)
}
products.forEach(product=>{
  items(product.image,product.name,product.description,product.price);
})

let total = []
let buttons = document.querySelectorAll(".btn")
buttons.forEach((button,index)=>{
  button.addEventListener("click",()=>{
   console.log(`${products[index].description} is added to cart of`+ ` Rs ${products[index].price}`)
   total.push(products[index].price)
   button.innerHTML = `Item Added`
   setInterval(() => {
    button.innerHTML = `Add to Cart`
   }, 2000);
  })
})

fButton.addEventListener("click",()=>{
  console.log(total)
  totalAmount(total)
})
function totalAmount(total){
  let sum = 0;
  for(let i = 0; i < total.length; i++){
    let price = total[i].replace(/,/g, ''); // Remove commas from the string
    sum += parseInt(price);
  }
  console.log(`Your Final Cart Value is Rs ${sum.toLocaleString()}`);
  alert(`Thanks for Shopping your Final Cart Value is Rs ${sum.toLocaleString()}`)
}