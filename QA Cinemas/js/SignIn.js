

function showRegistration(){
    document.getElementById('register').style.display= "inline-block";
    document.getElementById('signIn').style.display= "none";
    event.preventDefault();      
    
}
function register(name, age, phone, email, password1, password2){
    // console.log(name, age, phone, email, password1, password2);
    if (password1 != password2){
        alert("Your Passwords do not match");
    }   
    else{
        makeNewUser(name, email, age, phone, password1);        
    } 
    return false;
}
function signIn(email, password){
    // console.log(email ,password);
    attemptToSignIn(email, password);
    
    return false;
}
function forgotDetails(){
    document.getElementById('forgot').style.display= "inline-block";
    document.getElementById('signIn').style.display= "none";
    event.preventDefault();      


    return false;
}
function remindDetails(email){

}









