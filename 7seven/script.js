function breakTheText(){
var h1 = document.querySelector("h1")
var h1Text = h1.textContent
// jab console karte tho tag ke saath text aata esliye bus text aahna chahiye

var splitText = h1Text.split("")

var clutter = ""

splitText.forEach(function(elem){    //text tho ek ek thodta h
    clutter += `<span>${elem}</span>`
})

h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 span",{
    y:50,
    duration:0.5,
    opacity:0,
    delay:0.5,
    color:"pink",
    stagger:0.15 // - meh diya tho ulta chalega

})

// SECOND TEXT //


function breakSecText () {
var h2 = document.querySelector("h2")
var h2Text = h2.textContent

var splittedText = h2Text.split("")
var halfValue = Math.ceil(splittedText.length/2)

var clutter = ""

console.log(halfValue)
splittedText.forEach(function(ele,idx){  
    if(idx<halfValue){
        clutter += `<span class="a">${ele}</span>`
    }else{
        clutter += `<span class="b">${ele}</span>`
    }
})

h2.innerHTML = clutter

}

breakSecText()

gsap.from ("h2 .a",{
    y:40,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0

})


gsap.from ("h2 .b",{
    y:-40,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0

})



