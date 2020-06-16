// create an event listener to check if Submit button has been pressed
// you can also use document.getElementById to select submit button
document.getElementById("bookingform").addEventListener("submit", function (e) {

    // prevent default form behaviour which is send to another page, we want to stay here
  // so we can display required information
  e.preventDefault();

    // remove CSS hidden class so the details appear on the page
  document.getElementById("results").classList.remove("hidden")

  // grab all of the submited details and store in variables
  var hotelNumber = document.getElementById("hotel").value;
  var firstName= document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var address = document.getElementById("address").value;
  var guests = document.getElementById("guests").value;
  var beds = document.getElementById("beds").value;
  var textArea = document.getElementById("inquires").value;
var displaySuites = document.getElementById("Suites").value;
var displayMeals = document.getElementById("Meals").value;

  var suite_prices = new Array();
 suite_prices["honeymoon"]=190;
 suite_prices["dulux"]=170;
 suite_prices["double"]=150;
 suite_prices["standard"]=100;

  var eventMealsArray = new Array();
  eventMealsArray["breakfast"]=5;
  eventMealsArray["lunch"]=10;
  eventMealsArray["dinner"]=10;


 function getSuitesPrice()
{
    var suitesPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["bookingform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedSuites = theForm.elements["suite"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i <selectedSuites.length; i++)
    {
        //if the radio button is checked
        if(selectedSuites[i].checked)
        {

            suitesPrice = suite_prices[selectedSuites[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return suitesPrice;
}


function breakfastPrice()
{
    var breakfastPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["bookingform"];
    //Get a reference to the checkbox id="includecandles"
    var includeBreak = theForm.elements["meals"];

    //If they checked the box set candlePrice to 5
    if(includeBreak.checked==true)
    {

     breakfastPrice=5;
    }
    //finally we return the candlePrice
    return  breakfastPrice;
}


function lunchPrice()
{
    var lunchPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["bookingform"];
    //Get a reference to the checkbox id="includecandles"
    var includeLunch = theForm.elements["lunch"];

    //If they checked the box set candlePrice to 5
    if(includeLunch.checked==true)
    {
     lunchPrice=10;
    }
    //finally we return the candlePrice
    return lunchPrice;
}

function dinnerPrice()
{
    var dinnerPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["bookingform"];
    //Get a reference to the checkbox id="includecandles"
    var includeDinner = theForm.elements["dinner"];

    //If they checked the box set candlePrice to 5
    if(includeDinner.checked==true)
    {
     dinnerPrice=10;
    }
    //finally we return the dinnerPrice
    return dinnerPrice;
}



  // check if booking is eligible for a discount, set discount to null so it will be default
  // for less than 6 people
  var discount = "null"

  // this will be used on confirmation so people can see if discount has been applied
  var displayDiscount = "Not eligible"

  // if 6 or more people but less than 10 discount is 10%
  if (guests >= 6 && guests < 10) {
    // 10% in mats is 0.1
    discount = 0.1
    displayDiscount = "10%"
  }

  // if 10 or more guests, discount is 15%
  if (guests >= 10) {
    discount = 0.15
    displayDiscount = "15%"
  }

  // assign captured data to correct divs
  document.getElementById("hotel-Number").innerHTML = hotelNumber;
  document.getElementById("fname").innerHTML = firstName;
  document.getElementById("lname").innerHTML = lastName;
  document.getElementById("address-output").innerHTML = address;
  document.getElementById("disc-eligibility").innerHTML = displayDiscount;
  document.getElementById("guests-output").innerHTML = guests;
  document.getElementById("suite-output").innerHTML = displaySuites;
  document.getElementById("beds-output").innerHTML = beds;
  document.getElementById("meals-output").innerHTML = displayMeals;
  document.getElementById("text-output").innerHTML = textArea;


    // number of rooms is guests devided by 2. Used math ceil here to round UP where in case
  // of
   // for example 9 guests you would need 5 rooms, but division gives 4.5 rooms which is
  // impossible
  document.getElementById("rooms-output").innerHTML = Math.ceil(guests / 2);


// calculate and display original price
  function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totalPrice = getSuitesPrice() + breakfastPrice() + lunchPrice() + dinnerPrice();

 var originalPrice = (guests * totalPrice);

    discountedPrice = originalPrice - (originalPrice * discount)
    saving = originalPrice - discountedPrice

return originalPrice
  }

document.getElementById("price").innerHTML = "£" + calculateTotal();

  // declare empty discountPrice and saving variables to hold our result for both cases
  var discountedPrice
  var saving
  // check if discount needs to be calculated
  if (discount != null) {

      // discount is applied
    // calculate discount

      // append £ signs
    discountedPrice = "£" + discountedPrice
    saving = "£" + saving
  }

    else {

      // discount is not applied
    discountedPrice = "N/A"
    saving = "N/A"
  }


  // regardless of the discount eligilibity display values
  document.getElementById("disc").innerHTML = saving
  document.getElementById("price-disc").innerHTML = discountedPrice

});
