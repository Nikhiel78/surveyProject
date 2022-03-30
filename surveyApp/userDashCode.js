
const cont = document.querySelector('.cont');
const loginBtn = document.querySelector('.btn');




let arryNew=[];
let url = "http://localhost:443/surveys";

async function getData() {
  let results = await fetch(url, {
    method: "GET",
  });
  let jsonResults = await results.json();


  return jsonResults;
 
}

getData().then(returnInfo=>{

  returnInfo.forEach(task=>{
    if(task.CreatedBy===localStorage.getItem('userId')){
        arryNew.push(task)
    }
  })
  console.log('new array',arryNew)
})

getData().then(res => {
    res.forEach(ele =>{
        
        
        let list = document.createElement('li');
        list.classList.add('listItem');
        
        const created = document.createElement('h2');
        const surveyName = document.createElement('h2');
        const view = document.createElement('button');
       
        view.classList.add('viewBtn');
        view.innerText= 'Start Survey'
        


        created.innerText = 'admin';
        surveyName.innerText  = ele.Name;
        list.appendChild(created);
        list.appendChild(surveyName);
        list.appendChild(view);
        view.setAttribute('id',ele.SurveyId);
        // localStorage.setItem('surveyId',view.getAttribute('id'));


        cont.appendChild(list)

        view.addEventListener('click',()=>{
            localStorage.setItem('surveyId',view.getAttribute('id'));
            
            window.location.replace('userSurvey.html');
        })
        
        
    })
})
loginBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  window.location.replace('login.html');

})