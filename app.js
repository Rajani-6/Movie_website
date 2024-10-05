console.log("Into JavaScript");

const mode = document.querySelector(".mode");
const hideCicrle = document.querySelector(".hideCicrle");
const navBar = document.querySelector(".navBar");
const sideNavBar = document.querySelector(".sideNavBar");
const container = document.querySelector(".container");
const mlTitle = document.querySelector(".movies-list-title");
const fMovie = document.querySelector(".feature-movie");

const allItem = document.querySelectorAll(
  ".mode,.hideCicrle,.navBar,.sideNavBar,.container,.movies-list-title"
);

let modeController = false;
const modeToggle = false;
console.log("mControl start : " + modeController);
mode.addEventListener("click", () => {
  allItem.forEach((item) => {
    item.classList.toggle("active");
    item.style.transition = "all 1s ease-in-out";
  });
});

//Movies list scrolling

const mlItems = document.querySelectorAll(".movies-list-items");
const sArrow = document.querySelectorAll(".side-arrow");
const mlItem = document.querySelectorAll(".movie-list-item");

sArrow.forEach((arrow, index) => {
  const itemNum = mlItems[index].querySelectorAll(
    ".movies-list-item-img"
  ).length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratios = Math.floor(window.innerWidth / 300);
    clickCounter++;
    console.log("Arrow index : " + index);
    console.log("len : " + mlItems[index].computedStyleMap().get("transform"));
    if (itemNum - (4 + clickCounter) + (4 - ratios) >= -1) {
      // 6 - (4+0) + (4-4) =2
      mlItems[index].style.transform = `translateX(${
        mlItems[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      mlItems[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
