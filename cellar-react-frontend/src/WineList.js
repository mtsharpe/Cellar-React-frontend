import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import RedsLogo from './Images/RedsLogo.svg'

class WineList extends Component {
  render () {
    return (
      <div className='list'>
        <img className='listHeader' src={RedsLogo} alt='reds' />
        <ReactTable
          data={this.props.wines}
          columns={[
            {
              columns: [
                {
                  Header: 'Year',
                  accessor: 'year',
                  maxWidth: 100
                },
                {
                  Header: 'Producer',
                  accessor: 'producer',
                  maxWidth: 400,
                  Cell: wine => (<Link to={{ pathname: `/wines/${wine.original._id}` }}>{wine.original.producer}</Link>)
                },
                {
                  Header: 'Varietal',
                  accessor: 'varietal',
                  midwidth: 400
                },
                {
                  Header: 'Color',
                  accessor: 'color',
                  maxWidth: 100
                },
                {
                  Header: 'Inventory',
                  accessor: 'inventory',
                  maxWidth: 100
                }
              ]
            }
          ]}
          defaultPageSize={50}
          className='-striped -highlight'
        />
      </div>
    )
  }
}

export default WineList
