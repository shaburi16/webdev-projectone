window.addEventListener("wheel", function (dets) {

    if (dets.deltaY < 0) {
        // SCROLL UP → move LEFT
        gsap.to(".marque", {
            xPercent: -200,
            duration: 4,
            ease: "linear"
        });

        // arrow LEFT
        gsap.to(".marque i", {
            rotate: 0,
            duration: 0.5,
            ease: "power3.out",
            overwrite:true
        });

    } else {
        // SCROLL DOWN → move RIGHT
        gsap.to(".marque", {
            xPercent: 0,
            duration: 4,
            ease: "linear"
        });

        // arrow RIGHT
        gsap.to(".marque i", {
            rotate: 180,
            duration: 0.5,
            ease: "power3.out",
            overwrite:true
        });
    }

});
