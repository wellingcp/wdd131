
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "snortleblat.webp",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert("Your character has died!");
        }
    },

    levelUp() {
        this.level += 1;
    }
};

function displayCharacter() {
    document.querySelector("#name").textContent = character.name;
    document.querySelector("#class").textContent = character.class;
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
    document.querySelector("#image").src = character.image;
}


document.querySelector("#attack").addEventListener("click", function () {
    if (character.health > 0) {
        character.attacked();
        displayCharacter();
    }
});


document.querySelector("#levelUp").addEventListener("click", function () {
    if (character.health > 0) {
        character.levelUp();
        displayCharacter();
    }
});


displayCharacter();
