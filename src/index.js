const MovingObject = require("./moving_object/moving_object");
const Util = require("./utilities/util");

window.MovingObject = MovingObject;
window.Util = Util;

window.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
})

console.log('Webpack is working!');