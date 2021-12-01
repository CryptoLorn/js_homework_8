/*
//1) Напишіть код, який:
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

document.getElementById('main_header').classList.add('September-2021');

//     b) робить шириниу елементу ul 400px

document.getElementsByTagName('ul').style.width = '400px';

//     c) робить шириниу всіх елементів з класом linkList шириною 50%

let wightElement = document.getElementsByTagName('linkList');
for(let i = 0; i < wightElement.length; i++){
    wightElement[i].style.width = '50%';
}

//     d) отримує текст який зберігається в елементі з класом listElement2

function getText (text){
    document.getElementsByClassName('listElement2').innerText = 'text';
}

//     e) отримує всі елементи li та змінює ім колір фону на сірий

let changesColor = document.getElementsByTagName('li');

for(let i = 0; i < changesColor.length; i++){
    changesColor[i].style.background = 'silver';
}

//     f) отримує всі елементи 'a' та додає їм клас anchor

let getElementA = document.getElementsByTagName('a');

for(let i = 0; i < getElementA.length; i++){
    getElementA[i].classList.add('anchor');
}

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aElement = document.getElementsByTagName('a');

for (let i = 0; i < aElement.length; i++){
    if(aElement[i].innerText === 'link3'){
        aElement[i].style.fontSize = '40px';
    }
}

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let getA = document.getElementsByTagName('a');

for(let i = 0; i < getA.length; i++){
    getA[i].classList.add(getA[i].innerText);
}

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let replaceBgColor = document.getElementsByClassName('sub-header');
for(let i = 0; i < replaceBgColor.length; i++){
    replaceBgColor[i].style.background = prompt('Color');
}

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let getSubElement = document.getElementsByClassName('sub-header');

for(let i = 0; i < getSubElement.length; i++){
    if(getSubElement[i].innerText === 'content 2 segment'){
        getSubElement[i].style.color = prompt('Color');
    }
}

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let getContentClass = document.getElementsByClassName('content_1');

getContentClass.innerText = prompt('Text');

//     l) отримати елементи p та змінити їм padding на 20px

let pElement = document.getElementsByTagName('p');

for(let i = 0; i < pElement.length; i++){
    pElement[i].style.padding = '20px';
}

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let getClass2Element = document.getElementsByClassName('text2');

for(let i = 0; i < getClass2Element.length; i++){
    getClass2Element[i].innerText = 'sep-2021';
}*/