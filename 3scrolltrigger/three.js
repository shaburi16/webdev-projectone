gsap.from("#page2 h1",{
    opacity:0,
    x:500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        start:"top 50%"
    }

})

gsap.from("#page2 h2",{
    opacity:0,
    x:-500,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        start:"top 50%",
        scrub:2// jeses scroll karenge waise waise wo hoga boolean value ya 1-5 5 bahuut smooth hoga 
    }

})