import React, {useEffect} from "react";
import {TweenMax, Power0} from "gsap/all"
import "./LoginAnimation.scss";


let LoginAnmation = () => {
    let array = []
 for (let i = 0; i < 105; i++) {
        array.push(
            i
        )
    }
    let greensocks = () => {

        for(let i = 0; i < 105; i++) {
            if(i % 2 === 0 ) {
                TweenMax.to(document.getElementsByClassName(i), 2, {ease: Power0.easeNone, rotate: 180}).repeat(-1)
            }
            else {
                TweenMax.to(document.getElementsByClassName(i), 2, { ease: Power0.easeNone, rotate: 180, delay: 1}).repeat(-1)
            }
        }
    }

    useEffect(()=> {
        greensocks()
    }, [])

    return (
        <div className = "card-example">
               {array.map((el,i) => (
            <div key={i} className={`effect ${i}`}>
            </div>
               )
               )}    
        </div>
    )
}

export default LoginAnmation