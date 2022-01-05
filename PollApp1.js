
// const ques1 = document.getElementById("ques1")
// const ques2 = document.getElementById("ques2")
// const ques3 = document.getElementById("ques3")
// const ques4 = document.getElementById("ques4")
// const ques5 = document.getElementById("ques5")
// const correct=document.getElementsByClassName("correct")
// const scoreArea = document.querySelector(".scoreArea")
// const totalScore = document.querySelector('.totalScore')



// const Questions=[ques1, ques2, ques3, ques4, ques5]
// totalScore.innerHTML=Questions.length
// ques1.style.display="block"

// let a , i=0

// getAns=(id)=>a=id

// function submission(){
//     correctAns=correct[i].id
//     if(a==correctAns){
//         document.querySelector('.Scored').innerHTML++
//     }
//     i++
//    for(let j=0;j<Questions.length;j++){
//        j==i?Questions[j].style.display="block": Questions[j].style.display="none"
//    }
//    if(i==Questions.length){
//        Questions[i-1].style.display="block"
//        scoreArea.style.display="block"
//        document.querySelector('.submitBtn').style.display="none"
//    }
// }


// NEW CODE

const QuestionDB = [{
    ques: "Q1: JavaScript  is ___ language?",
    a: "back end but not front end ",
    b: "Front End",
    c: "front end but not back end",
    d: "Back End",
    ans: ['b','d']
},
{
    ques: "Q2: Conditions for Equality?",
    a: "a == b",
    b: "a === b",
    c: "a = b",
    d: "!a == b",
    ans: ['a','b']
},
{
    ques: "Q3: Methods to get Id in JS?",
    a: "getElementById()",
    b: "getElementsById",
    c: "querySelector('#...')",
    d: "querySelector('.')",
    ans: ['a','c']
},
{
    ques: "Q4: Choose the Right conditions?",
    a: "a => b",
    b: "a =< b",
    c: "a >= b",
    d: "!b < a",
    ans: ['c','d']
},
{
    ques: "Q5:Block scope variables in JS are?",
    a: "var",
    b: "const",
    c: "let",
    d: "var & let",
    ans: ['b','c']
}]

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const scoreArea = document.querySelector(".scoreArea")
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
document.querySelector('.totalScore').innerHTML=QuestionDB.length*2

const answers = [a, b, c, d]

let i=0, arr = [] , arr1=[]


showQuestions = () => {
    question.innerHTML = QuestionDB[i].ques
    option1.innerHTML = QuestionDB[i].a
    option2.innerHTML = QuestionDB[i].b
    option3.innerHTML = QuestionDB[i].c
    option4.innerHTML = QuestionDB[i].d
    arr1=QuestionDB[i].ans
}
showQuestions()

function submission() {
    answers.forEach((currentElem) => currentElem.checked = false);
    arr.forEach((elem)=>{ if(elem==arr1[0] || elem==arr1[1] ){
        document.querySelector('.Scored').innerHTML++}})

    if(i==QuestionDB.length-1){
               scoreArea.style.display="block"
               document.querySelector('.submitBtn').style.display="none"
               i--
           }
    i++
    showQuestions()
    arr = []
}

function getCheckedId(elem) {
    if (elem == arr[0] || elem == arr[1]) {
        for (let l = 0; l < answers.length; l++) {
            if (answers[l].id == elem) {
                answers[l].checked = false
                elem == arr[0] ? arr.shift() : elem == arr[1] ? arr.pop() : arr
            }
        }
    }
    else {
        arr.length < 2 ? arr.push(elem) : arr[0] != elem ? arr[1] = elem : arr = arr

        for (let k = 0; k < answers.length; k++) {
            answers[k].id == arr[0] || answers[k].id == arr[1] ? answers[k].checked = true : answers[k].checked = false
        }

    }
}
