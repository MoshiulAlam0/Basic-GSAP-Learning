let logoAndIconLt = gsap.timeline();
logoAndIconLt.from('.nav-content1 h1', {
    x: - 500, 
    duration: 1,
    opacity:0,
    // ease: "back.out(1.7)",

});
logoAndIconLt.from('.nav-content1 i', {
    x: 500, 
    duration: 1,
    opacity:0,
    // ease: "back.out(1.7)",
});








let timeLine = gsap.timeline();

timeLine.to('.nav-content2', {
    right: 0,
    duration: .6,
})

timeLine.from('.nav-content2 h4', {
    x: 100,
    duration: .6,
    stagger: .4,
    opacity: 0,
    ease: "back.out(1.7)",
})
timeLine.from('#close', {
    opacity: 0,
    duration: .6,
    ease: "back.out(1.7)",
})

timeLine.pause()

// for show manue 
const close = document.querySelector('#close')
document.querySelector('.nav-content1 i').addEventListener('click', function () {
    timeLine.play();
    close.style.display = 'block';
})
close.addEventListener('click', function () {
    console.log('click');
    timeLine.reverse();
    gsap.to(close, {
        rotate: 360,
        opacity: 0,
        duration: 1.2,
    })
})
