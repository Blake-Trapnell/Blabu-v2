import {TimelineMax} from "gsap/all";


let Greensocks = ( one, two, three) => {
        let textAnimation = new TimelineMax()
        //one
        textAnimation.to(one, 0.2, {opacity: 0})
        .to(one, 1,{x: 50, opacity: 1})
        .to(one, .5,{color: "#FFAA32"})
        .to(one, .2,{y: -50, delay: 2, opacity: 0, pointerEvents: "none"})
        // two
        .to(two, 0, {opacity: 1})
        .from(two, 1, {x: -200})
        .to(two, .5,{color: "#FFAA32", delay: 2})
        .to(two, .2,{y: 200, opacity: 0, pointerEvents: "none"})
        // //three
        .to(three, 0, {opacity: 1})
        .from(three, 1, {x: 40, scale: 0})
        .to(three, .2,{color: "#FFAA32", delay: 2})
        .to(three, .2,{scale: 0, opacity: 0, pointerEvents: "none"})
        .repeat(-1)
}        






export default Greensocks