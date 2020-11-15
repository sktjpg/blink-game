const Scene = require('Scene');
const Diagnostics = require('Diagnostics');


const Patches = require('Patches');
const directionalLight = Scene.root.find('directionalLight0');
var counterNumber = Scene.root.find('number');
var scoreNumber = Patches.getScalarValue('score');

const directionalLightIntensity = directionalLight.intensity;
counterNumber.text = scoreNumber.toString();


Diagnostics.log(Scene.root.find('gameOver').bounds);
var reset = Patches.getBooleanValue('reset');

Scene.root.find('gameOver').visible = false;


Diagnostics.log(Patches.getBooleanValue("reset").lastValue);

if(Patches.getBooleanValue("reset").lastValue) { 
    counterNumber.text = "0";
    counterNumber = 0;
    Patches.setScalarValue("score", 0);
}