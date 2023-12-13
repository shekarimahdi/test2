import React, { useState } from 'react'

const Cost = ({data}) => {

    //alert("Rerender Shodam");

   const [myPrice, setMyPrice] = useState(data.price);
    // const a = {data : "ffsf", blah: "abcd"}
    // const {data} = a;
    //let myPrice = data.price;

    const clickHandler = () =>{
        //alert("click shod!!!");
        //myPrice = 100;
        //alert(myPrice);
        setMyPrice(myPrice+1);
    }
  return (
    <div>
        <h1>{data.type}</h1>
        <h1>{myPrice}</h1>
        <button onClick={clickHandler}>change price</button>
    </div>
  )
}

export default Cost