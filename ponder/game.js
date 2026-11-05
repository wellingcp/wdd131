// Add event listener to the button
document.querySelector("#rollButton").addEventListener("click", event => {
    // animate the die

    const images = document.querySelectorAll("#gameboard img");
    images.forEach(image => {
        // switch the src to the die_rolling.gif animation
        if(isDieUnlocked(image))
        image.src = "assets/die_rolling.gif";
    });
    // change the value each die lands randomly
        //changing the src image

    setTimeout(() => {
        // run what is in here after x miliseconds
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                const randomNumber = Math.floor(Math.random() * 6) + 1;

                image.src = `assets/white_dice_${randomNumber}.gif`;
            // set the images to a random die
            // math.random returns a number 0 - 1
            }
        });
    }, 1000);
});

function isDieUnlocked(dieImage) {
    //is the corrosponding checkbox checked? Return false
    const checkboxes = document.querySelectorAll("#gameboard input");
    //return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}