// for smooth scroll 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// code for the page 1 
function page1Animation(){
  let page1Lt = gsap.timeline();

  page1Lt.from('nav h2, nav a, nav button',{
    y: -10,
    duration: .7,
    opacity: 0,
    stagger: .3,
    ease: "back.out(1.7)",
  })

  page1Lt.from('.p1-center-part1 h1, .p1-center-part1 p, .p1-center-part1 button',{
    x:-60,
    opacity:0,
    duration:.8,
    stagger: .2,
    ease: "back.out(1.7)",
  })

  page1Lt.from('.p1-center-part2',{
    x:60,
    opacity:0,
    duration:.8,
    stagger: .2,
    ease: "back.out(1.7)",
  }, "-=.7");

  page1Lt.from('.p1-bottom-con',{
    y:60,
    opacity:0,
    duration:.8,
    stagger: .2,
    ease: "back.out(1.7)",
  }, "-=.3")
 
} 


// code for the page 2 
function page2Animation(){
  let page2Lt = gsap.timeline({
    scrollTrigger:{
      trigger: ".page2",
      scroller: "body",
      // markers: true,
      start: "7% 100%",
      end:"top -25%",
      scrub: 4,
    },
  });

  page2Lt.from('.p2-part1 h3, .p2-part1 p',{
    y: -40,
    duration: .6,
    opacity: 0,
    stagger: -.3,
    ease: "back.out(1.7)",
  });


  page2Lt.from('#box1',{
    x: -40,
    duration: .6,
    opacity: 0,
    delay: .1,
    stagger: .3,
    ease: "back.out(1.7)",
  }, '2nd');


  page2Lt.from('#box2',{
    x: 40,
    duration: .6,
    opacity: 0,
    stagger: .3,
    ease: "back.out(1.7)",
  }, '2nd');



  page2Lt.from('#box3',{
    x: -40,
    duration: .6,
    opacity: 0,
    stagger: .3,
    ease: "back.out(1.7)",
  }, '1st');

  page2Lt.from('#box4',{
    x: 40,
    duration: .6,
    opacity: 0,
    delay: .1,
    stagger: .3,
    ease: "back.out(1.7)",
  }, '1st');


  // page1Lt.from('nav h2, nav a, nav button',{
  //   y: -10,
  //   duration: .7,
  //   opacity: 0,
  //   stagger: .3,
  //   ease: "back.out(1.7)",
  // })
}


// code for the page 3 
function page3Animation(){
  let page3tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".page3",
      scroller: "body",
      // markers: true,
      start: "50% 100%",
      end:"top 0%",
      scrub: 5,
    },
  });
  
  page3tl.from('.page3-part1 h1, .page3-part1 p, .page3-part1 button',{
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: .2,
  })
  page3tl.from('.page3-part2',{
    x: 40,
    opacity: 0,
    duration: .7,
    stagger: .2,
  }, 'same')
  page3tl.from('.page4-part1 h4, .page4-part1 p',{
    x: -40,
    opacity: 0,
    duration: .7,
    stagger: -.2,
  })
  page3tl.from('.page4-part2-item',{
    y: 40,
    opacity: 0,
    duration: .7,
    stagger: -.2,
  }, 'same')
  page3tl.from('.line',{
    y: -40,
    opacity:0,
    duration: .7,
    stagger: -.2,
  })
 
}







page1Animation();
page2Animation();
page3Animation();