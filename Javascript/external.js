function getComputerChoice()
{
    const a= ["rock", "paper", "scissor"];
    const i =Math.floor(Math.random()*3);
    return a[i];
}
function playRound(playerselection, computerSelection)
{
    let a, b, c;
    a=computerSelection.toString().toLowerCase();
    b=playerselection.toString().toLowerCase();
    if ((a==="rock")&&(b!="rock"))
    {
          if(b==="paper")
          {
               c="You Lose";
          }
          else
          {
            c="You Win";
          }

    }
    if ((a==="paper")&&(b!="paper"))
    {
          if(b==="scissor")
          {
               c="You Lose";
          }
          else
          {
            c="You Win";
          }

    }
    if ((a==="scissor")&&(b!="scissor"))
    {
          if(b==="rock")
          {
               c="You Lose";
          }
          else
          {
            c="You Win";
          }

    }
    if(c==="You Win")
    {
        console.log("congrats, you won "+a +" defeats " + b);
    }
    else if(c==="You Lose")
    {
        console.log(`Better Luck!Next Time`);
    }
    

}

let a=prompt("please enter  rock or paper or scissor");
let b= getComputerChoice();

playRound(a, b);
