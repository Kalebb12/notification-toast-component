const button = document.querySelector("button")
const toast = document.querySelector(".toast")
const close = document.querySelector(".close")
const progress = document.querySelector(".progress")


button.addEventListener("click",()=>{
//    disabled button 
    button.disabled = true
    toast.classList.add("active")
    progress.classList.add("active")
    
    
    setTimeout(()=>{
        button.disabled = false
        toast.classList.remove("active")
    },5000)

    setTimeout(()=>{
        progress.classList.remove("active")
    },5300)
})

close.addEventListener("click",()=>{
    toast.classList.remove("active")
    button.disabled = false
    setTimeout(()=>{
        progress.classList.remove("active")
    },300)
})