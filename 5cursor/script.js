var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageD = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        
    })
})

imageD.addEventListener("mouseenter",function(){
    cursor.innerHTML = "VIEW"
    gsap.to(cursor,{
        scale:9
    })
})


imageD.addEventListener("mouseleave",function(){
    cursor.innerHTML =""
    gsap.to(cursor,{
        scale:1
    })
})

