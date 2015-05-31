////////////////
////////////////
//THIS IS THE ABOUT PAGE JS//
////////////////
////////////////


$(function () {
//places a square in the What are Rave Squares section
squaresGen();

  

//generate a square
function squaresGen(){
    //init random color
    var hue = 'rgb(0,0,0)';
    //init a rave square table item and give it some style
    var $raveSq = $("<td class='rave'></td>")
        $raveSq.css({
    "width": "150px",
    "height": "150px",
    "backgroundColor": hue
    });
      //set a timer to change the hue on
      //this is the color that the user will actully see  
      window.setInterval(function(){
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +')';
        $raveSq.css('backgroundColor', hue);
     }, 600);
      $("#postHere").append($raveSq);
   };



});


// blank table
