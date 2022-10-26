// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game

let number1 = Math.floor(Math.random()*100);
const number1box =document.getElementById("number1");
// console.log (number1," : number1");
number1box.innerHTML = number1;


let number2= Math.floor(Math.random()*100);
const number2box =document.getElementById("number2");
// console.log (number2," : number2");
number2box.innerHTML = number2;

// number1.onload = () => {
//     let x = Math.floor((Math.random() * 100) + 1);
// }
let number3box=document.getElementById("number3");
random3();

function random3 () {
let adi=Math.floor(Math.random()*5);

    switch(adi) {
        case 0:
            // number3box.innerHTML=number1+number2;
            
            // return number3box;
            number3box.innerHTML=number1+number2;
            console.log("+");
            break;
            
        case 1:
            // number3box.innerHTML=number1-number2;
            
            number3box.innerHTML=number1-number2;
            console.log("-");
            break;
        case 2:
            // number3box.innerHTML=number1*number2;
            // return number3box;
            number3box.innerHTML=number1*number2;
            console.log("*");
            break;
        case 3:
            if(number1>number2){
            number3box.innerHTML= Math.round(number1/number2)
            // console.log("/")
            // return number3box;
            // number3box.innerHTML=number1/number2;
            console.log("/");
            break;
            }
            else{
            number3box.innerHTML=number1*number2;
            }
            // }
        case 4:
            if (number1>number2){
            number3box.innerHTML= Math.round(number1%number2)
            console.log("%");
            break;
            }
            else {
                number3box.innerHTML=number1+number2;
            }
            

    }
}
// number3box.innerHTML=random3()


const plus = document.getElementById("plus");

const minus= document.getElementById("minus");

const mult = document.getElementById("mult");

const div= document.getElementById("div");

const  per= document.getElementById("per");

var score = 0;

plus.onclick = () => {
    if(number1+number2==number3box.innerHTML) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;
    // adi=Math.floor(Math.random()*5);
    // number3box.innerHTML=adi;
    random3();
    console.log("+");
}

minus.onclick = () => {
    if (number1-number2==number3box.innerHTML) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;
    // adi=Math.floor(Math.random()*5);
    // number3box.innerHTML=adi;
    random3();
    console.log("-");

}
mult.onclick = () => {
    if (number1*number2==number3box.innerHTML) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;
    // adi=Math.floor(Math.random()*5);
    // number3box.innerHTML=adi;
    random3();
    console.log("*");
}
div.onclick = () => {
    if (number1/number2==number3box.innerHTML) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;
    // adi=Math.floor(Math.random()*5);
    // number3box.innerHTML=adi;
    random3();

}
per.onclick = () => {
    if (number1%number2==number3box.innerHTML) {
        score++;
        resetTime(timerId);
    }
    else {
        location.href="./gameover.html";
    }
    number1 = Math.floor(Math.random()*100);
    number1box.innerHTML = number1;
    number2 = Math.floor(Math.random()*100);
    number2box.innerHTML = number2;
    // adi=Math.floor(Math.random()*5);
    // number3box.innerHTML=adi;
    random3();
}




// };

// lesserThan.onclick = () => {
//     if (number1<number2) {
//         score++;
//         resetTime(timerId);
//     }
//     else {
//         location.href="./gameover.html";
//     }

//     number1 = Math.floor(Math.random()*100);
//     number1box.innerHTML = number1;
//     number2 = Math.floor(Math.random()*100);
//     number2box.innerHTML = number2;
// };

// equalTo.onclick = () => {
//     if (number1===number2) {
//         score++;
//         resetTime(timerId);
//     }
//     else {
//         location.href="./gameover.html";
//     }

//     number1 = Math.floor(Math.random()*100);
//     number1box.innerHTML = number1;
//     number2 = Math.floor(Math.random()*100);
//     number2box.innerHTML = number2;
// };

var time;
var timer=document.getElementById('timer');
var timerId;

function startTimer () {
    time=20;
    timer.innerHTML = time;

    timerId = setInterval (() => {
        time--;
        if (time==0) {
            location.href="./gameover.html";
        }
        timer.innerHTML = time;
        
    },1000);
    localStorage.setItem("score",score);
}

function resetTime(intervalId) {

    clearInterval(intervalId);
    startTimer();
}

startTimer()
