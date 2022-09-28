let randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

let randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

let win = (randomNumber1>randomNumber2) ? 
document.querySelector("h1").textContent = "Player 1 wins!!!"  :
(randomNumber1<randomNumber2) ? document.querySelector("h1").textContent = "Player 2 wins!!!"  :
document.querySelector("h1").textContent = "DRAW!!!11";