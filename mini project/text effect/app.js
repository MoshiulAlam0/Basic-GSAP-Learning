


const h2 = document.querySelector('h2');
let brokenTextes = h2.innerText.split('');

let letterWithSpan = ' ';
brokenTextes.forEach(e =>{
    let span = `<span>${e}</span>`;
    // console.log(span);
    letterWithSpan += span;
})
h2.innerHTML = letterWithSpan;

function changeColor (){
    let lt = gsap.timeline({
        scrollTrigger:{
            trigger:'.page2',
            scroller: 'body',
            markers: true,
            start:"20% 80%",
            end:"30% top",
            scrub: .4,
        },
    })
    lt.from('p',{
        opacity: 0, 
        duration: 4, 
        x:-20,

    })
    lt.to('h2 span',{
        stagger: .5,
        color: '#ffff',
    })
}

changeColor()