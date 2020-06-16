//Calling a function to count how many times a user cliked on radio bottoms
function clickCounter() {

  // nested if statement to check browser storage compatibility and instruct the action js need to take  it...
  if(typeof(Storage) !== "undefined") {

    if(sessionStorage.clickcount){
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else{
      sessionStorage.clickcount = 1;
    }
    //if the stamtent above works, get id result in the html and add the text plus the value of  the key clickcount  in the sessionStorage.
    document.getElementById("result").innerHTML = "<b>Thank you very much for your opinion about this product :))</b>"
    + "  " + "<b>" + sessionStorage.clickcount + "</b>" + " " + "<b>vote today(s).</b>";
  } else{  //otherwise display the message below
    document.getElementById("result").innerHTML = "Sorry that didn't work well..:(";
  }
}    //End of function.
