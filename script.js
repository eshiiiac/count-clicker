// let btnNums = document.querySelectorAll('.drum').length;

// for (let i = 0; i < btnNums; i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function() {
//         alert('Button ' + (i+1) + ' was clicked');
//     });
// }

let add = document.getElementById('add');
let sub = document.getElementById('sub');
let count = document.getElementById('num');
let reset = document.getElementById('reset');
let audio = document.getElementById('gun');
count = 0;

add.addEventListener('click', ()=>{
count = count + 1;
console.log(count);
num.innerHTML = `${count}`;
audio.play();
})

sub.addEventListener('click', ()=>{
    count = count - 1;
    console.log(count);
    num.innerHTML = `${count}`;
    audio.play();
})

reset.addEventListener('click', ()=>{
    count =  0;
    console.log(count);
    num.innerHTML = `${count}`;
    audio.play();
})
    