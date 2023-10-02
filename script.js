const colors=[1,3,4,5,6,7,8,"A","B","C","D","E","F"];
const bnt=document.getElementById("btn");
const color=document.querySelector(".color");
bnt.addEventListener("click",function(){
let hexcolor="#";
for(let i=0 ;i<6;i++){
  hexcolor+=colors[getRandomNumber()];
}
color.textContent=hexcolor
  document.body.style.backgroundColor=hexcolor ;
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
