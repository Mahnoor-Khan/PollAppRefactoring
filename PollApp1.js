
// const ques1 = document.getElementById("ques1")
// const ques2 = document.getElementById("ques2")
// const ques3 = document.getElementById("ques3")
// const ques4 = document.getElementById("ques4")
// const ques5 = document.getElementById("ques5")
// const correct = document.querySelectorAll(".correct")
// const answers = document.querySelectorAll('.answer')
// const scoreArea = document.querySelector('.scoreArea')
// const totalScore = document.querySelector('.totalScore')


// const Questions = [
//     ques1,ques2,ques3,ques4,ques5]
//     totalScore.innerHTML=Questions.length    
// let i=1
// let answer
// const getCheckedAnswer = () => {
//     for(let k=0;k<answers.length;k++){
//         let currentElem=answers[k]
//         if (currentElem.checked) {
//             answer = currentElem.id
//         }
//     }
//     return answer;
// }
  
// function submission() {
//         for(let j=1;j<Questions.length;j++){
//             ques1.style.display="none"
//             j==i?Questions[j].style.display="block":  Questions[j].style.display="none"  
//             if(i===Questions.length){
//                 Questions[i-1].style.display="block"
//                 scoreArea.style.display="block"
//                 document.querySelector("#submit").style.cursor="disabled"        
//             }        
//         }  

//         getCheckedAnswer()
//             if(answer===correct[i-1].id){
//                document.querySelector(".Scored").innerHTML++
//             }
//             i++      
//     }



// NEW CODE


const ques1 = document.getElementById("ques1")
const ques2 = document.getElementById("ques2")
const ques3 = document.getElementById("ques3")
const ques4 = document.getElementById("ques4")
const ques5 = document.getElementById("ques5")
const scoreArea = document.querySelector('.scoreArea')
const correct = document.querySelectorAll(".correct")
const answers = document.querySelectorAll('.answer')
    
const Questions = [
        ques1,ques2,ques3,ques4,ques5]
let i=1
let m=0
let a
// answers.checked=false
function getAns(id){
    // answers.checked=true
    a=id
    }
        function submission() {
                    for(let j=1;j<Questions.length;j++){
                        ques1.style.display="none"
                        j==i?Questions[j].style.display="block":  Questions[j].style.display="none"  
                        
                        if(i===Questions.length){
                            Questions[i-1].style.display="block"
                            scoreArea.style.display="block"
                            document.querySelector("#submit").style.cursor="disabled"          
                        }        
                    }   
                    if(a==correct[m].id){
                        document.querySelector(".Scored").innerHTML++
                    }
                //     if(answers.checked==false){
                //         document.querySelector("#submit").style.display="not-allowed" 

                //         console.log("123")
                //     }
                //     else{
                //     answers.checked=false
                // }
                    m++   
                    i++      
                }



                 