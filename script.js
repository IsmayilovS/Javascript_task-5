const SignInbtn = document.querySelector(".SignInbtn");

const SignUpbtn = document.querySelector(".SignUpbtn");

const SignUpUserInput = document.querySelector("#UserInp");

const SignUpPasswordInput = document.querySelector("#PasswordInp");

const SignInUserInput = document.querySelector("#SignInUserInp");

const SignInPasswordInput = document.querySelector("#SignInPasswordInp");

const NotificationText = document.querySelector("#NotificationText")

const dataLogin = []

const dataPassword = []



SignUpbtn.addEventListener('click',()=>{

    localStorage.setItem(SignUpUserInput.value, SignUpPasswordInput.value);
        for(let i=0; i<localStorage.length;i++){ 
        dataLogin.push(localStorage.key(i));
        dataPassword.push(localStorage.getItem(localStorage.key(i)));
    }
    //console.log(dataLogin);
    //console.log(dataPassword);
    SignUpUserInput.value = '';
    SignUpPasswordInput.value ='';

    // if (dataLogin[i] == localStorage.key(i)){
    //       NotificationText.innerHTML = "Username Already exsist"
    //     }
})

//  function LoginCheck(){
//     SignUpbtn.addEventListener('click',()=>{
//         dataLogin.push(localStorage.key(i)
//     }
// }
//muellim bunu yoxlamaq ucun ayrica funksiya yazmaq lazimdi addeventlistener icinde olan yoxsa hamsin bir add event listener icinde etmek ?

//Method 1
// SignInbtn.addEventListener('click',()=>{
//     for(let i=0; i<localStorage.length;i++){
//       if (localStorage.key(i) == SignInUserInput.value && localStorage.getItem(localStorage.key(i)) == SignInPasswordInput.value){
//         NotificationText.innerHTML = "Sign In successful!"
//       }
//     }
// })


//Method 2
SignInbtn.addEventListener('click',()=>{
    for(let i=0; i<localStorage.length;i++){
      if (dataLogin[i] == SignInUserInput.value && dataPassword[i] == SignInPasswordInput.value){
        NotificationText.innerHTML = "Sign In successful!"
      }
      else {
        NotificationText.innerHTML = 'Login or Password do not match'
      }
    }
})

// SignUpPasswordInput.addEventListener('keydown',()=>{
//     SignUpPasswordInput.textContent ='*';
// })
//password nece ulduz edim ?



// SignInUserInput.addEventListener('input',()=>{
//     console.log(SignInUserInput.value);
//     if (localStorage.key(1) == SignInUserInput.value){
//         NotificationText.innerHTML = "Sign In successful!"
//       }
    
// })

// console.log(localStorage.key(1));
// console.log(localStorage.getItem(localStorage.key(1)));


