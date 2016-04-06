$(document).ready(function(){
	
    
});


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


var RandomArray = easyArray.slice();

var shuffle = function (easyArray){
  for (i=0; i <= 8; i++){
    var num = easyArray[i];
    for (j=0; j<=8; j++); {
      if (easyArray[i][j] = 3){
        easyArray[i][j]= 7;
      }
    }
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

$("#Puzzle_Gen").on('click', function (){
  
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

      rAndC.text(easyArray[i][j]);
      if (rAndC.text()==='') {
        rAndC.attr("contentEditable", 'true');
      }

    }
  }
  
  // $("#Puzzle_Gen").on('click', shuffle(){})

});





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