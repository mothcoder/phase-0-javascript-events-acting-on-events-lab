const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

function moveDodgerRight()  {const leftNumbers = dodger.style.left.replace("px", "180");
const left = parseInt(leftNumbers, 10);

if (left > 0) {
  dodger.style.left = `${left + 1}px`;
}
};

function moveDodgerLeft(){  const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);

if (left > 0) {
  dodger.style.left = `${left - 1}px`;

}
};

