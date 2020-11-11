const Scene = require('Scene');
const Diagnostics = require('Diagnostics');

const Patches = require('Patches');
const directionalLight = Scene.root.find('directionalLight0');
var counterNumber = Scene.root.find('number');
var scoreNumber = Patches.getScalarValue('score');

const directionalLightIntensity = directionalLight.intensity;
counterNumber.text = scoreNumber.toString();