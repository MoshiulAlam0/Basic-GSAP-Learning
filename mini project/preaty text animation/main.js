// code for Barck text charecters / letters 
function brackTheText(){
    const h1 = document.querySelector('h1');
    let splitArry = h1.innerText.split('');
    
    let helfText = splitArry.length/ 2;

    
    
    let finelText = '';

    splitArry.forEach((e, index) =>{
        console.log(e, index);
        if(index < helfText){
            finelText += `<span class="part1">${e}</span>`;
            
        }else{
            finelText += `<span class="part2">${e}</span>`; 
        }
    })
    h1.innerHTML = finelText;
}
brackTheText()


function animation (){
    gsap.from('.part1',{
        y: 50,
        delay: 0.2,
        duration: .7,
        stagger:0.2,
        ease: "back.out(1.9)",
    })
    gsap.from('.part2',{
        y: 50,
        delay: 0.3,
        duration: .7,
        stagger:-0.2,
        ease: "back.out(1.9)",
    })

}

animation();
