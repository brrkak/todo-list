"use strict";

const backGround = document.querySelector(`.container`);

const html = `<div class="background"><img src="./backimg/back (${Math.floor(
  Math.random() * 11 + 1
)}).jpg" /></div>`;

backGround.insertAdjacentHTML(`beforeend`, html);
