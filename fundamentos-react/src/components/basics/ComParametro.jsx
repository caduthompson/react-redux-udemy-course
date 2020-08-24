import React from 'react'

export default function ComParametro(props){
  const status = props.point >= 7 ? 'Approved' : 'Disapproved'
  return (
    <div>
      <h2>{ props.titulo }</h2>
      <p>
        <strong>{ props.student } </strong>
        <strong> { props.point }</strong>
        <strong> { status } </strong>
      </p>
    </div>
  )
}