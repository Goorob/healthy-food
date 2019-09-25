

var yourname = prompt('what is your name ?');
var yourage = prompt('how old are you ?');
var calories
function calories() {
    var cal = prompt('how much Calories your food have ?');
  var food;
  if (cal > 18) {
      food  = 'your food is not healthy';
  } else 
    food = 'your food is healthy';
    return food;

var output

var fine =confirm('are you feeling fine?');
if ( fine==true ){
    output= 'have agood day ';
 } else 
    output='you have to visit adoctor ';
}

document.write( '<h3>' + yourname + '</h3>');
document.write( '<h3>' + yourage + '</h3>');
document.write( '<h3>' + food + '</h3>');

