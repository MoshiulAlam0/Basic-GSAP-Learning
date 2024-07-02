// some Element value 
let oldPath = `M 10 80 Q 450 80 890 80`;
let modefyPath = `M 10 80 Q 450 80 890 80`;
let container = document.querySelector('.container');
let svg_con = document.querySelector('.svg-con');
console.log(oldPath, container, svg_con);


// add event lestainer on the main container 
container.addEventListener('mousemove', function(e){
    modefyPath = `M 10 80 Q ${e.x} ${e.y} 890 80`;
    console.log(oldPath);
    console.log(modefyPath);

    gsap.to('.svg-con path', {
        attr:{d:modefyPath,},
        duration: .7, 
    }) 
})
container.addEventListener('mouseleave', function(e){
    
    gsap.to('.svg-con path',{
        ease:"elastic.out(1.5,0.2)",
        attr:{d:oldPath,},
        duration: .7, 
    })
})