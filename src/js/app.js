// JS Goes here - ES6 supported
var tinify = require("tinify");
tinify.key = "ixsCwR9siKeL1nyGj8iH427odcoExWFR";
var source = tinify.fromFile("site/static/img");
source.toFile("img");