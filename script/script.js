var cal = prompt('how much Calories your food have ?');
var food ;

if (cal > 8000){
    food = 'your food is not healthy';
}
else if (cal < 8000){
    food = ' your food is healthy ';
} 
document.write( '<h3>' + food + '</h3>');
