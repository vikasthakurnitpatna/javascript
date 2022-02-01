const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B", "Z", "F"];
const btn = document.getElementById("mybtns");
const color=document.getElementById("mcolor");
btn.addEventListener("click", function(){
    var hexcolor = '#';
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getrandomnumber()];
    }
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor;
});
function getrandomnumber(){
    return Math.floor(Math.random()*hex.length)
}