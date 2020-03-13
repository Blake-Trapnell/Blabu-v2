import React, { useRef, useEffect} from "react";
import Greensocks from "../../utils/greensocks/greensockstest"

const BlabuTitle = () => {
    let textOne = useRef(null);
    let textTwo = useRef(null);
    let textThree = useRef(null)
    useEffect(()=> {
        Greensocks(textOne, textTwo, textThree)
    }, [])
return (
        <div className="login--body-title">
            <h1>Blabu</h1>
            <h2>Budgets</h2>
            <h2 className="text" ref={el => textTwo = el}>done right</h2>
            <h2 className="text" ref={el => textOne = el}>for you</h2>
            <h2 className="text" ref={el => textThree = el}>fast</h2>
        </div>
    );
};
export default BlabuTitle;