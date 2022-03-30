const finishBtn = document.querySelector('.finish-form')

finishBtn.addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location.replace('login.html');
})