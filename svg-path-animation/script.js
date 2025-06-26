

let style = document.querySelector("#style");

let path = `M 10 100 Q 400 100 790 100`;
let finalPath =`M 10 100 Q 400 100 790 100`;


style.addEventListener("mousemove",function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y}  790 100`;

    gsap.to("#style path",{
        attr:{d:path},
        duration:0.2,
        ease: "power3.out",
    })
});

style.addEventListener("mouseleave",(dets)=>{

    gsap.to("#style path",{
        attr:{d:finalPath},
        duration:0.8,
        ease: "elastic.out(1.1,0.5)",
    })
});
