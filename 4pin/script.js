gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
    trigger:"#page2",
    markers:true,
    scroller:"body",
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin:true // jab tak text pura scroll ho jata uske baad next page
    
    }
})