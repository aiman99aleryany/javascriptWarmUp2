// HELPERS FUNCTIONS
const qs = (s) => document.querySelector(s);

// localStorage

const getStorage = (key) => JSON.parse(localStorage.getItem(key));
const setStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const initStorage = () => {
  const INIT_MODEL = [];
  !getStorage("model") ? setStorage("model", INIT_MODEL) : null;
};

// MODEL

initStorage();

let booksArray = getStorage("model");

const updateModel = (oldBooksArray, newBook) => [...oldBooksArray, newBook];

// DOM
const form = qs("#form");
const formInput = qs(".form__input");
const formButton = qs(".form__button");
const result = qs(".result");

// EVENTS

formButton.addEventListener("click", (evt) => {
  const newBook = formInput.value;
  console.log(formInput.value);
  const newBooksArray = updateModel(booksArray, newBook);
  booksArray = newBooksArray;
  setStorage("model", booksArray);
  render();
  formInput.value = "";
});

// render page
const render = () => {
  result.innerHTML = `
    <div> ${booksArray} </div>
    `;
};

const run = () => {
  render();
};

run();
