let allPage = document.querySelectorAll('.page');

allPage.forEach(page =>{
    page.addEventListener('mousemove', function(e){
        gsap.to(page.children, {
            opacity: 1,
            x:e.x,
            y:e.y, 
            duration: 2,
            ease:"back.out(2)",
        })
    })
    page.addEventListener('mouseleave', function(e){
        gsap.to(page.children, {
            duration:.4,
            opacity: 0,
        })
        
    })
})