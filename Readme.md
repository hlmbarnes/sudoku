Project # 1: The Game | Sudoku

Technologies Used //

For this project, I utilized HTML, CSS, jQuery and jQuery plugins. Given the way that I structured my grid, I was unable to use bootstrap for my page positioning or some of my animations such as the dialog (when someone successfully completes the puzzle) or the hover over feature. Instead, I used a combination of CSS styling and jQuery manipulations where I manipulated the dom through strategic IDs for my rows, unique box names, and containers. I will discuss this in further detail below in the "Approach Taken" section. 


Approach Taken //

Similar to my approach for the Tic-Tac-Toe game, I began my project by first creating the basic HTML structure for my page. After a lot of (trial) and error, I realized that with the necessary 9 by 9 grid the Bootstrap Grid system would not easily translate. Instead, I broke my HTML into numerous divs with a top down container approach starting from the surrounding 9_by_9_box to each row to each column. 

Then moving to the basic functionaity of my Sudoku puzzle, I moved into my style.js file and started with a simple random Integer function (including the min and max) which I knew would be needed globally as I would be randomly generating numbers between 1-9 (representing both the possible number values and grid boxes). Respectively I created an array (easyArray) that represented the coordinates of the box by way of the index values of the array (which Row) and which column. I decided to not tackle the concept of randomly shuffling the array values without breaking the rules of the game (no repeating values from 1-9 in any column, row, or 3x3 box) until later in my process. Instead, I focused on how values would randomly be hidden in the grid. After creating an empty array to which I would later push values into, I began an on-click function usuing jQuery DOM manipulation for when the Generate Puzzle button was clicked. Inside that function, I first copied the existing easyArray, put it though a Shuffle function (wil discuss later) and pushed it into the empty RandomArray using $.extend() jQuery function (because of errors with .splice for an array of arrays). I then created a several layered for loop that would first generate a random number of spaces to hide in each row, then randomly select another number to represent which index in the array (or collumn) would have a value of null-- essentially hiding random boxes in the grid. Once that was working, I also made sure that if the value was hidden, the box input was editable with another DOM manipulation .attr(contenteditable, 'true'). This way the player could type in their guessed solution for the blanked out boxes. Conversely, I made sure the provided boxes were not able to be edited for risk of the puzzle being altered. 

I next set out on the task of clearing the puzzle if the player wanted to start a new game or to clear the page. To do this I created another on-click event for the "Clear" button which went through the two layer for loop of the rows and columns, pushing those into a variable divB and forming a string that would match the unique IDs I gave each of the boxes. From there I used the DOM to change the attribute for contenteditable to be false (so that no one can edit the board when it has been cleared) and changed the css background  and text attribute to ""; essentially blanking the board. 

Next I tackled the check feature so that the player could check the status of their current puzzle (if their solutions are currently correct) or to check and see if they solved the puzzle completely. With another on-click event set up to the "Check" button, I created another function with the two layer for loop to again go through each indiviual box by Row + Col. This was stringified into another variable divC which would be maipulated by the DOM should the easyArray[i][j] not match the same index in RandomArray[i][j]. If they were unequal (essentially saying the RandomArray did not match its solved puzzle-- easyArray) the background color would be highlighted in a contrasting color for all the boxes with the value discrepancies. Conversely, if they did match the background color would be set to '' and if the whole puzzle was correct another event would be triggered for the dialog text to pop up/ show and announce that the player had correctly solved it. 

Now that I had the MVP of the game down, I wanted to add more complexity to my game by both making my shuffle function more complex and having varying degrees of puzzle difficulty (Easy, Medium, Hard). Firstly, I have to acknowdgle my suffle function in it's original form. For the MVP, I simply created a global function that would randomly generate 2 numbers between 1 and 9 and as long as they didn't match, would swap them. With the original array (easyArray) being an already solved puzzle with correct values, as long as I did it row by row (using a for loop) I would swap the same two randomly chosen values essentially ranomly shuffling the numbers in a very small way. To make this more random, I created two variables (switch1 and switch2) to represent those random integers. With a whie loop based on the premise that these two variables were not equal, the numbers were then passed through the two layer for loop switching those two values. With the random number, the shuffle would then randomly select which pair of numbers would be swapped every time the Generate puzzle button is clicked. As for the varrying levels of the puzzle, I created a radio button / drop down and added a variable equal to the selected value in the respective levels div. Then there was a if, if else, else loop created depending on whether the selected value was equal to "Easy", "Medium" or "Hard". Here I originally varied the difficulty by increasing the number of hidden boxes in each row. I quickly realized with my hard level, that although I was picking a random number from 8-9, the number of boxes being hidden didnt represent this number. Troubleshooting this issue, I used a splice function and a position variable to keep track and subtract the existing options in the array so that the random number generator was not repetive in its results, in turn making it more truly ranomly hidden on the board. 

Lastly, I went about using jQuery plugins and styling to get the more styled esthetic that I wanted to get and the features such as hover and the module pop-up via dialog. 


Installation Instructions //

1. Select the desired puzzle difficulty from the dropdown beneath the grid.
2. Click the "Generate Puzzle" button to generate your random puzzle. 
3. Fill in the empty boxes in the grid only with values 1-9 and satisfying these three rules:
	i) you cannot have any number repeated within any row
	ii) you cannot have any number repeated within any column
	iii) you cannot have any number repeated within the 3 by 3 boxes indicated by the boldened vertical and horizontal lines. 
4. Check and see if you solved your puzzle correctly by pressing the "Check" button. 
5. Once completed or defeated, you can clear your board or select your new desired difficulty and click the "Generate Puzzle" button again. 

*optional but highly suggested to be sipping tea or flying on a plane while playing this game*

Unsolved Problems //

My first unsolved problem would be how to do my grid in such a way that I could use Bootstrap. Not using as many containers and how to fit 9 rows into the 12 column grid was exceedingly difficult for me. I also would have loved to have more time to make my website responsive. Due to the size of my grid, my game does fit on smaller screens such as a tablet or iPhone, but if there was a screen smaller than 600px wide, the whole game would break. I would like to better figure out how to remedy this with the media queries property. 

Additionally, I would like to find a more complex way to shuffle or to check the values are not repeated within the 3 by 3 boxes. If I did not start with a solved puzzle that would then be shuffled, my functionality would not currently work. That being said, I did begin working on some (non DRY) code in which I checked each 3 by 3 box by looking at the sum of the values of specific boxes. Without having to write out those unique IDs, I would love to figure out a way to use a constructor to check that there is no value repition (by way of sum) or some other function. 

I tried to reduce my code as much as I could, there were some CSS elements that seemed necessarily repetitive due to the varying border styles necessary for some of the boxes to differentiate the 3 by 3s. I would like to see if I could better simplify this, or if this is again a result of the way I set of the grid of containers. 

Lastly, if I had more time, I would like to figure out how I could have a module pop up or the background change outmatically without having to press the check button. That was something I had a very difficult time wrapping my head around conceptually. 


