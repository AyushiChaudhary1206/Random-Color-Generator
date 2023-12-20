let btn=document.getElementById("btn")
let input=document.querySelector("input")
let body=document.querySelector("body")
function generate(){
let digits="0123456789ABCDEF";
let color="#";

for(let i=0 ; i<6 ; i++){
    let random=Math.floor(Math.random()*16)
    color+=digits[random]
   
}
body.style.backgroundColor=color
input.value=color
}
btn.addEventListener("click",function(){
generate()
})