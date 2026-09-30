
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    
    if (current == 'dark') {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "rgb(251, 250, 250)";
        logo.src = "byui-logo-white.png"
    } else {
        document.body.style.backgroundColor = "#fdfdfd";
        document.body.style.color = "#000";
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp"
    }
}
