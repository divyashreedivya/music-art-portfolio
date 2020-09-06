
var i=0;
var txt=' Namaste! Namaskara!';
var speed=50;

function typing(){
    if(i<txt.length){
        document.getElementById("intro").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typing,speed);
    }   
}
