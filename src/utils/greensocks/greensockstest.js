import {TweenMax} from "gsap/all";


let Greensocks = (one, two, three, four) => {
        // let tl = new TimelineMax({repeat: -1, repeatDelay: 20})
        TweenMax.to(one, 0, {opacity: 1})
        TweenMax.from(one, .2, {opacity: 0, delay: 4})
        TweenMax.to(one, .2, {opacity: 0, delay: 7})
        TweenMax.to(one, .2, {opacity: 1, delay: 10.2})
        //two
        TweenMax.to(two, 0, {opacity: 1})
        TweenMax.from(two, .2, {y: 300,})
        TweenMax.to(two, 1,{x: 50})
        TweenMax.from(two, 1, {opacity: 0, delay: .2})
        TweenMax.to(two, 2,{color: "#FFAA32"})
        TweenMax.to(two, .5,{y: -900, delay: 3, opacity: 0})
        //three
        TweenMax.to(four, 0, {opacity: 1})
        TweenMax.from(four, 1, {x: 40, scale: 0, delay: 7.2})
        TweenMax.to(four, .2,{color: "#FFAA32", delay: 7.3})
        TweenMax.to(four, .2,{scale: 0, delay: 10.2, opacity: 0})
        //four
        TweenMax.to(three, 0, {opacity: 1})
        TweenMax.from(three, 1, {opacity: 0, delay: 4.2})
        TweenMax.from(three, 1, {x: -300, delay: 4})
        TweenMax.to(three, 2,{color: "#FFAA32", delay: 4})
        TweenMax.to(three, .2,{y: 400, delay: 7, opacity: 0})
}        






export default Greensocks