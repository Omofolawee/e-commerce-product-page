// function select(newSrc) {
//   const bigImage = document.querySelector(".big-image");
//   bigImage.src = newSrc;
//}
const smallImages = document.querySelectorAll(".sides");
smallImages.forEach(function (image) {
  image.addEventListener("click", function () {
    const imageSrc = image.src;
    document.querySelector(".big-image").src = imageSrc;
  });
});

let amount = 0;

const amountDisplay = document.querySelector(".amount");

function increase() {
  amount = amount + 1;
  amountDisplay.textContent = amount;
}

function decrease() {
  if (amount > 0) {
    amount = amount - 1;
    amountDisplay.textContent = amount;
  } else {
    alert("can't go below zero");
  }
}
