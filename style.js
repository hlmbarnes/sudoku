$(document).ready(function(){

    
});

var Array = [ 
	[1,2,3,4,5,6,7,8,9],
 	[1,2,3,4,5,6,7,8,9],
 	[1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9], 
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9] ]

var RandomArray = Array.slice();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var hideBoxes = function(Array){
	for (i=0; i<=8; i++) {
		var getRandomNumHide(1, 5);
      for (j=0; j<getRandomNumHide; j++){
        var hidden = getRandomInt(0,8);
        RandomArray[i].hidden='';
      }
  
 		
		
		


}


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