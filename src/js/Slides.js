import Arrow from "../assets/img/svg/arrow-curve.svg";
import Image__Slide from "../assets/img/webp/review-img.webp";
window.onload = () => {
  let sliderImagesBox = document.querySelectorAll(".SliderCard");
  sliderImagesBox.forEach((el) => {
    let imageNodes = el.querySelectorAll(".card:not(.hide)");
    let arrIndexes = []; // Index array
    (() => {
      // The loop that added values to the arrIndexes array for the first time
      let start = 0;
      while (imageNodes.length > start) {
        arrIndexes.push(start++);
      }
    })();

    let setIndex = (arr) => {
      for (let i = 0; i < imageNodes.length; i++) {
        imageNodes[i].dataset.slide = arr[i]; // Set indexes
      }
    };
    el.addEventListener("click", () => {
      arrIndexes.unshift(arrIndexes.pop());
      setIndex(arrIndexes);
    });
    setIndex(arrIndexes); // The first indexes addition
  });
};

// let c = multiply(97, 37);
// let d= plus(97, 37);
//  console.log(c);

// function multiply(param1 , param2){
//     let a =param1 * param2;
//     return a;

// }
//  function plus(param1, param2) {
//         let p = param1 + param2;
//         return p;
//     }

// // var a ="hello"
// // console.log(a)
//  console.log(Name(a))
// var a = "global"
// function Name(){
//     var a ="fresh"
//     return a ;
// }
// console.log(a)
//   console.log(d);
export const SLider_Map = [
  {
    image: Image__Slide,
    text1: "Image__Slide",
    tex2t: "Image__Slide",
  },
];
