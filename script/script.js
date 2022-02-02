document.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let i = 0
    const modalBlock = document.querySelector('#modalBlock')
    const btnOpenModal =document.querySelector('#btnOpenModal')
    const closeModal = document.querySelector('#closeModal')
    const quetionTitle = document.querySelector('#question')
    const formAnswers = document.querySelector('#formAnswers')
    const nextButton = document.querySelector('#next')
    const prevButton = document.querySelector('#prev')

    const questions = [
        {
            question: "Какого цвета бургер?",
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];


    btnOpenModal.addEventListener('click',()=>{
        console.log(modalBlock);
        modalBlock.classList.add('d-block')
        playTest()
    })
    closeModal.addEventListener('click', ()=>{
        modalBlock.classList.remove('d-block')
    })

    const playTest = () =>  {
        let numberQuestion = 0;

        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer)    =>  {
                const answerItem= document.createElement('div');

                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

                answerItem.innerHTML = `
                <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src="${answer.url}" alt="burger">
                <span>${answer.title}</span>
                </label>
                </div>
                `

                formAnswers.appendChild(answerItem)


            })
        }

        const renderQuestions = (indexQuestion)=>{
            formAnswers.innerHTML = ``;

            if(numberQuestion >= 0 && numberQuestion <= questions.length -1 ){

            quetionTitle.textContent = `${questions[indexQuestion].question}`

            renderAnswers(indexQuestion);
                
            nextButton.classList.remove('d-none');
            prevButton.classList.remove('d-none')
            }

            if(numberQuestion === 0) {
                prevButton.classList.add('d-none')
            }

            if(numberQuestion === questions.length -1) {
                nextButton.classList.add('d-none')
            }

            
        }


        renderQuestions(numberQuestion);

        
        nextButton.onclick = () => {
            numberQuestion++
            renderQuestions(numberQuestion);
        }

        prevButton.onclick = () => {
            numberQuestion--
            renderQuestions(numberQuestion);
        }

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
