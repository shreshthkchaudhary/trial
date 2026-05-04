import React from 'react'

const Ternary = () => {

    const isLoggedin = false;

  return (
    <>
    <div>Ternary</div>
    <h1>{isLoggedin ? "welcome to dashboard" : "Access Denied"}</h1>
    </>
  )
}

export default Ternary