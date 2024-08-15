gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE
let timeline1 = gsap.timeline({
    scrollTrigger:{
        trigger:".line-one",
        scrub: true,
        markers: true,
        start: "top",
        end: "bottom",
        pin: true
    }
})

timeline1.fromTo(".line-one span", {y: "60vh"}, {y: 0, stagger: .2})
        .to(".line-one", {backgroundColor: "yellow"})
        .from(".sun", {x: "50vw"})
        .to(".line-one span", {x: "100vw", delay: .5})
        .to(".sun", {x: "-100vw"}, "<")

let timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger:".line-two",
        scrub: true,
        markers: true,
        start: "top",
        end: "bottom",
        pin: true
    }
})

timeline2.fromTo(".line-two :first-child", {scale: 10, x: "-70vw"}, {scale: 1, x: 0})
        .fromTo(".line-two :last-child", {scale: 10, x: "70vw"}, {scale: 1, x: 0}, "<")

let timeline3 = gsap.timeline({
    scrollTrigger:{
        trigger:".line-three",
        scrub: true,
        markers: true,
        start: "top",
        end: "bottom",
        pin: true
    }
})

timeline3.fromTo(".line-three span", {y: "60vh"}, {y: 0, stagger: .2})
        .to(".line-three", {backgroundPositionX: "0%"})
        .to(".line-three span", {color: "white"}, "<")
        .from(".moon", {x: "30vw"}, "<")
