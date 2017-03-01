$(document).ready(function(){
  $('.box').hover(
    function(){
      var $this = $(this);
      $this.data('bgcolor', $this.css('background-color')).css('background-color', '#73BFBB');
    },
    function(){
      var $this = $(this);
      $this.css('background-color', $this.data('bgcolor'));
    }
  ); 

  $(function() {
    $( "#buttons" ).buttonset();
  });
  $("#buttons").css("opacity", ".65");
  // if user clicked on button, the overlay layer or the dialogbox, close the dialog  
  $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
    $('#dialog-overlay, #dialog-box').hide();   
    return false;
  });
  
  // if user resize the window, call the same function again
  // to make sure the overlay fills the screen and dialogbox aligned to center  
  $(window).resize(function () {
    
    //only do it if the dialog box is not hidden
    if (!$('#dialog-box').is(':hidden')) popup();   
  }); 


});



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var RandomArray = []; 

var easyArray = [ 
  [8,2,7,1,5,4,3,9,6],
  [9,6,5,3,2,7,1,4,8],
  [3,4,1,6,8,9,7,5,2], 
  [5,9,3,4,6,8,2,7,1], 
  [4,7,2,5,1,3,6,8,9], 
  [6,1,8,9,7,2,4,3,5],
  [7,8,6,2,3,5,9,1,4],
  [1,5,4,7,9,6,8,2,3],
  [2,3,9,8,4,1,5,6,7] ]

var RandomArraySolution = [];

var shuffle = function (){
  var switch1 = getRandomInt(1,9);
  var switch2 = getRandomInt(1,9);
  while (switch1 ===switch2){
    switch1 = getRandomInt(1,9);
    } for (i=0; i <= 8; i++){
    for (j=0; j<=8; j++) {
      if (easyArray[i][j] === switch1){
        easyArray[i][j] = switch2;
        } else if (easyArray[i][j] === switch2) {
        easyArray[i][j] = switch1;
        }
      }  
      }
}


$("#Puzzle_Gen").on('click', function () { 
  shuffle();
  var level = $("#level :selected").val();
  RandomArray = $.extend(true,[], easyArray);
  if (level === "Easy") {
    for (i=0; i <= 8; i++) {
    var getRandomNumHide = getRandomInt(1,5);
    var choices = [0,1,2,3,4,5,6,7,8];
      for (j=0; j < getRandomNumHide; j++){
      var index = getRandomInt(0, choices.length - 1); 
      var position = choices.splice(index, 1)[0];
      RandomArray[i][position]='';
      }
    }
  } 

  else if (level === "Medium") {
    for (i=0; i <= 8; i++) {
      var getRandomNumHide = getRandomInt(4,7);
      var choices = [0,1,2,3,4,5,6,7,8];
      for (j=0; j < getRandomNumHide; j++){
        var index = getRandomInt(0, choices.length - 1); 
        var position = choices.splice(index, 1)[0];
        RandomArray[i][position]='';

      }
    }
  }

  else {
    for (i=0; i<=8; i++) {
      var getRandomNumHide = getRandomInt(7,8);
      var choices = [0,1,2,3,4,5,6,7,8];
      for (j=0; j < getRandomNumHide; j++){
        var index = getRandomInt(0, choices.length - 1); 
        var position = choices.splice(index, 1)[0];
        RandomArray[i][position]='';
      }
    }
  }

  for (i=0; i<=8; i++){
    for (j=0; j<=8; j++){
      var divA = $("#Row" + (i + 1) + "Col" + (j + 1));
      var rAndC = $(divA);
      rAndC.text(RandomArray[i][j]);
      if (rAndC.text()==='') {
        rAndC.attr("contentEditable", 'true');
      }
    } 
  }

});


 // $("[id^='Row'").on('input', function(e){
 $("9_by_9_box").on('input', function(e){

  var divD = e.target.id;
  var rID = divD.substring(3, 4);
  var cID = divD.substring(7, 8);
  RandomArray[rID-1][cID-1] =$("#" +divD).text();
});

$("#Puzzle_Clear").on('click', function(){
  for(i=0; i<=8; i++) {
    for (j=0; j<=8; j++) {
      var divB = $("#Row" + (i + 1) + "Col" + (j+ 1));
      var rAndC2 = $(divB);
      rAndC2.attr("contentEditable", 'false');
      rAndC2.text("");
      $(divB).css({"background-color": ""});
    }
  }
})



$("#check").on('click', function(){
  var counter = 0;
  for (i=0; i<=8; i++){
   for(j=0; j<=8; j++){
    var divC = $("#Row" + (i + 1) + "Col" + (j+ 1));
    if (easyArray[i][j] != RandomArray[i][j]) {
      $(divC).css({"background-color": "#FECBAE"});
      counter++;
    } else {
        $(divC).css({"background-color": ""})

    }
   }
  } if(counter === 0) {
// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  // display the message
  $('#dialog-message').html(message);

    }

})


