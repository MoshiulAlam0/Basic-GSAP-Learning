gsap.to('.page2 h1', {
    transform:"translateX(-198%)",
    scrollTrigger:{
        trigger:".page2",
        scroller: "body",
        start: "top 0%",
        
        // start: "top 10%", // ai take uncomment kore dekho
        markers: true,
        scrub: 5,
        pin: true, 
        end:"top -100%", /// end ke comment kore chack koro.
        

    }
})