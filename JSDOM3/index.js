// //adding 100para
// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//    document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("this took" + (t2-t1) + "ms");

// // optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("this took" + (t4-t3) + "ms");



// ----- document Fragment -----
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     fragment.appendChild(newElement);

// }
// document.body.appendChild(fragment);//1 Reflow, 1 Repaint


// ---- The call stack -----


// --- single threading ----

// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = 'js is Single';
//     document.body.appendChild(para);
// }


// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent = 'Kya haal chaal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();


// ----Event loop ----

// document.addEventListener('click', function(){
//     console.log('hello DiDi');
// });


// --- SetTimeout()  method-----
// setTimeout(function(){
//     console.log('Hello Everyone');
// }, 5000);
