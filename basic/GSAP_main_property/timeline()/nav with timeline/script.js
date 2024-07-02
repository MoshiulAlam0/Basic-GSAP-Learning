let lt = gsap.timeline();
lt.from('.logo', {
    y: -9,
    opacity: .7,
    duration: 1, 
    delay: .5
})
lt.from('.li-list li', {
    y: -9,
    opacity: 0,
    duration: .7, 
    delay: 0,
    stagger: .3
})