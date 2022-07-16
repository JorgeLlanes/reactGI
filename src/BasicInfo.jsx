import React from 'react'
import './App.css'

const  BasicInfo = (props) => {
  return (
    <div className="humanInfo">
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>DOB: {props.dob}</p>
      <p>State: {props.state}</p>
      <p>City: {props.city}</p>
    </div>
  )
}

export default BasicInfo;
