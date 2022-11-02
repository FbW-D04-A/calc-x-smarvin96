// Your code goes here!
import { modulo, percentage, percentageOf, difference } from "/modules/percentage.js";
import { calculateAspectRatio } from "/modules/aspect-ratio.js"



const moduloForm = document.getElementById("modulo-form");
moduloForm.addEventListener("change", (e) => {
    const result = document.getElementById("modulo_result");
    const input = [document.getElementById("modulo_1"), document.getElementById("modulo_2")]
    switch (e.target.id) {
        case "modulo_1":
        case "modulo_2":
            result.value = modulo(Number(input[0].value), Number(input[1].value));
    }
});



// addEventListener change, 

const percentageForm = document.getElementById("percentage-form");
percentageForm.addEventListener("change", (e) => {
    const result = document.getElementById("percentage_result");
    const input = [document.getElementById("percentage_1"), document.getElementById("percentage_2")]
    switch (e.target.id) {
        case "percentage_1":
        case "percentage_2":
            result.value = percentage(Number(input[0].value), Number(input[1].value));
    }
});