let rating;
let submit = document.querySelector("button");

submit.disabled = true;

function getValue(element) {
  element.style.background = "hsl(217,12%,63%)";
  element.style.color = "white";
  submit.disabled = false;
  rating = Number(element.value);

  return rating;
}

submit.addEventListener("click", thanksPage);

let img;
let h1;
let p;
let btns;
let result;

let wrapper = document.querySelector(".wrapper");
let text = document.querySelector(".text");

let divImg = document.querySelector(".img");

function thanksPage() {
  img = document.querySelector("img");
  img.setAttribute("src", "images/illustration-thank-you.svg");

  result = document.querySelector("#result");
  result.textContent = `You selected ${rating} out of 5`;

  h1 = document.querySelector("h1");
  h1.textContent = "Thank you!";

  p = document.querySelector(".description");
  p.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  btns = document.querySelector(".avaliation");

  btns.parentNode.removeChild(btns);
  submit.parentNode.removeChild(submit);

  wrapper.classList.toggle("thanks");
  text.classList.toggle("thanks-Text");
  divImg.classList.toggle("img-thanks");
  result.classList.toggle("result");
}
