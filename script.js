let left = document.querySelector(".left")
let right = document.querySelector(".right")

left.addEventListener("click",(e)=>{
    left.innerHTML = `<div class="absolute w-14 h-1 rounded-full bg-[#1d9bf0] bottom-0"></div>For You`
    right.innerHTML = `Following`
})
right.addEventListener("click",(e)=>{
    right.innerHTML = `<div class="absolute w-14 h-1 rounded-full bg-[#1d9bf0] bottom-0"></div>Following`
    left.innerHTML = `For You`
})