let questionsAnswers = [];
let submitButton = document.querySelector(".submitting-answers");

submitButton.addEventListener("click", receivedAnswers);


async function receivedAnswers(e) {
  e.preventDefault();
  
  
  

  let arr = [];
    // arr = await 
  let surveyResponseDetails = {
    SurveyId : localStorage.getItem('surveyId'),
    UserId : localStorage.getItem('userId')
  }
  arr = await postData(surveyResponseDetails)
  console.log(arr);

  



  

  dummyQuestions.forEach(({ questionId, type }) => {
    if (type == questionTypes.yesNo || type == questionTypes.radioGroup) {
      let answers = document.querySelectorAll(`[id='${questionId}']`);

      questionsAnswers.push({
        questionId: questionId,
        answer: [...answers].find((elmnt) => elmnt.checked == true).value,
      });
      return;
    } else if (type == questionTypes.multiCheckBox) {
      let answers = [...document.querySelectorAll(`[id='${questionId}']`)];

      answers = answers.filter((elmnt) => elmnt.checked).map((elnt) => elnt.value);

      questionsAnswers.push({
        questionId: questionId,
        answer: answers,
      });
      return;
    }
    
    

    questionsAnswers.push({
      questionId: questionId,
      answer: document.querySelector(`[id='${questionId}']`).value,
      
    });
    
    
  
    
    
    
    //localStorage.setItem('survId',surveyResponseDetails.SurveyResponseId);
    // let arr = [];
    // arr = await 
    
    
   
    
  });
  
  console.log("checking....", questionsAnswers);
  for(let i =0;i<questionsAnswers.length;i++){
    let surveyResponseDetailAnswers = {
      SurveyResponseId : arr.SurveyResponseId,
      QuestionId: questionsAnswers[i].questionId,
      Answer: questionsAnswers[i].answer
    }

    let arr1 = await postDataAnswers(surveyResponseDetailAnswers);
    console.log(arr1);

    
  }
  window.location.replace('finish.html');
  
}


