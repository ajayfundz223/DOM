// Selecting DOM elements
// Selectors
// getElementByClassName, getElementsByTagName, getElementById, querySelector, querySelectorAll

// By id 
const ul = document.getElementById('empty');
console.log(ul);

// By TagName
const para = document.getElementsByTagName('p')
console.log(para);

for(let i = 0; i < para.length; i++){
    console.log(para[i]);
}

const ul1 = document.getElementsByTagName('li')
console.log(ul1);

for(let x = 0; x < ul1.length; x++){
    console.log(ul1[x].innerHTML);
}

// By className
const thirdPara = document.getElementsByClassName('third-para')
console.log(thirdPara[0]);


// By querySelctor
const li = document.querySelector('li')
console.log(li.innerHTML);

// By querySelctor for id
const myId = document.querySelector('#empty')
console.log(myId);

// By querySelctor for class
const fourthPara = document.querySelector('.third-para')
console.log(fourthPara);


// By querySelectorAll
const allPara = document.querySelectorAll('p')
console.log(allPara);

allPara.forEach(item=>console.log(item.innerHTML))


const myImg = document.querySelector('img')
myImg.setAttribute('src', 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg')



// Modifying the DOM
// document.createElement('tagName')
// document.createTextNode('Hell javascript')

// create a new element div
let div = document.createElement('div')

// add css to the div
div.className = 'my-div';
console.log(div);

// Insert some content into the div
div.innerHTML = '<strong>Hello</strong> javascript'

// To show the div on our DOM
function showContent(){
    document.body.prepend(div)
    div.insertAdjacentHTML("beforeend", '<p>First items in the div</p>')
    // beforebegin, beforeend, afterbegin, afterend
}
setTimeout(showContent, 3000)
setTimeout(changeClass, 9000)
setTimeout(()=>div.remove(), 15000)

function changeClass (){
    div.classList.remove('my-div')
    div.classList.add('my-div2')
}

// Javascript Events
// An event is a signal that something happened
// click event, mouseover event, mouseout event, keydown event, keyup event

// event handler
function showMsg(){
    console.log('You clicked me')
}
// showMsg()
const button = document.querySelector('.btn')
button.addEventListener("click", showMsg)

// // How to remove node
// setTimeout(() => div.remove(), 3000)

// let myTextNode = document.createTextNode('I love JS')