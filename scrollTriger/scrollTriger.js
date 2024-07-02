/* 
# what is the scrollTriger:
    ans: simple kothai scroll ar opor base kore animation ta ke chalabe.
    mane scroll ar jei starting poin ase, aii ta jodi jei element take 
    triger hisabe / ak kothai set korbo. tar opor jodi triger kore / jai tobi 
    kono akta element ar animation ta execute / start hoye jabe. ai holo scrollTriger
*/





/* scrollTriger ke 2 vabe lekha jai :
    1. simple weay : scrollTriger: " .page1 div", /// amra jei element take triger hisbe
                                                     set korte chai sei tar indentifier name ta diya dibo.  

    2. advance way : aktu jodi detaily jodi ai take use korte chai.

        scrollTriger:{
            triger:".page div",//1

            scroller: "body",  //2

            markers: true,      //3

            start: "top 50%",  //4

            end: "top 20%",    //5

            scrub: true,       //6

            pin: true,         //7

        }
    
    1. triger: ar value "identifire name" . 
            ar mane hole je element ar opore scroll ta hole / triger ta korle animation ta start hobe
            tar identifire name dite hobe.
    
    2.scroller: "body" , maximum time scroller ar value "body" hobe.
                but kicu laibray logomotive, etc use ar khetre / kicu difrent consept a 
                ar value ta change hote pare.

    3.markar: ar value hobe boolen (true/flase).
              Aita scroller ar je start point, end point ace and ar sathe sathe 
              triger element ar je start poin, end poin are ai gulare heilight kore dei ar ki.
              valo vabe bojar khetre aita use kora jai.  

    4.start: ar defult start position holo screen ar bottom 0% / top 100% (niche), 
             end holo top 0% bottom 100% / (opore).
            scroller ar start point ar position ta kothai hobe seta set kora ji.

    5.end  : ar defult start position holo screen ar bottom 0% /top 100% (niche),
             end holo top 0% /bottom 100% (opore).
            scroller ar end point ar position ta kothai hobe seta set kora ji.

    6.scrub: defult hisabe animation triger holei animation ta start hoye jai,
             and sathe sathe sesh o hoye jai.  
             => akhon jodi [scrub] use kori tahole 
                  i.scroller ar start point theke  end point (start to end) joto khon scroll hobe 
                  animation cholbe, scroll hobe na animation cholbe na. 
                  (aboshoi triger start end ar ke fellow korbe).
            [note: ar value hobe boolen(true/fals),number(1-5)
            num value depeand korbe koto tuku smoothnes tumi chao.]      
    
    pin: pin use korle-> jokhon animation ta start hoye jai tokhon theke shuru kore, 
    animation akebare end / sesh jaoya porjonto amra jake triper koreci sei element ta 
    fixed kore dei (na norate parba na sorate parba). then animation finish hoye gele 
    move korte parbo / samne agote parbo. 
    [*note: 
    1.value true / false. 
    2.pin use korle maximum time triger ta animation element take na kore ar parent take korbe.
    ]
            
*/

// code page 1 animation 
gsap.from('.page1 div',{
    y:-2000,
    duration: 2, 
    delay: 1, 
    rotate:800,
})


// animation for the page 1 
gsap.from(".page2 h2", {
    x: -1000,
    delay: .4,
    opacity: 0,
    duration : 2,
    rotate: 390,

    // scrollTrigger:"page3 div", // simple way 


    scrollTrigger:{     // advance way 
        trigger: "h2", // 1
        scoller: 'body', // 2
        markers:true,  // 3
        // start: 'top 80%',  // 4
        // end:"top 10%", // 5

        scrub: 5, // 6
        // pin: true, // 7

    }
})

