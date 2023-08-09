"use strict";

// Elements
const welcome = document.querySelector(`.welcome__form`);
const welcomeInput = document.querySelector(`.welcome__form--input`);
const afterLogin = document.querySelector(`.afterLogin__form`);
const greeting = document.getElementById(`greeting`);
const hello = document.querySelector(`.hello`);
const todoForm = document.getElementById(`todo-form`);
const listContainer = document.querySelector(`.list-container`);
// 창 전환
function saveLogin() {
  const saveUsername = localStorage.getItem("username");
  if (saveUsername !== null) {
    welcome.classList.add("hidden");
    afterLogin.classList.remove("hidden");
    todoForm.classList.remove(`hidden`);
    listContainer.classList.remove(`hidden`);
    hello.textContent = `hello, ` + saveUsername;
    document.title = `${saveUsername}'s todoList`;
  }
}

function loginSubmitHandler(e) {
  e.preventDefault();
  const userName = welcomeInput.value;
  localStorage.setItem(`username`, userName);
  saveLogin();
}

welcome.addEventListener(`submit`, loginSubmitHandler);
saveLogin();
