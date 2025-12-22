// timeline 1 by 1 display hoga content delay dena imp nhi h

var t1 = gsap.timeline()
t1.from("h2",{
    y:-30,
    opacity:0,
    duration:1.5,
    delay:0.5
})

t1.from("h4",{
    y:-30,
    opacity:0,
    duration:1.5,
    stagger:0.3
    
})

t1.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})
