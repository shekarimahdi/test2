import React from 'react'

const Cost = ({data}) => {
    // const a = {data : "ffsf", blah: "abcd"}
    // const {data} = a;
  return (
    <div>
        <h1>{data.type}</h1>
        <h1>{data.price}</h1>
    </div>
  )
}

export default Cost