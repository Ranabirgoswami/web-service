const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),//el=element top level element that have all element in it like main
    smooth: true,
});



function firstPageAni()
{
    var tl = gsap.timeline();

    tl.from("#page1 nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })

 .to(".bound",{
    y:0,
    ease:Expo.easeInOut,
    duration:1.9,
    stagger:.1
})
} 
var timeout;

function circlesquze(){
    //  define deafult sacle value
    var xscale =1;
var yscale=1;

var xprev =0;
var yprev=0;
  window.addEventListener("mousemove", function(dets)//weinodw means screen
  {
    clearTimeOut(timeout);
    xscale = gsap.utils.clamp(.9,1.8,dets.clientX -xprev);
yscale = gsap.utils.clamp(.9,1.8,dets.clientY -yprev);

xprev =dets.clientX;//dests.slintx = mouse movement details x access
yprev =dets.clientY;

circleMouseFollwer()
timeout=setTimeOut(function(){
    document.querySelector("#mc").style.transform  = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
},100)

// console.log(xdiff,ydiff);
  });
}
    


function circleMouseFollwer(){
    window.addEventListener("mousemove",function (dets) {
    document.querySelector("#mc").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px) `;
    })
}
circleMouseFollwer();
firstPageAni();
circlesquze()

document.querySelectorAll("#part")
.forEach(function (part){
    var rotate=0;
    var diffrot=0;
    part.addEventListener("mousemove",function(dets){
    var diffrot = dets.clientY - part.getBoundingClientRect().top;
diffrot=dets.clientX-rotate;
rotate=dets.clientX;

    gsap.to(part.querySelector("img"),{
    opacity:1,
  
    ease: Power1,
    top:diffrot,
    left:dets.clientX,
    rotate:gsap.utils.clamp(-20,20,diffrot),
});
});
});

part.addEventListener("mouseleave",function(dets)
// {      var diffrot = dets.clientY - part.getBoundingClientRect().top;
//     diffrot=dets.clientX-rotate;
//     rotate=dets.clientX;
    {
     gsap.to(part.querySelector("img"),{
    opacity:0 ,
    duration:0.5,
    
    // top:diff,
    // left:dets.clientX,
    // rotate:gsap.utils.clamp(-20,20,diffroot),
});
});