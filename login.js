function checkUsername() {      //Declare a function

var elMsg = document.getElementById('feedback');   //Get feedback element    

if (this.value.length < 5) {    //If username too short
elMsg.textContent = 'Username must be 5 characters or more';  //Set msg    
} else {    //Otherwise
elMsg.textContent = 'accepted';     //Display message   
}
}

var elUsername = document.getElementById('username');  //Get username input
//When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

$('.message a').click(function(){
    $('form').animate({height:"toggle", opacity: "toggle"}, "slow");    
    }); 