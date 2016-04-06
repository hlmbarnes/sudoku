$(document).ready(function(){

    
});

var easyArray = [ 
	[1,2,3,4,5,6,7,8,9],
 	[1,2,3,4,5,6,7,8,9],
 	[1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9] ]

var RandomArray = easyArray.slice();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

$("#Puzzle_Gen").on('click', function (){
// var hideBoxes = function(easyArray){
  
  for (i=0; i<=8; i++) {
    var getRandomNumHide = getRandomInt(1, 5); 
    for (j=0; j<getRandomNumHide; j++){
      var hidden = getRandomInt(0,8);
      RandomArray[i][hidden]='';

      }
  }
  // }
  alert(RandomArray);

  // var box = $("#Row1Col1");

  // $("#Row1Col1").text(10);
  for (i=0; i<=8; i++){
    for (j=0; j<=8; j++){
      var divA = $("#Row" + (i + 1) + "Col" + (j + 1));
      var rAndC = $(divA);

      rAndC.text(easyArray[i][j]);
      if (rAndC.text()==='') {
        rAndC.attr("contentEditable", 'true');
      }

    }
  }
});

$()



// This is the random min and max function
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// This function is a click to hide value
    // $("[id^=Row]").on("click",function(e){
    //     var clear= e.target.id;
    //     alert("[id=" + clear + "]");
    //     var tag= "[id=" + clear + "]" ;
    //     // $(tag).text("");
    //     tag.toggle();

    // });