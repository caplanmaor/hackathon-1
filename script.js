//shoes databse
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
    name: "adidas Yeezy Basketball “Quantum”",
    price: 250,
    category: ["Women", "Yeezy"],
    img: "https://sneakerlinks.com/wp-content/uploads/2020/02/118321-600x542.jpg",
  },
];

catalog = document.getElementById("catalog");

function createShoes() {
  for (let shoe of shoes) {
    //create shoe card
    let shoeCard = document.createElement("div");
    shoeCard.classList.add("shoecard");
    //create shoe name
    let shoeName = document.createElement("p");
    shoeName.innerText = shoe.name;
    shoeCard.setAttribute("data-tilt", "");
    shoeCard.setAttribute("data-tilt-reverse", true);
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
}

createShoes();
