const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
body.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        ease: "back.out(2)",
    });
})

const imgBox= document.querySelector("#img-box");

imgBox.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        height:"100px",
        width:"100px",
    })
    cursor.innerHTML="View More";

});
imgBox.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        height:"20px",
        width:"20px",
    })
    
    cursor.innerHTML="";
});