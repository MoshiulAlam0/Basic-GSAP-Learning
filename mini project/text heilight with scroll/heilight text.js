const pages1 = document.querySelector('.page1');
const pages2 = document.querySelector('.page2');
const pages3 = document.querySelector('.page3');


gsap.from('.page1 p', {
    opacity: 0,
    y: 200,
    color: 'gray',
    duration: 1.6,
    stagger: .1,
    ease: "back.out(1.9)",

    // scrollTrigger:{
    //     trigger:".page1 p",
    //     scroller:"body",
    //     start: "top 70%",
    //     markers: true, 
    //     end:"top -100%",
    //     scrub:true,

    // }
})

gsap.from('.page2 p', {
    opacity: 0,
    y: 200,
    color: 'gray',
    duration: 1.6,
    stagger: .1,
    ease: "back.out(1.9)",

    scrollTrigger: {
        trigger: ".page2 p ",
        scroller: "body",
        // markers: true, 
        scrub: 5,
    }
})


let lt = gsap.timeline();
lt.to('.hello p', {
    x: -1500,
    duration: 3,
    stagger: .6,
    // ease: "power3.in",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: true,
        scrub: 4,
        start: "top 0%",
        end: "top -100%",
        pin: true,
    }
})

gsap.from('.img',{
    x: 1200,
    duration: 3,
    ease: "back.out(1.9)",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top -1%",
        markers: true, 
        scrub: 1,
        end: "top -100%",
        // pin: true,
    }
})

