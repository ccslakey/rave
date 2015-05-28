$(function () {

  var redy;
  var bluey;
  var greeny;
//selecting the table
//#moTings has the button prepended, but I don't want that
var myTable = $("#moTings");

/*  HOW TO SELECT ELEMENTS ON THE TABLE 
//the table with just the rows
//an individual row
theTable[0]
//selecting a single item of that row
theTable[0].children[0]
*/

$("body").on("submit", "#signupForm", function (e) {
    var $this =  $(this);
    e.preventDefault();
    $.post("/users", $this.serialize()).
      done(function (data) {
        console.log("SAVED", data);
        $this[0].reset()
      });
  });

//squarebutton goes at the top of the table
var $sButt = $("<button class='squareButton'>"+
  "Demo some squares"+"</button>")
  $('#buttonPlace').prepend($sButt);

// clear squares button
var $clear = $("<button class='clearButton'>"+
  "clear the demo squares"+"</button>")
  $('#buttonPlace').prepend($clear);


$sButt.on('click', function(){
    //generates a 5X6 table of squares
    //inside of the table "moTings"
    for (var i=0; i<36; i++){
        squaresGen();
    }
});

$clear.on('click', function(){

  $("#moTings").children()[2].html("")
});


  

//generate a square
function squaresGen(){
    //init random color
    var hue = 'rgb(0,0,0)';
    //init a rave square table item and give it some style
    var $raveSq = $("<td id='rave'></td>")
        $raveSq.css({
    "width": "150px",
    "height": "150px",
    "backgroundColor": hue
    });
      //set a timer to change the hue on
      //this is the color that the user will actully see  
      window.setInterval(function(){
        var hue = 'rgb(' + (Math.floor(Math.random() * redy)) +',' + (Math.floor(Math.random() * greeny)) + ',' + (Math.floor(Math.random() * bluey)) +')';
        $raveSq.css('backgroundColor', hue);
     }, 1000);
    //append the square somewhere
    //also gives the table some params 
    //as to how many things can be there
    //repetitive?
     if ( $("#1").children().length<6){
          $("#1").append($raveSq);
     }
     else if( $("#1").children().length>=6 &&
                $('#2').children().length<6  ) {
       $("#2").append($raveSq);
     }
     else if( $("#2").children().length>=6 &&
                $('#3').children().length<6  ) {
       $("#3").append($raveSq);
     }
     else if( $("#3").children().length>=6 &&
                $('#4').children().length<6 ) {
       $("#4").append($raveSq);
     }
     else if( $("#4").children().length>=6 &&
                $('#5').children().length<6  ) {
       $("#5").append($raveSq);
     }
    }
    
/// rgb slider controls
YUI().use('slider', 'color', function (Y) {
    // sliders
    var rSlider = new Y.Slider({ min: 0, max: 255, value: Math.round(Math.random()*255) }),
        gSlider = new Y.Slider({ min: 0, max: 255, value: Math.round(Math.random()*255) }),
        bSlider = new Y.Slider({ min: 0, max: 255, value: Math.round(Math.random()*255) }),

        // slider values
        rVal = Y.one('#r-val'),
        gVal = Y.one('#g-val'),
        bVal = Y.one('#b-val'),

        // color strings
        hex = Y.one('#hex'),
        rgb = Y.one('#rgb'),
        hsl = Y.one('#hsl'),
        // color chip
        color = Y.one('.color');
    // render sliders
    rSlider.render('#r-slider');
    gSlider.render('#g-slider');
    bSlider.render('#b-slider');


                // register update events
    rSlider.after('thumbMove', function(e) {
        rVal.set('text', rSlider.get('value'));
        updateColors();
    });
    gSlider.after('thumbMove', function(e) {
        gVal.set('text', gSlider.get('value'));
        updateColors();
    });
    bSlider.after('thumbMove', function(e) {
        bVal.set('text', bSlider.get('value'));
        updateColors();
    });

    // update the colors strings
    function updateColors() {
        var r = rSlider.get('value'),
            g = gSlider.get('value'),
            b = bSlider.get('value'),
            rgbStr = Y.Color.fromArray([r,g,b], Y.Color.TYPES.RGB);
        redy = r,
        bluey = b,
        greeny = g;
        color.setStyle('backgroundColor', rgbStr);

        rgb.set('text', rgbStr);

        hex.set('text', Y.Color.toHex(rgbStr));
        hsl.set('text', Y.Color.toHSL(rgbStr));
    }


            
    rVal.set('text', rSlider.get('value'));
    gVal.set('text', gSlider.get('value'));
    bVal.set('text', bSlider.get('value'));
    updateColors();

            });
});


// blank table
