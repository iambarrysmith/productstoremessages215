var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

var products2 = [];

//function to create the clickable menu
function createMenu(products) {
  var that = this;
  //creating elements of the menu
  this.ele = document.createElement("div");
  this.ele.classList.add("product");
  this.imageEle = document.createElement("div");
  this.nameEle = document.createElement("p");
  this.priceEle = document.createElement("p");

 //setting up for adding content to menu
  this.name = "Name: " + products.name;
  this.price = products.price;
  this.color = products.color;
  this.image = "<img src='" + products.image + "'/>";
  this.id = products.id;

  //adding content to menu
  this.priceEle.innerHTML = "Price: $" + this.price;
  this.imageEle.innerHTML = this.image;
  this.nameEle.innerHTML = this.name;
  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);

  //creating the popup when menu item is clicked
  this.ele.onclick = function () {
    popUp(products);
  };
  
  //adding the hover functionality
  this.ele.addEventListener("mouseover", function () {
    that.ele.style.borderColor = products.color;
  });
  
  //adding revert when no longer hovering over a menu item
  this.ele.addEventListener("mouseout", function () {
    that.ele.style.borderColor = "black";
  });

  //appending it all to the main body
  document.body.querySelector(".wrapper").appendChild(this.ele);
}


function popUp(products) {
  var that = this;
  this.ele = document.createElement("div");
  this.ele.classList.add("popUp");
  this.imageEle = document.createElement("div");
  this.nameEle = document.createElement("p");
  this.priceEle = document.createElement("p");
  
  this.name = "Name: " + products.name;
  this.price = products.price;
  this.color = products.color;
  this.image = "<img src='" + products.image + "'/>";

  this.imageEle.innerHTML = this.image;
  this.nameEle.innerHTML = this.name;
  this.priceEle.innerHTML = "Price: $" + this.price;
  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.priceEle);
  this.ele.appendChild(this.nameEle);

  this.ele.onclick = function () {
    this.remove();
  };

  document.body.querySelector(".wrapper").appendChild(this.ele);
}

function loop() {
  for (var i = 0; i < products.length; i++) {
    products2.push(new createMenu(products[i]));
  }
}

loop();