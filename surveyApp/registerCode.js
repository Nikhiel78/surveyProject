const registerBtn = document.querySelector('.register-form');
const input1 = document.querySelector('#registerinput1');
const input2 = document.querySelector('#registerinput2');
const input3 = document.querySelector('#registerinput3');


registerBtn.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const in1 = input1.value;
    const in2 = input2.value;
    const in3 = input3.value;
    let mydata = [];
    
    const registerDetails = {
        Email: in1,
        Password: in2,
        IsAdmin: 0
       
        
    }
    mydata = await getData()
    //  const user = mydata;
    //  console.log(user);
    if(in2===in3){
        if(mydata.find(data => data.Email === in1) ){
            alert('username already exists, please choose another');
        }else{
            postData(registerDetails);
            window.location.replace('login.html');
        }
    }else{
        alert('Passwords do not match');
    }
})
