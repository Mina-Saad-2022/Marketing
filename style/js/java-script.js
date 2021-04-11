"use strict";
// ! background Nav Bar In Night

function night_mood() {
  var background_nav_bar = document.getElementById("mood");
  background_nav_bar.className = "night";

  var body_night = document.querySelector(".change_to_night");
  body_night.classList.add("night_other");

  var background_slider = document.querySelector(".b_gray");
  background_slider.classList.add("night_other");

  var color_in_light = document.querySelectorAll(".color_light"),
    z;
  for (z = 0; z < color_in_light.length; z++) {
    color_in_light[z].classList.add("night_color_white");
  }

  var background_card = document.querySelectorAll(".card_body"),
    s;
  for (s = 0; s < background_card.length; s++) {
    background_card[s].classList.add("background_card_night");
  }
  var color_line = document.getElementById("hr");
  color_line.className = "line";

  let blue_color = document.querySelectorAll(".color_blue");
  blue_color.forEach((m) => m.classList.add("night_6"));

  let link_color = document.querySelectorAll(".dropdown_new");
  link_color.forEach((s) => s.classList.add("night_3"));

  let footer_color = document.querySelectorAll(".footer");
  footer_color.forEach((m) => m.classList.add("night_5"));

  var y = document.getElementsByClassName("item");
  var i;
  for (i = 0; i < y.length; i++) {
    y[i].classList.add("night_4");
  }
}

