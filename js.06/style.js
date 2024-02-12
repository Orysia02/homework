{
    const book = {
        name : 'JavaScript для дітей',
        pages : '368p.'
    }
    const mobil = {
        model : '8+',
        name : 'iPhone'
    }
    const earphones = {
        name : 'AirPods iPhone',
        model : 'Третє покоління'
    }
}


{
    const obj = {};
    
    const key1 = prompt("Введіть властивість:");
    const nameKey1 = prompt("Введіть обєкт дії:");
    obj[key1] = nameKey1;

    const key2 = prompt("Введіть другу властивість:");
    const nameKey2 = prompt("Введіть друге значення:");
    obj[key2] = nameKey2;

    console.log(obj);
}

{
    const newObj = {};

    const additionalKey = prompt("Введіть назву додаткової властивості:");
    const additionalValue = prompt("Введіть значення для додаткової властивості:");
    newObj[additionalKey] = additionalValue;

    const copiedObj = Object.assign({}, obj);
    console.log(newObj);
    console.log(copiedObj);
}


{
    const body = {
        tagName: 'body',
        children : [
            {
                tagName: 'div',
                children:[
                    {
                        tagName: 'span',
                        children: ["Enter a data please"]
                    }
                ],
                tagName: 'br',
                tagName: 'input',
                attrs:{
                    type: "text",
                    id: "name"
                },
                tagName: 'input',
                attrs: {
                    type: "text",
                    id: "surename"
                }
            }
        ],
        children:[
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: "ok",
                        },
                        children: ["OK"]
                    }
                ],
                children:[
                    {
                        tagName: 'button',
                        attrs: {
                            id: "cancel"
                        },
                        children:["Cancel"]
                    }
                ]
            }
        ]
    }
    console.log(body)
    console.log(body.button)
    console.log(body.children)
    console.log(body.children[1])
}




{
    const body = {
        tagName: 'body',
        parent: 'null',
        children : [
            {
                tagName: 'div',
                parent: 'body',
                children:[
                    {
                        tagName: 'span',
                        parent: 'div',
                        children: ["Enter a data please"]
                    }
                ],
                tagName: 'br',
                tagName: 'input',
                parent: 'div',
                attrs:{
                    type: "text",
                    id: "name"
                },
                tagName: 'input',
                parent: 'div',
                attrs: {
                    type: "text",
                    id: "surename"
                }
            }
        ],
        children:[
            {
                tagName: 'div',
                parent: 'body',
                children: [
                    {
                        tagName: 'button',
                        parent: 'div',
                        attrs: {
                            id: "ok",
                        },
                        children: ["OK"]
                    }
                ],
                children:[
                    {
                        tagName: 'button',
                        parent: 'div',
                        attrs: {
                            id: "cancel"
                        },
                        children:["Cancel"]
                    }
                ]
            }
        ]
    }
    console.log(body)
    console.log(body.button)
    console.log(body.children)
    console.log(body.children[1])
}




{
    const body = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ["Enter a data please"]
                },
                {
                    tagName: 'br'
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: "text",
                        id: "name"
                    }
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: "text",
                        id: "surname"
                    }
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    attrs: {
                        id: "ok",
                    },
                    children: ["OK"]
                },
                {
                    tagName: 'button',
                    attrs: {
                        id: "cancel"
                    },
                    children: ["Cancel"]
                }
            ]
        }
    ]
};

console.log(body);
console.log(body.children);
console.log(body.children[1]); 
}



{
    const body = [
        {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ["Enter a data please"]
                    },
                    {
                        tagName: 'br'
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: "text",
                            id: "name"
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: "text",
                            id: "surname"
                        }
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: "ok",
                        },
                        children: ["OK"]
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: "cancel"
                        },
                        children: ["Cancel"]
                    }
                ]
            }
        ]
        }
    ];
    const [,, child3,, child5, {id: name1}] = body
    
    console.log(body);
    console.log(body.children);
    console.log(body.children[1]); 
    console.log([,, child3,, child5, {id: name1}])
}



{
    let arr = [1,2,3,4,5, "a", "b", "c"]

    const [,even1, , even2] = arr
    const [odd1,,odd2,,odd3] = arr
    const letters = arr.filter(item => typeof item ==='string')

    console.log("парні числа", even1, even2)
    console.log("Непарні числа", odd1, odd2, odd3)
    console.log("Літери", letters)
}



{
    let arr = [1, "abc"]

    const number = arr.filter(item => typeof item === 'number')
    const s1 = arr[1][0]
    const s2 = arr[1][1]
    const s3 = arr[1][2]
    console.log(number)
    console.log(s1)
    console.log(s2)
    console.log(s3)
}



{
    let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]}
    
    const {children: [name1, name2]} = obj

     console.log({children: [name1, name2]})
}


{
    let arr = [1,2,3,4, 5,6,7,10]

    const {0: a} = [1,2,3,4, 5,6,7,10]
    const {1: b} = [1,2,3,4, 5,6,7,10]
    const {length} = [1,2,3,4, 5,6,7,10]

    console.log(a)
    console.log(b)
    console.log(length)
}


{
    const obj = {
    book: {
        name: 'JavaScript для дітей',
        pages: '368p.'
    },
    mobil: {
        model: '8+',
        name: 'iPhone'
    },
    earphones: {
        name: 'AirPods iPhone',
        model: 'Третє покоління'
    }
};

const { mobil, ...rest } = obj;

console.log(rest);
}


{
    const fromCurrency = prompt("Enter the source currency (e.g., USD):").toUpperCase();


const toCurrency = prompt("Enter the target currency (e.g., EUR):").toUpperCase();


const amount = parseFloat(prompt("Enter the amount to convert:"));


fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
    .then(res => res.json())
    .then(data => {
        if (data.rates && data.rates[toCurrency]) {
            const exchangeRate = data.rates[toCurrency];
            const convertedAmount = amount * exchangeRate;
            console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
        } else {
            console.log(`Currency conversion not possible. Check your input.`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        console.log('An error occurred while fetching data. Please try again later.');
    });
}



