let zoomed = false;

// UIkit.util.on("#modal-thank-letter", "click", function (e) {
//   e.preventDefault();
//   e.target.blur();
//   zoomed = false;
//   console.log(e.target.src);
//   UIkit.modal.dialog(
//     `<div class="modal-thank-letter">
//     <div class="uk-flex-top ">
//         <div class="">
//         <img id="modal-img" src="` +
//       e.target.src +
//       `">
//         </div>
//     </div>
// </div>`
//   );
// });

// UIkit.util.on("#modal-thank-letter", "click", function (e) {
//   e.preventDefault();
//   e.target.blur();
//   zoomed = false;
//   console.log(e.target.src);
//   UIkit.modal.dialog(
//     `<div class="modal-thank-letter">
//     <div class="uk-flex-top ">
//         <div class="">
//         <img id="modal-img" src="` +
//       e.target.src +
//       `">
//         </div>
//     </div>
//     <button class="zoom" id="zoom" onclick="zoom()"> <img src="./img/Zoom.png" alt=""></button>
// </div>`
//   );
// });
// function zoom() {
//   const img = document.getElementById("modal-img");
//   const imgSrc = img.src;
//   let newSrc = "";
//   if (!zoomed) {
//     newSrc = imgSrc.split(".jpg").join("-big.jpg");
//     zoomed = true;
//   } else {
//     newSrc = imgSrc.split("-big.").join(".");
//     zoomed = false;
//   }
//   img.setAttribute("src", newSrc);
// }

// UIkit.modal.beforehide("#modal-thank-letter", function (e) {
//   console.log(e);
// });
// если нужно выводить попап с данными от таргета клика, можно сделать таким образом.
// но тут должна быть галерея, тоесть одного url на картинку мало.
// выше сделано так для писем, там выводится только одна картинка и увеличитель.
UIkit.util.on("#modal-thank-letter", "click", function (e) {
  e.preventDefault();
  e.target.blur();
  UIkit.modal.dialog(
    `<div class="modal-thank-letter">
      <div class="uk-flex-top ">
          <div class="">
          <img src="` +
      e.target.src +
      `">
          </div>
      </div>
  </div>`
  );
});
UIkit.util.on("#modal-cases", "click", function (e) {
  e.preventDefault();
  e.target.blur();
  UIkit.modal.dialog(
    `<div class="modal-cases">
      <div class="uk-flex-top ">
          <div class="">
          <img class="cases-img" src="` +
      e.target.src +
      `">
          </div>
      </div>
  </div>`
  );
});

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let scroller = document.getElementById("scroller");
  if (scrollTop <= 1080) {
    scroller.classList.add("hide");
  } else {
    scroller.classList.remove("hide");
  }
});

new WOW().init();
