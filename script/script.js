var cal = prompt('how much Calories your food have ?');
var food ;
var yourname = prompt('what is your name ?');
var yourage = prompt('how old are you ?');
var fine =confirm('are you feeling fine?');
var output
if (cal > 8000){
    food = 'your food is not healthy';
}
else if (cal < 8000){
    food = ' your food is healthy ';
} else 
if ( fine ){
    output= 'have agood day ';
}else {
    output='you have to visit adoctor ';
}
    

document.write( '<h3>' + yourname + '</h3>');
document.write( '<h3>' + yourage + '</h3>');
document.write( '<h3>' + food + '</h3>');