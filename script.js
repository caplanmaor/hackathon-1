import { VanillaTilt } from "./vanilla-tilt.js";

//shoes database
let shoes = [
  {
    name: "Air Jordan 10 Retro “Seattle”",
    price: 190,
    category: ["Men", "Jordan"],
    img: "https://sneakerlinks.com/wp-content/uploads/2019/10/air-jordan-10-city-series-court-green-release-date-600x448.jpg",
  },
  {
    name: "SpongeBob x Nike Kyrie 5 “Pineapple House”",
    price: 160,
    category: ["Men", "Nike"],
    img: "https://sneakerlinks.com/wp-content/uploads/2019/10/SpongeBob-Nike-Kyrie-5-Pineapple-House-CJ6951-800-Release-Date-e1570761513130-600x394.jpg",
  },
  {
    name: "Nora Vasconcellos x adidas 3MC “Light Purple”",
    price: 65,
    category: ["Women", "Adidas"],
    img: "https://sneakerlinks.com/wp-content/uploads/2019/10/EF2398_06_standard-1-1-600x399.jpg",
  },
  {
    name: "Olivia Kim x Nike Air Footscape “No Cover”",
    price: 150,
    category: ["Women", "Nike"],
    img: "https://sneakerlinks.com/wp-content/uploads/2019/11/CK3321_100_A_PREM-600x458.jpg",
  },
  {
    name: "adidas Yeezy Boost 350 V2 “Cinder Reflective”",
    price: 220,
    category: ["Men", "Yeezy"],
    img: "https://sneakerlinks.com/wp-content/uploads/2020/03/cinder-reflective2-600x375.jpg",
  },
  {
    name: "adidas Yeezy Boost 380 “Hylte Glow”",
    price: 250,
    category: ["Women", "Yeezy"],
    img: "https://sneakerlinks.com/wp-content/uploads/2020/12/yeezy380-copy-600x383.png",
  },
];

createShoes();
categoriesScaleAnimation();
categoriesEventSetup();

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

function createShoes(filter) {
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
  });
}
