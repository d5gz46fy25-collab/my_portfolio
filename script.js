let userName = prompt( "Как вас зовут?" );
alert( "Привет, " + userName + "!" );
const myButton = document .getElementById( "myBtn" );
myButton.addEventListener("click", function (){   alert( "Кнопка нажата!" ); });

const facts =[
    'я люблю программировать',
    'я работаю в webshtorm'
];
function getRandomFact() {
    const randomIndex = Math.floor(Math.random()*facts.legth);
    return facts[randomIndex];
}
const myButton3 = document.getElementById( "myBtn3" );
myButton3.addEventListener("click", function () {alert(getRandomFact())
});

let clickCount = 0;
const myButton2 = document .getElementById( "myBtn2" );
myButton2.addEventListener("click", function () {
    clickCount++;
    console.log('Количество нажатий:'+clickCount);
});



