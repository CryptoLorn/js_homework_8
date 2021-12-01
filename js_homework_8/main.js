/*
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName:
//     -- отримує текст з параграфа з id "content"

let textP = document.getElementById('content');
console.log(textP.innerText);

//     -- отримує текст з блоку з id "rules"

let textD = document.getElementById('rules');
console.log(textD.innerText);

//     -- замініть текст параграфа з id 'content' на будь-який інший

let textReplaceP = document.getElementById('content').innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
console.log(textReplaceP);

//     -- замініть текст параграфа з id 'rules' на будь-який інший

let textReplaceD = document.getElementById('rules').innerText = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s';
console.log(textReplaceD);

//     -- змініть кожному елементу колір фону на червоний

let replaceColor = document.body.children;

for(let i = 0; i < replaceColor.length; i++){
    replaceColor[i].style.background = 'red';
}

console.log(replaceColor);

//     -- змініть кожному елементу колір тексту на синій

let replaceColorText = document.body.children;

for(let i = 0; i < replaceColorText.length; i++){
    replaceColorText[i].style.color = 'blue';
}

console.log(replaceColorText);

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let allElements = document.getElementById('rules').classList;
console.log(allElements);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний

let replaceTextColor = document.getElementsByClassName('fc_rules');

for(let i = 0; i < replaceTextColor.length; i++){
    replaceTextColor[i].style.color = 'red';
}

console.log(replaceTextColor);*/