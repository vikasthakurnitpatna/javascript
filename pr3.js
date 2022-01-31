// 
const items=["green","red","yellow", "blue","pink"];
 
var btn = document.getElementById("mybtns");
btn.addEventListener("click",getRandomNmber)

function getRandomNmber(){
    var item = items[Math.floor(Math.random()*items.length)]
    document.body.style.backgroundColor=item
}