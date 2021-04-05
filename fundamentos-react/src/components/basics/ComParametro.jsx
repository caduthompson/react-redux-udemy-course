import React from 'react'

export default function ComParametro(props){
  const status = props.point >= 7 ? 'Approved' : 'Disapproved'
  const nota = Math.ceil(props.point)
  return (
    <div>
      <h2>{ props.titulo }</h2>
      <p>
        <strong>{ props.student } </strong>
        <strong> { nota }</strong>
        <strong> { status } </strong>
      </p>
    </div>
  )
}