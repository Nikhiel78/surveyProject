// const submitBtn = document.querySelector('survey-form');
// const q1 = document.querySelector('#car')
// const q2 = document.querySelector('#brand')
// const q3 = document.querySelector('#transmission')
// const q4 = document.querySelector('#electric')


// const q5 = document.querySelector('#drivetrain')


// submitBtn.addEventListener('submit',(e)=>{
//     e.preventDefault()
    
//     const ans1 = q1.value;
//     const ans2 = q2.value;
//     const ans3 = q3.value;
//     const ans4 = q4.value;
//     const ans5 = q5.value;

//     const questionDetails = {
//         Car: ans1,
//         Manufacturer: ans2,
//         Transmission: ans3,
//         Electric: ans4,
//         Drivetrain: ans5,


//     }
//     postData(questionDetails);
    
    
    
    
//     alert('posted');

// })

const addbtn = document.querySelector('.question-form');
const quesIn = document.querySelector('#input1');
const dropdown = document.querySelector('#ques');
const doneBtn = document.querySelector('.btn');


addbtn.addEventListener('submit',(e)=>{
    e.preventDefault();
    let questionDetails = {
        SurveyId: localStorage.getItem('surveyId'),
        Text: quesIn.value,
        QuestionType: dropdown.value
        
        
    }
    postData(questionDetails);
    quesIn.value='';
    
    
})
doneBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.replace('dash.html');

})

