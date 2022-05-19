
import React from 'react'

function ClientDetails(props) {
  return (
    <div className='h-20 w-full border-y flex flex-row justify-around items-center text-center'>
        <td>
            {props.details}
            <h5>{props.update}</h5>
        </td>
        <td>
            {props.price}
            <h5>{props.date}</h5>
        </td>
        <td>
            <button>View Report</button>
        </td>
        <td>
            <button>{props.category}</button>
        </td>
    </div>
  )
}

export default ClientDetails