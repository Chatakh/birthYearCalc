function calculate(){
    var number = document.getElementById("number"). value;  
    if(number == "" || number == 0){
      alert('Please Type Your Correct Age');
       return; }
   var date = new Date().getFullYear(); 
   var birthyear = number - date;
    document.getElementById("year").style.display="block";
    document.getElementById("year").innerHTML = "your birth year is " +birthyear;
 }
           document.getElementById("year").style.display="none";
    document.getElementById("button").onclick = function(){calculate();}