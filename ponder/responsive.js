let menuButton = document.querySelector(" .menu-btn");

// add event listener to menubutton
// anonymous or nameless function 
menuButton.addEventListener("click", function (e) {
    // grab a reference to the nav
    let nav = document.querySelector("nav");
    console.log(nav.style);
    
    // toggle menu styles when clicked
    
    //toggle menu styles when clicked
    // ternary operator
    
    nav.style.display = nav.style.display === "" ? "flex" : "";
});
