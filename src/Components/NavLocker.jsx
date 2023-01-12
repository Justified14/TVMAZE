import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLocker({isOpen, setOpen}) {
  return (
    <div className='w-100 h-100 position-fixed top-0 left-0 Navlocker' style={{zIndex:'5'}}>
      <div className='mx-2 text-white text-lg' style={{marginTop: '5rem'}}>
        <NavLink to='/Search' className='align-self-center navword' onClick={()=> setOpen(!isOpen)}>
          <p className='mb-3 mt-5 fw-bold'>SEARCH</p>
        </NavLink>
        <NavLink to='/' className='align-self-center navword '>
          <p className='mb-3 fw-bold '>TV SHOWS</p>
        </NavLink>
        <a href="http://www.tvmaze.com" target='_blank' className='fw-bold text-white fs-3 navword'> FIND OUT MORE</a>

      </div>

        
    </div>
  )
}
