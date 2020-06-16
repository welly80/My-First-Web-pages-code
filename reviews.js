$(document).on('ready', function(){  //Get document product ready function

  //Calling function to load the reviews on the ur using ajax.
  function load_reviews(list_item){
    var list = list_item.find('dl');  //variable list  to find and store the value of the tag used.
    list.empty();  //declare list as empty
    var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil');  //variable promise to hold the ajax value of url declared.

    // calling function done to append the array data on the corretc tags.
    promise.done(function(data){

     for(var idx = 0; idx < data.length; idx++){                                          // use for loop to loop over the data array.

       list.append('<hr class="lineP9">' + ' ' + '<img class="rbt" src="" alt="robot-icon" />' + ' ');

         // Declare each function to apply math random of images rating change every time the event is fire.
        $('.rbt').each(function(){
                 var num = Math.floor(Math.random() * 3 + 1),
                 img = $(this);
                 img.attr('src', 'images/reviewicon'+ num + '.jpg');
                 img.attr('alt', 'src:' + img.attr('src'));
        });

       for(idx2= 0; idx2 < 5; idx2++){   // for loop to loop over the rating values and change for stars
         if(idx2 < data[idx].rating){
           list.append('<b class="fa fa-star checked">');
         }else{
           list.append('<b class="fa fa-star ">');
         }
       }
       // list.append to retrive the values of API nickname and review.
       list.append('<p class="nck"><b>' + data[idx].nickname + '</b></p>');
       list.append('<dd>' + data[idx].review + '</dd>');

         //using jquery to control the CSS for the API used.
        $(".nck").css({'margin-left':'150px'});
        $(".rbt").css({'width':'14%'});
       $('dd').css({'font-size':12, 'margin-left':'100%', 'width':'40%'});  //applying /css rules on <dd> tag.
       $(".lineP9").css({ 'width': '140%',    //get the class lineP3 and applying a new css rules on it.
        'box-shadow': 'none',
       'border-color': 'lightgrey'});

       $('dl').css({'width':'100%', 'height':'auto','font-family':'arial'}); //css rules on <dl> tag.

     }
   });   //End of done function
  }

   $("dl").hide();  // jquery hide the <dl> tag.
  $('#here').on('click', function(event){     //calling function on click to work when the user click on read all reviews bottom.
    event.preventDefault();
    if($("dl").is(":hidden") == true){    //using if statement boolean true false to hide or show <dl>
      $("dl").show();
      $(".lineP8").hide();
    }else{    //otherwise.
      $("dl").hide();
      $(".lineP8").show();
    }
    var list_item = $(this).parent().parent();   //variable list_item to store the value the parent of the paretn on Dom document.
    load_reviews(list_item);  //Send function result to load_reviews function.
  });

});  //End of the document jquery.
