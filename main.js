//Random Number with maths function
var y=Math.floor(Math.random()*100+1);//95

var guess=1;
document.getElementById("submitguess").onclick=function(){
  
 var x= document.getElementById("GuessField").value;//86
  
  if(x==y){
    alert("Congratutaions😀😍!! You have got the number " +guess+ " Times." )
  }
  else if(x>y){
    guess++;
    alert("Sorry!!🙄.Try a Smaller Number")
  }
  
  else {
    guess++;
    alert("Sorry!!🙄.Try a Larger Number")
  }
}
