
'use strit'
var yourname = prompt('what is your name ?');

var calories;
function calories () {
    var cal = prompt('how much Calories your food have ?');
  var food;
  if (cal > 8000) {
      food  = 'your food is not healthy';
  } else {
    food = 'your food is healthy';
  }
    return food;
}
function age () {
    var yourage = prompt('how old are you ?');
    if ( yourage >=45  ) {
        yourage = '<img src="https://now.tufts.edu/sites/default/files/bodyimages/160516_myplate_older_adults_inside.jpg">';
     } else {
yourage = "take care about your healthy " }
     
return yourage;
}

var output;

var fine = confirm('are you feeling fine?');
if ( fine == true ) {
    output = ' have agood day ';
 } else {
    output =' you have to visit adoctor ';
}
var junkorhealthy = function() {

  var total =7
    var order = prompt('What do you prefer ? "junk" or "healthy"?');
  
    var picture = ''; 
  

  
    while (order !== 'junk' && order !== 'healthy') {
  
      order = prompt('Please enter "junk" or "healthy"...');
  
    }
    
    for(var models = 0; models < total; models = models + 1) {
  
      if (order === 'junk') {
  
        picture = picture + '<p><img src="https://c.ndtvimg.com/k03tb2a_healthy-food_625x300_17_August_18.jpg"></p>'
  
      } else if (order === 'healthy') {
  
        picture = picture + '<p><img src="https://c.ndtvimg.com/k03tb2a_healthy-food_625x300_17_August_18.jpg"></p>'
  
      }
  
    }
  
  

    // output
  
    return picture;
  
  }

  

  document.write( '<h3>' + picture + '</h3>');

document.write( '<h3>' + yourname + '</h3>');

document.write( '<h3>' + output + '</h3>');

