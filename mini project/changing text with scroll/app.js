// code for the smooth scroll using lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// code for the gsap animation 

const pages = document.querySelectorAll('.page');
const p = document.querySelectorAll('.page .gray');
console.log(pages, p);



gsap.to(p[0], {
    width:"0%",
    duration: 2,
    ease: "circ.out",
    scrollTrigger:{
        trigger:".page1",
        scroller: 'body',
        start: "20% 50%",
        end: "90% 50%",
        markers: true,
        scrub:2,
        // pin:true,
    }
})

gsap.to(p[1], {
    width:"0%",
    duration: 1,
    ease: "power1.out",
    scrollTrigger:{
        trigger:".page2",
        scroller: 'body',
        start: "10% 50%",
        end: "90% 50%",
        markers: true,
        scrub:2,
        // pin:true,
    }
})


gsap.to(p[2], {
    width:"0%",
    duration: 1,
    ease: "power1.out",
    scrollTrigger:{
        trigger:".page3",
        scroller: 'body',
        start: "10% 50%",
        end: "90% 50%",
        markers: true,
        scrub:2,
        // pin:true,
    }
})

gsap.to(p[3], {
    width:"0%",
    color:"blue",
    duration: 1,
    ease: "power1.out",
    scrollTrigger:{
        trigger:".page4",
        scroller: 'body',
        start: "10% 50%",
        end: "50% 50%",
        markers: true,
        scrub:2,
        // pin:true,
    }
})











































