/* gsap.timeline() holo animation ar time ke control kore ar ki 
1.animation element gulake kon take age chalabo kontake pore chalabo aii take sohojei kora jai 

let's see example :

 */
// with out using gsap.timeline() function 
// gsap.to('.box',{
//  x: 600,
//  duration: 1,
//  delay: 1,
//  rotate: 360,
// })
// gsap.to('.box1',{
//  x: 600,
//  duration: 1,
//  delay: 1,
//  rotate: 360,
// })
// gsap.to('.box2',{
//  x: 600,
//  duration: 1,
//  delay: 1,
//  rotate: 360,
// })

// after using gsap.timeline() function 
var timeControl = gsap.timeline()
timeControl.to('.box',{
 x: 600,
 duration: 1,
 delay: 1,
 rotate: 360,
})
timeControl.to('.box1',{
 x: 600,
 duration: 1,
 delay: 1,
 rotate: 360,
})
timeControl.to('.box2',{
 x: 600,
 duration: 1,
 delay: 1,
 rotate: 360,
})