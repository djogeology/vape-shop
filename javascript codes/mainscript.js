var navSlide= () =>{
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active'); //togle nav//
        navLinks.forEach((link, index) =>{
            if(link.style.animation) { //animation link//
                link.style.animation="";}
            else {
                link.style.animation=`navLinkFade 0.5s ease forwards
                 ${index / 7+ 0.3}s`;
            };
            })
        })
    }
navSlide();
// box animation//
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
// signup//
const signUpStr= e=>{
    let UserName=document.getElementById("usr").value;
    let UserPsw =document.getElementById("psd").value;
    let UserEmail=document.getElementById("eml").value;

 if ( UserName.length ==0){
    alert("Please fill in a User name")
 }
 else if ( UserPsw.length ==0){
    alert("Please fill in a password")
}
else if(UserEmail.length ==0){
    alert("Please fill in an Email")
}
else {
    let userData= JSON.parse(localStorage.getItem('userData')) || [];
    let dup= userData.length && 
    JSON.parse(localStorage.getItem('userData')).some(data =>
    data.UserName == UserName &&
    data.UserEmail == UserEmail);
  if(!dup){
    userData.push({UserName,UserEmail,UserPsw});
    localStorage.setItem('userData',JSON.stringify(userData));
    // document.querySelector(".form-section").reset();
    // document.querySelector('.reguserName ele').focus();
    alert ("Your Account has been created, Please login.");
}

  else {
    alert(' Sorry you already have an account. Please login')
}}
e.preventDefault();
 }

 // LOGIN//
 function signIn(e) {
    let user = document.getElementById('usr').value, 
        psd = document.getElementById('psd').value;
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    let dup = userData.length && 
    JSON.parse(localStorage.getItem('userData')).some(data => data.UserName== user && data.UserPsw == psd);
    if(!dup){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/html pages/homePage.html";
    }
    e.preventDefault();
}