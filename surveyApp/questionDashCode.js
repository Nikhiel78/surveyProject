const cont = document.querySelector('.cont');
const dashBtn = document.querySelector('.btn');

let arryQ = []

let arryNew=[];

let arr1=[];
let arr2=[];
let arr3=[];




let url = "http://localhost:443/surveyResponses";
let
url1 = "http://localhost:443/surveyResponseAnswers";

url2 = "http://localhost:443/questions";

async function getDataQ() {
  let results = await fetch(url2, {
    method: "GET",
  });
  let jsonResults = await results.json();


  return jsonResults;
 
}



async function getDataSR() {
  let results = await fetch(url, {
    method: "GET",
  });
  let jsonResults = await results.json();


  return jsonResults;
 
}
async function getDataSRA() {
  let results = await fetch(url1, {
    method: "GET",
  });
  let jsonResults = await results.json();


  return jsonResults;
 
}



getDataSR().then(returnInfo=>{

    returnInfo.forEach(task=>{
      if(task.SurveyId===localStorage.getItem('surveyId')){
          arryNew.push(task)
      }
    })
    console.log('new array',arryNew)
})



getDataQ().then(returnInfo=>{

  returnInfo.forEach(task=>{
    
    
        arryQ.push(task)
    
  })
  console.log('array',arryQ)
})

  getDataSRA().then(res => {
    for(let i=0;i<arryNew.length;i++){
      res.forEach(ele =>{
        
        
        
          if(ele.SurveyResponseId===arryNew[i].SurveyResponseId){
            console.log(arryNew[i].SurveyResponseId);
          
            let list = document.createElement('li');
            list.classList.add('listItem');
            
            
            const response = document.createElement('h2');
            const question = document.createElement('h2');
            const answer = document.createElement('h2');
            //const avgRange = document.createElement('h2');
            
            
            


            //user.innerText = arryNew[i].UserId  ele.SurveyResponseId;
            response.innerText  = ele.SurveyResponseId;
            getDataQ().then(returnInfo=>{

              returnInfo.forEach(task=>{
                
                if(task.QuestionId === ele.QuestionId){
                  question.innerText  = task.Text;
                  if(task.QuestionType==2){
                    arr1.push(Number(ele.Answer));
                    
                    
                  }
                  if(task.QuestionType==1){
                    arr2.push(ele.Answer);
                    
                    
                  }
                  if(task.QuestionType==0){
                    arr3.push(ele.Answer);
                    
                    
                  }
                  
                  
                }

                
                
              })
              let count=0;

            for(let i=0;i<arr1.length;i++){
              count+=arr1[i];
            

            }

            let count1=0;
            let avg=0;

            for(let i=0;i<arr2.length;i++){
              if(arr2[i]==="{1}"){
                count1++;


              }

            }

            avg = count1;

            console.log(count/arr1.length)

            console.log(avg/arr2.length)
                          
                          
                          
                        
              
            })
            
            
            
              
            
            answer.innerText  = ele.Answer;
          
            list.appendChild(response);

            list.appendChild(question);
            list.appendChild(answer);
          


            cont.appendChild(list)
          
          }
          
          
      
        
          
      })
    }
    
  })
  
  

dashBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  window.location.replace('dash.html');
})
console.log(arr1);
console.log(arr2);

console.log(arr3);







