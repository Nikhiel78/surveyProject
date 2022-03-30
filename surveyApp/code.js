const loginBtn = document.querySelector('.login-form');


// const in1 = input1.value;
// const in2 = input2.value;
// userDataArray = []


// async function searchArray(search) {
//     let array = [];
//     array = await getData();
//     userDataArray = await array.find((arr) => arr.Email === search);
//}
//user login

loginBtn.addEventListener('submit',async (e) => {
    e.preventDefault();
    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    
    let arr = [];
    arr = await getData();
    let userDataArray = []
    userDataArray = await arr.find((arr) => arr.Email === input1.value);
    console.log(userDataArray);
    if(userDataArray.Email === input1.value && userDataArray.Password === input2.value && userDataArray.IsAdmin == 1){
        localStorage.setItem('userId', userDataArray.UserId);
        localStorage.setItem('email', userDataArray.Email);
        window.location.replace('dash.html');
    }else if(userDataArray.Email === input1.value && userDataArray.Password === input2.value && userDataArray.IsAdmin == 0){
        localStorage.setItem('userId', userDataArray.UserId);
        localStorage.setItem('email', userDataArray.Email);
        window.location.replace('userDash.html');

    
    }else{
        alert('Incorrect username or password.');
        
    }
    console.log(localStorage.getItem('userId'));
    // getData().then(res=>{
    //     res.forEach(ele => {
    //         console.log(ele)
    //         if(ele.Email==input1.value){
    //             if(ele.Password==input2.value){
    //                 alert('Success');

    //             }else{
    //                 alert('Incorrect username or password');
    //             }

    //         }
            
            
    //     });
    // })



    




    

    
    // let userArray = []

    // await searchArray(input1.value);
    // userArray = userDataArray;
    // console.log(userArray);
    // console.log(userArray)

    // if (userArray.Email == input1.value && userArray.Password == input2.value) {
    //     window.location.replace('questions.html');
    // }else  {
    //     alert('incorrect username or password');
    // }

})












