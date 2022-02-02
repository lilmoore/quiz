document.addEventListener('DOMContentLoaded', function(){
    'use strict';

    const modalBlock = document.querySelector('#modalBlock')
    const btnOpenModal =document.querySelector('#btnOpenModal')
    const closeModal = document.querySelector('#closeModal')
    const quetionTitle = document.querySelector('#question')
    const formAnswers = document.querySelector('#formAnswers')

    const a = {
        name:[
            {
                title:'Стандарт'
            },
            {
                title:'Черный'
            }
    ]}

    const b = {
        link:[
            {
                url:'./image/burger.png'
            },
            {
                url:'./image/burgerBlack.png'
            }
    ]}

    btnOpenModal.addEventListener('click',()=>{
        console.log(modalBlock);
        modalBlock.classList.add('d-block')
        playTest()
    })
    closeModal.addEventListener('click', ()=>{
        modalBlock.classList.remove('d-block')
    })

    const playTest = ()=>{
        const renderQuestions = ()=>{
            quetionTitle.textContent = "Какого цвета бургер вы хотите?"


            formAnswers.innerHTML = `<div class="answers-item d-flex flex-column">
            <input type="radio" id="answerItem1" name="answer" class="d-none">
            <label for="answerItem1" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${b.link[0].url}" alt="burger">
            <span>${a.name[0].title}</span>
            </label>
        </div>
        <div class="answers-item d-flex justify-content-center">
            <input type="radio" id="answerItem2" name="answer" class="d-none">
            <label for="answerItem2" class="d-flex flex-column justify-content-between">
            <img class="answerImg" src="${b.link[1].url}" alt="burger">
            <span>${a.name[1].title}</span>
            </label>
        </div>`
        }
        renderQuestions();
    }
    

})




















// btnOpenModal.onclick = function(){
//     console.log("click");
// }  

// btnOpenModal.onclick = function(){
//     console.log("second");
// }  

// btnOpenModal.addEventListener('click', function(){
//     console.log('third')
// })

// btnOpenModal.addEventListener('click', function(){
//     console.log('fourth')
// })




// console.log(btnOpenModal)
// console.dir(btnOpenModal)


// function summNumbers(a,b) {
//     return a + b
// }

// const summNumbers2 = function(a,b){
//     return a + b 
// }

// const summNumbers3 = (a, b) => {
//     return a + b
// }

// console.log(summNumbers2(10, 8))
// console.log(summNumbers2(3, 8))
// console.log(summNumbers(2, 5))


