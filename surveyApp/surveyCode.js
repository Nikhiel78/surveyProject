const confirmBtn = document.querySelector('.survey-form');
const surveyName = document.querySelector('#input1');


confirmBtn.addEventListener('submit',async (e)=>{
    e.preventDefault();
    let details = {
        Name: surveyName.value,
        CreatedBy: localStorage.getItem('userId')

    }
    
    let  arr = await postData(details);
    localStorage.setItem('surveyId',arr.SurveyId)
    console.log(arr.SurveyId);
    window.location.replace('question.html');
    
    
        
    


})