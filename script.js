import { VanillaTilt } from "./vanilla-tilt.js";

let cart = [];
//shoes database
let shoes = [
  {
    name: "Air Jordan 10 Retro “Seattle”",
    price: 190,
    category: ["Men", "Jordan"],
    img: "./images/air-jordan.jpg",
  },
  {
    name: "SpongeBob x Nike Kyrie 5 “Pineapple House”",
    price: 160,
    category: ["Men", "Nike"],
    img: "./images/SpongeBob-Nike.jpg",
  },
  {
    name: "Nora Vasconcellos x adidas 3MC “Light Purple”",
    price: 65,
    category: ["Women", "Adidas"],
    img: "./images/standard-pink.jpg",
  },
  {
    name: "Olivia Kim x Nike Air Footscape “No Cover”",
    price: 150,
    category: ["Women", "Nike"],
    img: "./images/PREM-zebra.jpg",
  },
  {
    name: "adidas Yeezy Boost 350 V2 “Cinder Reflective”",
    price: 220,
    category: ["Men", "Yeezy"],
    img: "./images/cinder-reflective.jpg",
  },
  {
    name: "adidas Yeezy Boost 380 “Hylte Glow”",
    price: 250,
    category: ["Women", "Yeezy"],
    img: "./images/yeezy-copy.png",
  },
];

createShoes();

categoriesEventSetup();
retailEventSetup();
categoriesScaleAnimation();
search();

function shoeEventSetup() {
  let shoeCards = document.getElementsByClassName("shoecard");
  for (let shoe of shoeCards) {
    shoe.addEventListener("click", function (e) {
      e.target.children[2].classList.remove("fa-cart-plus");
      e.target.children[2].classList.add("fa-check");
    });
  }
}

function retailEventSetup() {
  document.getElementById("retailbtn").addEventListener("click", function () {
    clearCatalog();
    let retailCatalog = document.getElementById("retailcatalog");
    retailCatalog.style.display = "flex";
  });
}

function hideRetail() {
  let retailCatalog = document.getElementById("retailcatalog");
  retailCatalog.style.display = "none";
}

function categoriesEventSetup() {
  //set up logo  button
  document.getElementById("logo").addEventListener("click", function () {
    createShoes();
  });
  //set up men button
  document.getElementById("menbtn").addEventListener("click", function () {
    createShoes("Men");
  });
  //set up wommen button
  document.getElementById("womenbtn").addEventListener("click", function () {
    createShoes("Women");
  });
  //set up adidas button
  document.getElementById("adidasbtn").addEventListener("click", function () {
    createShoes("Adidas");
  });
  //set up yeezy button
  document.getElementById("yeezybtn").addEventListener("click", function () {
    createShoes("Yeezy");
  });
  //set up nike button
  document.getElementById("nikebtn").addEventListener("click", function () {
    createShoes("Nike");
  });
  //set up jordan button
  document.getElementById("jordanbtn").addEventListener("click", function () {
    createShoes("Jordan");
  });
}

function search() {
  document.getElementById("searchbtn").addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById("searchbox");
    let searchFilter = input.value.toUpperCase();
    let searchShoes = document.getElementsByClassName("shoecard");
    for (let shoe of searchShoes) {
      let shoeName = shoe.firstChild;
      let shoeNameText = shoeName.textContent;
      if (shoeNameText.toUpperCase().indexOf(searchFilter) > -1) {
        shoe.style.display = "flex";
      } else {
        shoe.style.display = "none";
      }
    }
  });
}

function categoriesScaleAnimation() {
  let navCategories = document.getElementsByClassName("category");
  for (let navCategory of navCategories) {
    navCategory.addEventListener("mouseover", function () {
      navCategory.classList.add("transition");
      navCategory.classList.remove("reverse");
    });
    navCategory.addEventListener("mouseout", function () {
      navCategory.classList.add("reverse");
    });
  }
}

function clearCatalog() {
  //clear previous dom elements
  let previousShoes = document.querySelectorAll(".shoecard");
  for (let previousShoe of previousShoes) {
    previousShoe.remove();
  }
}

function catalogFadeOut() {
  catalog.classList.add("fadeout");
  catalog.classList.remove("reverse");
}

function createCart() {
  hideRetail();
  clearCatalog();
}

function createShoes(filter) {
  hideRetail();
  catalogFadeOut();
  catalog.addEventListener("transitionend", function () {
    clearCatalog();
    //go over database and create shoes
    for (let shoe of shoes) {
      //filter by category
      if (
        shoe.category[0] == filter ||
        shoe.category[1] == filter ||
        filter == undefined
      ) {
        //create shoe cards
        let shoeCard = document.createElement("div");
        shoeCard.classList.add("shoecard");
        shoeCard.setAttribute("data-tilt", "");
        shoeCard.setAttribute("data-tilt-reverse", true);
        //create shoe name
        let shoeName = document.createElement("p");
        shoeName.innerText = shoe.name;
        shoeCard.appendChild(shoeName);
        //create shoe image
        let shoeImg = document.createElement("img");
        shoeImg.src = shoe.img;
        shoeCard.appendChild(shoeImg);
        //create shoe cart
        let shoeCart = document.createElement("i");
        shoeCart.classList.add("shoecart");
        shoeCart.classList.add("fas");
        shoeCart.classList.add("fa-cart-plus");
        shoeCard.appendChild(shoeCart);
        //create price
        let shoePrice = document.createElement("h2");
        shoePrice.innerText = shoe.price + "$";
        shoeCard.appendChild(shoePrice);
        //append card to catalog
        catalog.appendChild(shoeCard);
      }
      VanillaTilt(document.querySelector(".shoecard"), {});
    }
    catalog.classList.add("reverse");
    shoeEventSetup();
  });
}
