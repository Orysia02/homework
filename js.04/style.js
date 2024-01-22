{
    let oddText = prompt("Введіть число:");
let userNumber = parseFloat(oddText);
if (userNumber % 2 === 0) {
    alert("Введенне число є парним");
}
else{
    alert("Введенне число не є парним");
}
}


{
    let lexics = prompt("Введіть речення:");
    let badWords = lexics.indexOf("паскуда")
    alert(badWords);
}



{
    let question = confirm("Ви сьогодні працювалли багато?");
    console.log(question ? "Так" : "Ні");
    
}


{
    let question = confirm("Ви сьогодні працювалли багато?");
    if ("Так") {
        alert("Ви жінка");
    }
    else{
        alert("Ви чоловік");
    }
    console.log(question ? "Жінка" : "Чоловік");
    
}




{
    const ternary = confirm('Ваша стать?') ? "Ви чоловік" : "Ви жінка"
    alert(ternary);
}


{
    let age = prompt("Введіть свій вік") || alert("ERROR")
}


{
    if (prompt("Введіть свій вік")){
        alert("Круто")
    }
    else{
        alert("error")
    }
}

{
    let name01 = confirm(prompt("введіть прізвище" , "Іванов")); 
        name01 = name01 || "Іванов";
    let name02 = confirm(prompt("введіть ім'я", "Іван"));
        name02 = name02 || "Іван";
    let name03 = confirm(prompt("введіть по батькові", "Іванович"));
        name03 = name03 || "Іванович";
    alert(name01, name02, name03);
    
}


{
    let name01 = prompt("введіть прізвище"); 
        if (!name01){
            name01 = "Іванов";
        }
    let name02 = prompt("введіть ім'я", "Іван");
        if (!name02){
            name02 = "Іван";
        }
    let name03 = prompt("введіть по батькові", "Іванович");
        if (!name03){
            name03 = "Іван";
        }
    alert(name01, name02, name03);
    
}


{
    let loginAdmin = prompt("Введіть логін:");
    if (loginAdmin === "Admin"){
        let passwordAdmin = prompt("Введіть пароль:");
        if(passwordAdmin === "qwerty"){
            alert("Логін та пароль ВІРНІ!")
        }
        else{
            alert("Помилка! Не правильний пароль")
        }
    }
    else{
        alert("Помилка! Не правильний логін")
    }
}


{
    let enteredCurrency = prompt("Введіть валюту:(USD або EUR)").toUpperCase();
let isBuying = confirm("Ви бажаєте купити?");

let rate;

if (enteredCurrency === "USD") {
    rate = isBuying ? 27.5 : 26.8;
} else if (enteredCurrency === "EUR") {
    rate = isBuying ? 32.2 : 31.5;
} else {
    rate = 1;
}

let amount = parseFloat(prompt("Введіть суму на обмін:"));

if (!isNaN(amount)) {
    let result = isBuying ? amount * rate : amount / rate;
    alert(`Результат: ${result.toFixed(2)} ${enteredCurrency}`);
} else {
    alert("Некоректно введена сума.");
}
}



let userEnter = prompt("камінь, ножиці чи папір").toLowerCase();

if (userEnter !== "камінь" && userEnter !== "ножиці" && userEnter !== "папір") {
    alert("Ви ввели некоректний вибір. Спробуйте ще раз.");
} else {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        computerChoice = "камінь";
    } else if (computerChoice < 0.67) {
        computerChoice = "ножиці";
    } else {
        computerChoice = "папір";
    }

    alert(`Комп'ютер вибрав: ${computerChoice}`);

    if (userEnter === computerChoice) {
        alert("Нічия!");
    } else if (
        (userEnter === "камінь" && computerChoice === "ножиці") ||
        (userEnter === "ножиці" && computerChoice === "папір") ||
        (userEnter === "папір" && computerChoice === "камінь")
    ) {
        alert("Ви перемогли!");
    } else {
        alert("Комп'ютер переміг!");
    }
}