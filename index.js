function increment(){
    let countE1=document.getElementById("count");
    let currentcount=countE1.innerText;
    let updatedcount=parseInt(currentcount) +1
    countE1.innerText=updatedcount;

}
function decrement(){

    let count1=document.getElementById("count");
    let currentcount=count1.innerText;
    let updatedcount=parseInt(currentcount) -1
    count1.innerHTML=updatedcount;
}
function reset(){
    let count2 = document.getElementById("count")
    count2.innerHTML = 0;
 }