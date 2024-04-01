const onScroll=()=>{
    let head=document.querySelector(".head");
    window.scrollY>=15?head.classList.add("head-scroll"):head.classList.remove("head-scroll")
}
window.addEventListener("scroll",onScroll)
