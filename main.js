var y=Math.floor(Math.random()*100+1);

//count the number of guesses
var guess=1;

document.getElementById("submitguess").onclick=function(){

    //here user will enter a number 
    var x=document.getElementById("guessField").value;


    if(x==y)
    {
        alert("Congratulations!!You have Guessed Right in "+guess + "Guess");
    }
    else if(x>y)
    {
        guess++;
        alert("OPs sorry!! Try a smaller number");

    }
    else
    {
        guess++;
        alert("OPs sorry!! Try a Greater number");
    }

}
