const Scene = require('Scene');
const Diagnostics = require('Diagnostics');

const Patches = require('Patches');
var counterNumber = Scene.root.find('number');
var scoreNumber = Patches.getScalarValue('score');
var reset = Patches.getBooleanValue('reset').lastValue;
counterNumber.text = scoreNumber.toString();

Diagnostics.log(reset.toString())

Scene.root.find('gameOver').visible = false;
 
Diagnostics.log(reset); 
