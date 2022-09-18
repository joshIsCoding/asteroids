const MovingObject = require("./moving_object/moving_object");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
})

console.log('Webpack is working!');