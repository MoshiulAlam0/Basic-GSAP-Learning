document.querySelector('.main').addEventListener('mousemove', function(e){
    gsap.to('.pointer', {
        x:e.x,
        y:e.y,
        ease: "back.out(2)",
    })
})

// code for the img 
let img_con = document.querySelector('.img-con')
let curser = document.querySelector('.pointer');
img_con.addEventListener('mouseenter', function(){
    curser.innerHTML = 'View More',
    gsap.to(curser, {
        scale: 2,
        backgroundColor: "#bababa",
    })
})

img_con.addEventListener('mouseleave', function(){
    console.log('leaved');
    curser.innerHTML = '',
    gsap.to(curser, {
        scale: 1,
        backgroundColor: "#ffffff",
    })
})