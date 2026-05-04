import React from 'react'

const MultipleJSX = () => {

    const isStudent = true;

  return (
    <>
    <div>MultipleJSX</div>
    {isStudent ? (
        <>
            <h1>student dashboard</h1>
            <p>welcome to the course</p>
        </>
    ) : (
        <>
        <h1>teacher dashboard</h1>
        <p>please enroll in the course</p>
        </>
    )}
    </>
  )
}

export default MultipleJSX