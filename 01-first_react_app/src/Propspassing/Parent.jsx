import React from 'react'
import Child from './Child';

const Parent = () => {

    const fullName = "Vikir";

  return (
    <>
    <div>Parent</div>
    <h1>Rendered in parent component: {fullName}</h1>
    <Child name = {fullName}></Child>
    </>
  )
}

export default Parent