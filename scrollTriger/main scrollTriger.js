gsap.from(".page3 div", {
    transform: "translateX(200px)",
    opacity: 0,
    duration : 2,
    delay:3,
    scrollTrigger:"page3 div",
    // scrollTriger:{

    //     markar:true, 
    // }
    
})

gsap.from('.page1 div',{
    opacity: 0,
    transform: "scale(0)",
    duration: 2, 
    // delay: 1, 
    rotate:800,
})