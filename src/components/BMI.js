import React, { Component } from 'react'

export class BMI extends Component {
  render() {
    return (
     
     <div className="bmi_widget">
<div className="row">
                <TextInput label="Height" placeholder="Enter height in meters" onChange={this.heightChange} />
            </div>
            <div className="row">
                <TextInput label="Weight" placeholder="Enter weight in kg" onChange={this.weightChange} />
            </div>

      </div>
    )
  }
}

export default BMI