gsap.to('.x', {
    x: 1000,  /// short form of transform: transletX

    // y: 300, /// short form of transform: transletY

    delay: 2,  // animation koto khon por cholbe 

    duration: 3, // animation koto khon porjonto cholbe 

    rotate: 360,  // element take guraidibe / rotate korbe 

    repeat: 1, // animation koto bar beshi cholbe . (infinite ar jonno -1) ,
    // {note: defolt hisabe animation to 1 bar cholei, repeat dile oii 1 bar ar sathe aro kotobar cholbe}
    

    yoyo:true, /// ati animation ke alternate kore/ animation ta 
    // start hobe end porjonto cholbe, anbar end thakei start porjonto cholbe 
    // {note: ati infinite and repeat ar sathe better }


})
gsap.to('.y', {
    y: 300, /// short form of transform: transletY
    
})


gsap.from('h1', {
    y: 83,
    duration: 2, 

    stagger: 1,  // ata akadhik element ar khetre kaj korbe . 
    // ati prottecta element ke akta akta kore chalabe , ar value/time sobgulate akta kore delay make kore. 

   
})
