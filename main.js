console.log('------------------- №3 (Вариант A)');

function ab (A = 0, B = 0) {        
    console.log('Значения от A до B включительно = ', A);
    A = A+1;        
 if (A > B) {         
     return;
 } ab(A, B); 
}
ab(1, 10);

console.log('------------------- №3 (Вариант B)');

function ab2 (A = 0, B = 0) {  
    if (A === B) {
        console.log('Значения от A до B', A);
        return;
    } else if (A < B) {
        ab2 (A, B - 1);
        console.log('Значения от A до B', B);
    } else if (A > B) {
        console.log('Значения от A до B', A);
        ab2 (A - 1, B)
    } else {
        console.log('A', A);
    };
}
ab2(2,7);

console.log('------------------- №4');

setInterval (function (){
let date = new Date();
let time = [
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()),
    (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
    (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()),
].join(':');
document.getElementById('clock').innerText = time;
}, 60);

setInterval (function (){
    let date = new Date();
    let time = [
        (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()),
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),        
    ].join(':');
    document.getElementById('clock2').innerText = time;
    }, 60);

let divTime = document.getElementById('divTime');

// 1 вариант без toggle

// divTime.addEventListener('click', () => {    
//     let curientTime1 = document.getElementById('clock');
//     let curientTime2 = document.getElementById('clock2'); 

//     if (curientTime1.classList.contains('active') && curientTime2.classList.contains('hidden')) {
//         curientTime1.classList.remove('active');
//         curientTime1.classList.add('hidden')
//         curientTime2.classList.remove('hidden');
//         curientTime2.classList.add('active');            
//     } else {
//         curientTime1.classList.remove('hidden');
//         curientTime1.classList.add('active');
//         curientTime2.classList.remove('active');
//         curientTime2.classList.add('hidden');            
//     }    
// });

// 2 вариант без c toggle

divTime.addEventListener('click', () => {    
    let curientTime = document.querySelectorAll('.time');    
    for (time of curientTime) {
        time.classList.toggle('hidden');            
    }
});

// 3 Вариант с исправленными замечаниями.

function clockTim () {
    let clockTime = document.getElementById('clockTime');
    let date = new Date();
    let hours = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    let minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    let seconds = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());

    clockTime.children[0].innerHTML = hours + ':';
    clockTime.children[1].innerHTML = minutes;
    clockTime.children[2].innerHTML = ':' + seconds;
}

setInterval(clockTim, 60);

let clockTime = document.getElementById('clockTime');

clockTime.addEventListener('click', () => {
    let seconds = document.getElementById('seconds');
    seconds.classList.toggle('hidden');
});
