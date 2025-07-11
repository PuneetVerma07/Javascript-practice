function setDarkOrLight(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add("dark")
    document.body.classList.remove("light")
}else{
    document.body.classList.add("light")
    document.body.classList.remove("dark")
}
}


if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"))
}else{
setDarkOrLight();
}

let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light")
        document.body.classList.remove("dark")

        localStorage.setItem("theme", "light")
    }else{
        document.body.classList.add("dark")
        document.body.classList.remove("light")

        localStorage.setItem("theme", "dark")
    }
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", ()=>{
    if(!localStorage.getItem("theme")){

        setDarkOrLight();
    }
})

