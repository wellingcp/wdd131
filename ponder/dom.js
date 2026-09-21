// How to manipulate the DOM with JavaScript

// Grab our H1 from the page
let heading = document.querySelector("h1");

console.log(heading);

// Change the text of the element
heading.textContent = "Changed the heading to something else!";

// Change the text color
heading.style.color = "#0000FF";

//Pick your own style and change it
heading.style.backgroundColor = "#7992ba";

heading.style.fontFamily = "Arial";

heading.style.fontStyle = "Italic";

heading.style.border = "1px solid black";

// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
document.querySelector("#topics").style.color = "red";

// select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "https://brightspotcdn.byui.edu/dims4/default/da76ca4/2147483647/strip/true/crop/604x314+0+0/resize/1600x832!/format/webp/quality/90/?url=http%3A%2F%2Fbyu-idaho-brightspot-production-us-east-2.s3.us-east-2.amazonaws.com%2F6c%2Fa1%2Fb3306ea14ed5aef8b82a86ee39d0%2Fbyui-offical-logo-blue-01.png");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                
