// La recuperation des elements 
const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Evenements
form.addEventListener('submit',e=>{
    e.preventDefault();
    form_verify();
})

// Fonctions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();

    // Username verify
    if (userValue === "") {
        let message ="Username ne peut pas être vide";
        setError2(username,message);
    }else if(!userValue.match(/^[a-zA-Z]/)){
        let message ="Username doit commencer par une lettre";
        setError2(username,message)
    }else{
        let letterNum = userValue.length;
        if (letterNum < 4) {
            let message ="Username doit avoir au moins 2 caractères";
            setError2(username,message)
        } else {
            setSuccess2();
        }
    }

    // email verify
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
    }else{
        setSuccess(email)
    }

    // password verify
    if (pwdValue ==="") {
        let message ="Le passeword ne peut pas être vide";
        setError(password,message)
    }else if(!password_verify(pwdValue)){
        let message = "Le mot de passe est trop faible (8 à 12 caractères)...";
        setError(password,message)
    }else{
        setSuccess(password);
    }
    // pwd confirm
    if (pwd2Value ==="") {
        let message ="Le passeword ne peut pas être vide";
        setError(password2,message)
    }else if( pwdValue !== pwd2Value){
        let message ="Les mots de passe ne correspondent pas";
        setError(password2,message)
    }else{
        setSuccess(password2)
    }
}

function setError(elem,message) {
    const formControl = elem.parentElement;
    const refMsgErr = formControl.querySelector('small');

    // Ajout du message d'erreur
    refMsgErr.innerText = message

    // Ajout de la classe error //css style
    formControl.className = "form-control error";
}
function setError2(elem,message) {
    const formControl = elem.parentElement;
    const refMsgErr = formControl.querySelector('small');

    // Ajout du message d'erreur
    refMsgErr.innerText = message

    // Ajout du style
    refMsgErr.setAttribute("style","color:pink; visibility:visible");
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function setSuccess2(elem) {
    elem.setAttribute("style", "border-color : yellow")
}

function email_verify(email) {
    /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,2}$/.test(email);
}
function password_verify(passeword) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passeword);
}
//----------------

var ent = document.querySelector('h2');
console.log(ent);
ent.addEventListener('click',changeStyle)
 
function changeStyle(e) {
    e.target.setAttribute("style","font-style : italic; border:1px solid red");
  }

