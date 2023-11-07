const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/MPJO7089.JPG",
      },
      {
        code: "darkblue",
        img: "./img/RACP3791.JPG",
      },
    ],
  },

  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/MPJO7089.JPG",
      },
      {
        code: "green",
        img: "/img/CHRA5775.JPG",
      },
    ],
  },

  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/img/CHRA5775.JPG",
      },
      {
        code: "green",
        img: "./img/RACP3791.JPG",
      },
    ],
  },

  {
    id: 4,
    title: "Carter",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/img/CHRA5775.JPG",
      },
      {
        code: "lightgray",
        img: "./img/MPJO7089.JPG",
      },
    ],
  },

  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/RACP3791.JPG",
      },
      {
        code: "black",
        img: "/img/MPJO7089.JPG",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = "$" + choosenProduct.price
    currentProductImg.src = choosenProduct.colors[0].img

    //assigning new colors
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
    })
  });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  });
});


currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach(size=>{
    size.style.backgroundColor= "white"
    size.style.color= "black" 
    });
    size.style.backgroundColor= "black"
    size.style.color= "white"
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})