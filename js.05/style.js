{
    let answers = [
        confirm("Вам подобається JavaScript?"),
        confirm("Ви використовуєте JavaScript у своїх проектах?"),
        confirm("Чи знайомі ви зі синтаксисом ES6?"),
        confirm("Ви вважаєте, що програмування це цікаво?"),
    ];
    
    console.log("Відповіді користувача:");
    console.log(answers);
    }


    {
        let questions = [
            "Вам подобається JavaScript?",
            "Ви використовуєте JavaScript у своїх проектах?",
            "Чи знайомі ви зі синтаксисом ES6?",
            "Ви вважаєте, що програмування це цікаво?",
        ];
        
        const arr = [];
        for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i]);
        arr[i] = userAnswer;
    }
        console.log("Відповіді користувача:");
        console.log(arr);
    }

    {
        let userEnter = prompt(["Введіть три різні фрукти"]);
        alert(userEnter["length"]);
    }

    {
        const array = [];
        const userIndex = prompt("Введіть індекс у масив:");
        const userIndexValue = prompt("Введіть значення індекса:")
        array[userInputIndex] = userIndexValue;
        console.log(array);
    }


    {
        const arr = [];
        for(let i = 1; i <= 5; i++){
            const row = [];
        for(let j = 1; j <= 5; j++){
            row.push(i*j);
        }
            arr.push(row);
        }
        console.log(arr);
        
    }


    {
        const arr = [];
        for(let i = 1; i <= 5; i++){
            const row = [];
        for(let j = 1; j <= 5; j++){
            row.join(i*j);
        }
            arr.join(row);
        }
        const nulle = arr.slice(0)
        console.log(nulle)
        
    }

    {
    const sentence = prompt("Введіть рядок із кількох слів:");
    const word = prompt("Яке слово ви шукаєте?");

    const search = sentence.indexOf(word);

    if (search !== -1) {
        const position = search + 1;
        alert(`Ви шукали "${word}", знаходиться на позиції ${position}`);
    } else {
        alert("Такого слова не знайдено");
    }
    }


    {
        const originalMassif = [];

    const words = prompt("Введіть 5 слів:");
    const wordsArray = words.split(' ');

    originalMassif.push(...wordsArray);

    const reverseMassif = [];

    while (originalMassif.length > 0) {
        const poppedElement = originalMassif.pop();
        reverseMassif.push(poppedElement);
    }

    alert("Оригінальний масив: " + originalMassif.join(', '));
    alert("Зворотній масив: " + reverseMassif.join(', '));
    }




    
    {   const originalMassif = [];

        const words = prompt("Введіть 5 слів:");
        const wordsArray = words.split(' ');

        originalMassif.unshift(...wordsArray);

        const reverseMassif = [];

        while (originalMassif.length > 0) {
            const poppedElement = originalMassif.shift();
            reverseMassif.unshift(poppedElement);
        }

        alert("Оригінальний масив: " + originalMassif.join(', '));
        alert("Зворотній масив: " + reverseMassif.join(', '));
    }


    {
        const arr2 = arr.slice();
    }


    {
        const arr2 = [...arr]
    }


    {
        const arr = [6, 5 ,7 ,8];
        const arr2 = arr;
        arr === arr2
    }


    {
                const arr = [];
            
            for (let i = 1; i <= 5; i++) {
                const row = [];
                for (let j = 1; j <= 5; j++) {
                    row.push(i * j);
                }
                arr.push(row);
            }
            
            const arr2 = [ ...arr.flat(),];
            
            console.log("Оригінальний масив:", arr);
            console.log("Новий масив arr2:", arr2);
    }


    {
        const enterUser = prompt("Введіть щось...");
        const [a, , , , b, , , , c] = enterUser;
        console.log(a)
        console.log(b)
        console.log(c)
    }


    {
        const userEnter = prompt("Введіть щось...");
        let [, a, , b, c] = userEnter;

        if (a === undefined && b === undefined && c === undefined) {
            [, a = '!', , b = '!', c = '!'];
            alert([, a, , b, c]);
        } else {
            alert([, a, , b, c]);
        }
    }



    {
        const arr = [];
        for(let i = 1; i <= 5; i++){
            const row = [];
        for(let j = 1; j <= 5; j++){
            row.push(i*j);
        }
            arr.push(row);
        }
        const [, [,, ...a], [, ...b], ...c] = arr;
        const matrix = []
        matrix.push(a)
        matrix.push(b)

    for(let i = 0; i < c; i++){
        const filterString = c[i].filter(item => item !== 0)
        matrix.push(filterString)
    }
        console.log(arr)
    console.log(matrix)
    }


    {
        const names = ["John", "Paul", "George", "Ringo"];
        const [a,b,c,d] = names;
        for (const name of names){
            alert("Hello " + a)
            alert("Hello " + b)
            alert("Hello " + c)
            alert("Hello " + d)
        }
    }

    {
        const currencies = ["USD", "EUR", "GBP", "UAH"]
        let   str = "<select>"
        for (const currency of currencies){
        str += `<option value="${currency}">${currency}</option>`;
        }
        str+= "</select>"
        document.write(str) //document.write відобразить ваш HTML на сторінці
    }


    {
        const names = ["John", "Paul", "George", "Ringo"]
        let   str = "<table><tr>"
        for (const name of names){
            str += `<tr> ${name }</tr>`
        }
        str+= "</tr></table>"
        document.write(str) //document.write отобразит ваш HTML на странице
    }

    {
            const names = ["John", "Paul", "George", "Ringo"];
            let str = "<table>";

            for (const name of names) {
                str += `<tr><td>${name}</td></tr>`;
            }

            str += "</table>";
            document.write(str);
    }


    {
        const currencies = ["USD", "EUR", "GBP", "UAH"];
            let str = "<table>";

            for (let i = 0; i < currencies.length; i++) {
                str += "<tr>";
                for (const letter of currencies[i]) {
                    str += `<td>${letter}</td>`;
                }
                str += "</tr>";
            }

            str += "</table>";
            document.write(str);
    }

{
        document.write("<table>");

    for (let i = 0; i <= 5; i++) {
        document.write("<tr>");
        for (let j = 0; j <= 5; j++) {
            if (i === 0 || j === 0) {
                document.write(`<td style = "background-color:grey ;">${i * j}</td>`);
            } else {
                const result = i * j;
                if (i % 2 === 0) {
                    document.write(`<td>${result}</td>`);
                } else {
                    document.write(`<td>${result}</td>`);
                }
            }
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

    {
        const capitalize = str => {
            let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            return result //саме цей код забезпечить повернення результату функції
        }
        console.log(capitalize("cANBerRa")) //Canberra
    }



    {
        function capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        const userInput = prompt("Ведіть щось...");
        const mapWords = userInput.split(" ").map(capitalize);
        const string = mapWords.join(" ");
        alert(string);
    }


    {
        function capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        const userInput = prompt("Ведіть щось...");
        const mapWords = userInput.split(" ").filter(capitalize);
        const string = mapWords.join(" ");
        alert(string);
    }


    {
        const forbiddenWords = ["bad", "evil", "dangerous"];

        function checkWord(word) {
            return forbiddenWords.includes(word) ? "BEEP" : word;
        }

        const userInput = prompt("Введіть рядок:");

        const wordsArray = userInput.split(" ").map(checkWord);

        const resultString = wordsArray.join(" ");

        console.log(resultString);
    }


        {
                const currencies = ["USD", "EUR", "GBP", "UAH"];
            const selectOptions = currencies.reduce((accumulator, currency) => {
                return accumulator + `<option value="${currency}">${currency}</option>`;
            }, "");

            const str = `<select>${selectOptions}</select>`;
            document.write(str);
        }