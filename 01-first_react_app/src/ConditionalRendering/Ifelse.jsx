import React from 'react'

const Ifelse = () => {

    let msg;
    const age = 18;
    if(age>18) {
       msg = "vote"; 
    }else {
        msg = "not vote"
    }
  return (
    <>
    <div>Ifelse</div>
    <h1>{msg}</h1>
    </>
  )
}

export default Ifelse