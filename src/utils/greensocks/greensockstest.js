import {TweenMax} from "gsap/all";

let Budgets = (element) => {
    TweenMax.to(element, 0, {opacity: 0})
    TweenMax.to(element, .2, {opacity: 1, delay: 4})
    TweenMax.to(element, .5, {color: "#FFAA32", delay: 4})
}

let RightUp = (element) => {
    TweenMax.from(element, 1, {x: 300})
    TweenMax.from(element, 1, {opacity: 0, delay: .2})
    TweenMax.to(element, 2,{color: "#FFAA32"})
    TweenMax.to(element, .5,{y: -300, delay: 3, opacity: 0, display: "none"})
}

let LeftDown = (element) => {
    TweenMax.from(element, 1, {opacity: 0, delay: 4.2})
    TweenMax.from(element, 1, {x: -300, delay: 4})
    TweenMax.to(element, 2,{color: "#FFAA32", delay: 4})
    TweenMax.to(element, .2,{y: 300, delay: 7, opacity: 0, display: "none"})
}


export default {RightUp, LeftDown, Budgets}