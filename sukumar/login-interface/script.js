let email=document.getElementById("email-click");
let password=document.getElementById("password-click");
let  error_email=document.getElementById("invaild-email")
let  error_password=document.getElementById("invaild-password")
let login_form=document.getElementById("login-form")
/*
just for learning creating manual data in local storage

*/

const credintals={
    emailfromStorage:"user@gmail.com",
    passwordtoStorage:2442
}
localStorage.setItem("credintals",JSON.stringify(credintals));




email.addEventListener("blur",()=>{
    if(email.value.trim()===""){
         error_email.textContent="Required email..."
        error_email.style.display="block"
        return
    }
    error_email.style.display="none"
})
password.addEventListener("blur",()=>{
    if(password.value.trim()===""){
        error_password.textContent="Required Password..."
     error_password.style.display="block" 
     return
    }
    error_password.style.display="none"
})



//
/*
just for learning creating manual data in local storage and retreving the data
*/
 function dataFromlocalStorage(){
let {emailfromStorage,passwordtoStorage}=JSON.parse(localStorage.getItem("credintals"))
return {emailfromStorage,passwordtoStorage}
}


 function checkforValidation(inputEmail,inputPassword,emailfromStorage,passwordtoStorage){
   
    error_email.textContent=""
    error_password.textContent=""
    error_email.style.display="none"
    error_password.style.display="none"

    console.log(typeof(inputPassword))

  if(inputEmail!==emailfromStorage){
    error_email.textContent="Wrong Email"
    error_email.style.display="block"
   return false
  }
  
  if(Number(inputPassword)!==passwordtoStorage){
    error_password.textContent="Wrong Password1"
    error_password.style.display="block"
    return false
  }
  return true

 }

login_form.addEventListener("submit",(event)=>{
event.preventDefault();
console.log("strated")
if (email.value.trim()==="" && password.value.trim()===""){
    error_email.style.display="block"
     error_password.style.display="block"
}
 error_email.style.display="none"
     error_password.style.display="none"

if(email.value.trim()===""){
    error_email.style.display="block"
}
else{
    error_email.style.display="none"
}

if(password.value.trim()===""){
    error_password.style.display="block"
}
else{
    error_password.style.display="none"
}


    let inputEmail=email.value
    let inputPassword=password.value

     if(inputEmail==="" || inputPassword===""){
        return
     }

     //retreving creditials 
    let {emailfromStorage,passwordtoStorage}=dataFromlocalStorage()

      //verifying creditials validaton
   let value= checkforValidation(inputEmail,inputPassword,emailfromStorage,passwordtoStorage)
   console.log(value)

})



let show_passwod=document.getElementById("show-passwod")
let encrypit_passwod=document.getElementById("encrypit-password")
show_passwod.addEventListener("click",()=>{
    show_passwod.style.display="block"
    encrypit_passwod.style.display="none"
})

