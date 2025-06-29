const text = document.querySelector("#main h1").textContent

const splittedText = text.split("");
console.log(splittedText);

var clutter="";

splittedText.forEach((a,id)=>{
    var half = Math.floor(splittedText.length/2)

    if(id<half){
        clutter+=`<span class="a">${a}</span>`
    }else{
        clutter+=`<span class="b">${a}</span>`
    }
})

document.querySelector("#main h1").innerHTML= clutter


gsap.from("#main .a",{
    y:50,
    duration:0.5,
    stagger:0.2,
    opacity:0,
})
gsap.from("#main .b",{
    y:50,
    duration:0.5,
    stagger:-0.2,
    opacity:0,
})