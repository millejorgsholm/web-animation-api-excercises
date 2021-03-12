"use strict";

// const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom

const zoom = {
  duration: 500,
  iterations: 1,
  fill: "forwards",
  composite: "add",
};

const falling = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease",
};

const move = {
  duration: 2000,
  iterations: Infinity,
};

const zoom_kf = [{ transform: "scale(1)" }, { transform: "scale(0)" }];

const falling_kf = [
  { transform: "translateY(-20vw)" },

  { transform: "translateY(42vw)" },
];

const move_kf = [
  { transform: "translate(42vw,0)" },
  { transform: "translate(85vw,20vw)" },
  { transform: "translate(42vw,41vw)" },
  { transform: "translate(0,20vw)" },
  { transform: "translate(42vw,0)" },
];

//Animating the ball using the  keyframes and properties
const ball = document.querySelector("#ball");

// register click
document.querySelector("#ball").addEventListener("click", ballClicked);

// start falling animation
const fall_anim = ball.animate(falling_kf, falling);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  fall_anim.pause();

  //start zoom-animation
  const zoom_anim = ball.animate(zoom_kf, zoom);

  //start move-animation
  const move_anim = ball.animate(move_kf, move);

  //repeat it
  zoom_anim.onfinish = () => {
    zoom_anim.cancel();
    fall_anim.currentTime = 0;
    fall_anim.play();
  };
}
