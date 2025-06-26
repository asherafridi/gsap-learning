gsap.from("#box",{
    height:"100px",
    width:"100px",
    duration:5,
    border:"1px solid white",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        pin:true,
        scrub:2,
        // start:"top 0%",
        // end:"top -100%"
    }
})
