var fs   = require('fs');

var path = require('path');
const images_dir = "public/images";
const imgList = [
    "logo-black.png", 
    "logo-white.png",

// slides
    "slides/02-dark.jpg",
    "slides/03-dark.jpg",
    "slides/04-dark.jpg",
// portfolio
    "portfolio/01.jpg",
    "portfolio/02.jpg",
    "portfolio/03.jpg",
    "portfolio/04.jpg",
    "portfolio/05.jpg",
    "portfolio/06.jpg",
    "portfolio/07.jpg",
    "portfolio/08.jpg",
    "portfolio/09.jpg",
    "portfolio/10.jpg",


];
const imageJson = "images.json";

// console.log(data.toString('base64'));

var jsonData = {};

imgList.forEach(element => {
    const fileName = path.join(images_dir, element);
    // console.log(fileName);
    const data = fs.readFileSync(fileName).toString('base64');
    // console.log(data);

    
    jsonData[element] = data;
});

// console.log(jsonData);

var json = JSON.stringify(jsonData);
fs.writeFile(path.join(images_dir,imageJson), json, 'utf8', function(){

});