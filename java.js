var navLinks=document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}

function validateName(){
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameMessage = document.getElementById("nameMessage");
    if(name.length>=3){
        nameInput.style.borderColor = "green";
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "green";
        return true;
    }
    else{
        nameInput.style.borderColor = "red";
        nameMessage.textContent = "Name should at least be of 3 characters";
        nameMessage.style.color = "red";
        return false;
    }
}

function validateEmail(){
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(emailPattern.test(email)){
        emailInput.style.borderColor = "green";
        emailMessage.textContent = "Valid email";
        emailMessage.style.color = "green";
        return true;
    }
    else{
        emailInput.style.borderColor = "red";
        emailMessage.textContent = "Enter a valid email address";
        emailMessage.style.color = "red";
        return false;
    }
}

document.getElementById("myform").addEventListener("submit", function(event){
    const isvalidName = validateName();
    const isvalidEmail = validateEmail();
    if(!isvalidName || !isvalidEmail){
        event.preventDefault();
       
    }
    confirm("Successfull, Thanks For Visiting Us.");
});
