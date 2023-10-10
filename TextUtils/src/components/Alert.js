import React from 'react'

export default function Alert(props) {
    const capatialize = (word)=>{
       return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    <div style={{height:"45px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatialize(props.alert.type)}</strong> : {props.alert.message}
  </div>}
    </div>
  )
}
