{
let name = prompt("Як тебе звати");
let answer = alert( "Привіт!" + name);
}

{
let tExt = prompt("Введіть речення: ");
let sPlit = tExt.split(',');
let jOin = sPlit.join(',блін,');
console.log(jOin);
}

{
let str = "cANBerRa"
let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(result) //Canberra
}

{
let woRd = "Порахуйте кількість слів у рядку.";
let nUmberWord = woRd.split(' ');
let nUmberWordlenTh = nUmberWord.lenth;
console.log(nUmberWord);
}

{
    let nAmeUser = prompt("ім'я");
    let nameUser2 = prompt("прізвище");
    let nameUser3 = prompt("побатькові");
        let trIIm = nAmeUser.trim(' ');
        let nAmeString = nAmeUser.charAt(0).toUpperCase() + nAmeUser.slice(1).toLowerCase();
            let fullNume = alert(nAmeUser + nameUser2 + nameUser3);
    }


    {
        let str = "Було жарко. Василь пив пиво вприкуску з креветками"
        let result = str.split('пиво');
            let result2 = result.join('чай');
        console.log(result2) //"Було жарко. Василь пив чай уприкуску з креветками"
        };

        let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
        let result = str.indexOf("<br />");
        let resultStr = str.slice(0, 33);
        console.log(resultStr) //якийсь текст, в якому є один тег і всяке інше


        {
            let str = "якийсь текст у якому є один тег <br /> і всяке інше"
        let startStr = str.indexOf("<");
        let endStr = str.indexOf(">");
        let sliceStr = str.slice(startStr, endStr, +2);
        let toUpperstr = sliceStr.toUpperCase();
        let result = str.slice(0, startStr) + toUpperstr + str.slice(endStr +0);
        console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше
        };


        {
            let textUser = prompt("Введіть рядок з маркером нового рядка (\\n):");
let splitUser = textUser.split("\\n");
let joinUser = splitUser.join("\n");
alert(joinUser);
}


{
    const youtubeText = /(?:https?:\/\/)/;
    let linkUser = prompt('Введіть посилання на youtube:');
    let mAtch = linkUser.match(youtubeText);
    let videoId = mAtch[1];
    let codeYoutube = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    document.write(codeYoutube);
}