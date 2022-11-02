import React from 'react'

const Result = (props) => {
  return (
    <div className='container'>


    <div className={"bmi-result alert " + props.alertClass}>
      <div>{ props.bmi || '--.-' }</div>
      <div>{ props.label }</div>
    </div> 
  

    </div>
  )
}

export default Result