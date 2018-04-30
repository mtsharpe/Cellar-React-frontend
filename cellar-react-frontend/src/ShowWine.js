import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ShowWine = (props) => {
  const wineId = props.match.params.id
  const wine = props.wines.find(wineInPropsWines => wineInPropsWines._id === wineId)
  console.log(props.wines)
  return (
    <div className='show'>
      <h2>{wine.year} {wine.producer} {wine.varietal}</h2>
      <h3>Region: {wine.region}</h3>
      <h3>Website: <a href={wine.url}> {wine.url} </a></h3>
      <h3>Inventory: {wine.inventory}</h3>
      <h3>Notes/Paring information: </h3>
      <h4>{wine.description}</h4>

      <p>{wine && <Link to={{ pathname: `/wines/new/${wine._id}`, state: {wine} }}>Edit</Link>}</p>
    </div>
  )
}
export default ShowWine
