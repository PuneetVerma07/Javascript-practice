let count = 0;
let btn = document.querySelector("button")
let progress = document.querySelector(".progress")
 
let delay = Math.floor(Math.random * 90000) + 1000;

btn.addEventListener("click", ()=>{
let intvr = setInterval(()=>{
    if(count <= 99){
        count++;
        console.log(count)
        progress.style.width = `${count}%`
    }
    else{
        btn.textContent = "Downloaded"
        clearInterval(intvr)
    }
}, delay)
})
