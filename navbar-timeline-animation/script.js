let tl = gsap.timeline()
tl.pause()
tl.to("#full",{
    right:"0",
    duration:0.5,
})
tl.from("#full #cross",{
    x:50,
    duration:0.2,
    opacity:0
})
tl.from("#full ul li",{
    x:50,
    duration:0.2,
    opacity:0,
    stagger:0.2 
})

document.querySelector("#menu-open").addEventListener("click",()=>{
    tl.play()
})

document.querySelector("#cross").addEventListener("click",()=>{
    tl.reverse()
})
