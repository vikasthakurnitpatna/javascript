// 
const items=["green","red","yellow", "blue","pink","#F1f5f8"];
const color=document.getElementById("mcolor");
 
var btn = document.getElementById("mybtns");
btn.addEventListener("click",getRandomNmber)

function getRandomNmber(){
    var item = items[Math.floor(Math.random()*items.length)]
    document.body.style.backgroundColor=item
    console.log(item)
    color.textContent=item
    
}