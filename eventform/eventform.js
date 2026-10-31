
const form = document.querySelector("#eventForm");

const type = document.querySelector("#type");
const additionalInfo = document.querySelector("#additionalInfo");
const infoLabel = document.querySelector("#infoLabel");
const info = document.querySelector("#info");

const date = document.querySelector("#date");
const errors = document.querySelector("#errors");
const ticket = document.querySelector("#ticket");


const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const minDate = tomorrow.toISOString().split("T")[0];
date.min = minDate;



type.addEventListener("change", function () {

    additionalInfo.classList.remove("hide");

    if (type.value === "student") {
        infoLabel.textContent = "Student I#";
        info.placeholder = "Enter 9 digit I-number";
        info.required = true;

    } else if (type.value === "guest") {
        infoLabel.textContent = "Access Code";
        info.placeholder = "Enter event code";
        info.required = true;

    } else {
        additionalInfo.classList.add("hide");
        info.required = false;
    }

    info.value = "";
});



form.addEventListener("submit", function (event) {

    event.preventDefault();

    errors.innerHTML = "";
    ticket.innerHTML = "";

    let errorMessages = [];

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;

    
    if (!date.value || date.value <= minDate) {
        errorMessages.push("Please choose a future event date.");
    }

    
    if (type.value === "") {
        errorMessages.push("Please select a ticket type.");
    }

    
    if (type.value === "student") {

        const studentPattern = /^\d{9}$/;

        if (!studentPattern.test(info.value)) {
            errorMessages.push("Student I# must contain exactly 9 digits.");
        }
    }

    
    if (type.value === "guest") {

        if (info.value !== "EVENT131") {
            errorMessages.push("Incorrect access code.");
        }
    }

    
    if (errorMessages.length > 0) {

        errors.innerHTML = errorMessages.join("<br>");

    } else {

        const heading = document.createElement("h2");
        heading.textContent = "Ticket Created Successfully!";

        const details = document.createElement("p");
        details.textContent =
            "Name: " + firstName + " " + lastName +
            " | Email: " + email +
            " | Date: " + date.value +
            " | Type: " + type.value;

        ticket.appendChild(heading);
        ticket.appendChild(details);
    }
});