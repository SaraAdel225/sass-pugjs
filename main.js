let element = document.querySelector(".scroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", ()=>{
    let scrollTop = document.documentElement.scrollTop
    element.style.width = `${(scrollTop / height) * 100}%`
})