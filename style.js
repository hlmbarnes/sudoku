$(document).ready(function(){
	
    
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





$("#Puzzle_Gen").on('click', function (){

  shuffle();
  RandomArray = $.extend(true,[], easyArray);
  for (i=0; i<=8; i++) {
    var getRandomNumHide = getRandomInt(1, 5); 
    for (j=0; j<getRandomNumHide; j++){
      var hidden = getRandomInt(0,8);
      RandomArray[i][hidden]='';
      }
  }
  alert(RandomArray);

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

$("[id^=Row").on('input', function(e){
  var divD = e.target.id;
  var rID = divD.substring(3, 4);
  var cID = divD.substring(7, 8);
  // alert("Row: " + rID + " Col: " + cID);
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
  for (i=0; i<=8; i++){
   for(j=0; j<=8; j++){
    var divC = $("#Row" + (i + 1) + "Col" + (j+ 1));
    if (easyArray[i][j] != RandomArray[i][j]) {
     
      $(divC).css({"background-color": "red"});
    } else {
        $(divC).css({"background-color": ""});
    }
   }
  }
})



