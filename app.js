const liRef = document.querySelectorAll("li");
const liCloneRef = document.querySelector("li");
const btnRef = document.querySelectorAll("button");
const crossRef = document.querySelectorAll(".cross");
const inputRef = document.querySelector("input");
const ulRef = document.querySelector("ul");
const formRef = document.querySelector("form");

const filtersRef = document.querySelector(".filter-options");
const footerCounter = document.querySelectorAll(".pd");
const liFooter = document.querySelector(".li-footer");
const spanCounter = document.querySelector(".counter");

const colorIcon = document.querySelector(".svg-icon");
const containerFooterRef = document.querySelector(".container-footer");

// CHANGE OF THEME-COLORS (WHITE/DARK)

activeTasksCounter();

colorIcon.addEventListener("click", () => {
  colorIcon.classList.toggle("moon");
  colorIcon.closest("body").classList.toggle("white-bdy");
  colorIcon
    .closest(".list-container")
    .children[2].classList.toggle("white-bcg");
  colorIcon
    .closest(".list-container")
    .children[1].classList.toggle("white-bcg");
  colorIcon
    .closest(".list-container")
    .children[3].classList.toggle("white-bcg");

  const aliRef = document.querySelectorAll("li");
  aliRef.forEach((element) => {
    element.classList.toggle("white-bcg");
  });
});

//FILTER TASKS (FOOTER OPTION)

filtersRef.children[0].addEventListener("click", () => {
  filtersRef.children[0].classList.toggle("filter-active");
  const completedElements = document.querySelectorAll(".complete");
  completedElements.forEach((element) => {
    element.classList.toggle("disp-none");
  });
});

filtersRef.children[1].addEventListener("click", () => {
  filtersRef.children[1].classList.toggle("filter-active");
  const activeElements = document.querySelectorAll("li:not(.complete)");
  activeElements.forEach((element) => {
    element.classList.toggle("disp-none");
  });
});

//REMOVE ALL COMPLETED TASKS

footerCounter[1].addEventListener("click", () => {
  const elementsRemoval = document.querySelectorAll(".complete");

  elementsRemoval.forEach((element) => {
    element.remove();
  });
  activeTasksCounter();
});

liFooter.children[1].addEventListener("click", () => {
  const elementsRemoval = document.querySelectorAll(".complete");

  elementsRemoval.forEach((element) => {
    element.remove();
  });
  activeTasksCounter();
});

//COUNT ACTIVE TASKS

function activeTasksCounter() {
  const actElm = document.querySelectorAll("li:not(.complete)");
  const counter = actElm.length - 1;
  liFooter.children[0].innerText = `${counter} item(s) left`;
  containerFooterRef.children[0].innerText = `${counter} item(s) left`;
}

//CHANGE OF THE STYLE OF BUTTONS WHEN CLICKED

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
    element.closest("li").classList.toggle("complete");
    activeTasksCounter();
  });
});

// CREATE NEW LI WITH TASK

inputRef.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && inputRef.value !== "") {
    const clone = document.createElement("li");
    ulRef.insertBefore(clone, ulRef.children[0]);
    const text = inputRef.value;
    clone.innerHTML = `<div class="li-txt-box">
    <button class="btn"></button><span>${text}</span>
  </div>
  <div class="cross"></div>`;
    inputRef.value = "";
    activeTasksCounter();

    //adding eventlisteners for elements added by user

    clone.lastChild.addEventListener("click", () => {
      clone.remove();
      activeTasksCounter();
    });

    clone.firstChild.children[0].addEventListener("click", (event) => {
      event.target.classList.toggle("active");
      event.target.closest("li").classList.toggle("complete");
      activeTasksCounter();
    });

    clone.addEventListener("mouseenter", () => {
      clone.children[1].classList.toggle("cross-visible");
    });

    clone.addEventListener("mouseleave", () => {
      clone.children[1].classList.toggle("cross-visible");
    });
  }
});

// DELETE BUTTON (CROSS) POP-UP

liRef.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.children[1].classList.toggle("cross-visible");
  });
  element.addEventListener("mouseleave", () => {
    element.children[1].classList.toggle("cross-visible");
  });
});

//REMOVE PARTICULAR ELEMENT

crossRef.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.remove();
    activeTasksCounter();
  });
});
