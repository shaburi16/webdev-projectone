// from final to destination //
// to destination to final //
// 0 opacity fully trasparent 1 fully visible //
// tho text one by one display karne hum stragger use karte h //
// x - Horizontal (side vase) //
// y - verital (top-bottom) //
//scale controls the size of an element.
    // •1 → normal size
    // • < 1 → smaller
    // •> 1 → bigger //

gsap.from("h1",{
    color:"red",
    opacity:0,
    duration:2,
    delay:1,
    y:30 ,// ab sub text ek saath aah raha h 
    stagger:1 
})

gsap. to("#box1",{
    x:100,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"burlywood",
    borderRadius:"50%",
    scale:0.4, //kitna bada hoga (2) ya chota hoga (0.somthing)
    repeat:-1 ,// ab yeh infinite baar gumta rahega 1 diya tho 2 baar
    yoyo:true // pahele wo bus jaa raha tha wapas nhi aah rhaa tha tho for (Final to End End -Final )
     
})

gsap.to("#box2",{
    x:100,
    y:200, 
    duration:2,
    delay:1
})

 // FINAL TO INIAL (FROM)
gsap.from ("#box3",{
    x:1000,
    duration:2,
    delay:2
})

// timeline 1 by 1 display hoga content delay dena imp nhi h

var t1 = gsap.timeline()
t1.to("#box4",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})

t1.to("#box5",{
    x:1500,
    backgroundColor:"brown",
    duration:1.5,
    
})

t1.to("#box6",{
    x:1500,
    scale:0.5,
    borderRadius:"50%",
    duration:1.5,
    
}
)