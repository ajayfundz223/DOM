// Selecting DOM elements
const result = document.querySelector('.result')
const decrease = document.querySelector('.dec')
const reset = document.querySelector('.res')
const increase = document.querySelector('.inc')
const display = document.querySelector('.display')
console.log(result);
console.log(decrease, increase, reset, display);

// for decrease
decrease.addEventListener('click', ()=>{
    result.innerHTML --;
    handleColorChange()
})

// for reset
reset.addEventListener('click', ()=>{
    result.innerHTML = 0;
    handleColorChange()
})

// for increase
increase.addEventListener('click', ()=>{
    result.innerHTML ++;
    handleColorChange()
})


function handleColorChange(){
    if(result.innerHTML < 0){
        display.style.color = 'red';
    }else if(result.innerHTML > 0){
        display.style.color = 'green';
    }else{
        display.style.color = 'white';
    }
}