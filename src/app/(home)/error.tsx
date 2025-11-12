"use client"

import React from 'react'

interface ErrorProps{
  error:Error,
  reset: ()=>void
}

const Error = (props: ErrorProps) => {
  return (
    <div style={{
      padding: '4rem'
    }}> 
      <h1>Error</h1>
      <p>Ha ocurrido un error</p>
      <p>{props.error.message}</p>
    
      <button onClick={() =>props.reset()}>Intentar de nuevo </button>
    </div>
  )
}

export default Error