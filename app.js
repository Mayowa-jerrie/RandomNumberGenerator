 const count = document.querySelector(".count")
 const resetCount = document.querySelector(".Reset")
 const sub = document.querySelector(".subtract")
 const add = document.querySelector(".add")

 add.addEventListener("click", () => {
    count.innerHTML++;
    setColor ()
 });
 sub.addEventListener("click", () => {
    count.innerHTML--;
    setColor ()
 });
 resetCount.addEventListener("click", () => {
    count.innerHTML = 0;
    setColor ()
 });

 function setColor (){
    if (count.innerHTML > 0){
        count.style.color = "yellow"
    } else if (count.innerHTML < 0){
        count.style.color = "orangered"
    }else {
        count.style.color = "white"
    }
 }

