cb=document.getElementById("contact-b")
cb.addEventListener(click,()=>{
    foot=document.getElementById("foot")
    foot.classList.remove('ani')
    void foot.offsetWidth;
    foot.classList.add('ani')
})