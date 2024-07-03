gsap.to(".box",{   // to is start ---> end
    x: 1000,
    duration: 1,
    delay: 1,
})
gsap.from(".box1",{  // to is end ----> start
    x: 1000,
    duration: 1,
    delay: 1,

})

// manualy tumi set korte paro 
// 1.kono akta rendom jaiga theke start hobe(otthat from)
// 2.kono akta position porjonto jabe // to 

let tl = gsap.timeline();
tl.fromTo('.box2',
  {x: 200, y: 400, scale: 0.2, duration: 6,  rotate: 180, }, /// from 
  { x: 900, y: -100, rotate: 180, duration: 6, scale: 2,}  // to 
)
// tl.fromTo('.box2',
//   {x: 0, y: -100, scale: 2, duration: 8,  rotate: 180, },
//   { x: -700, y: 400, rotate: 180, duration: 8, scale: .2,}
// )