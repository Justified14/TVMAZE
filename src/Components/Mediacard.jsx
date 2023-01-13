import React from 'react'
import { Link } from 'react-router-dom'


export default function Mediacard({id, image, genres, name}) {
  return (
    <Link to={`/tvshows/${id}`}>
        <div className='me-2 px-2 MediaCard position-relative border-bottom-0 rounded-bottom' style={{width:"80vw",height: '350px'}}>
            <img className='w-100 h-100' src={image?.original} alt={name} loading='lazy'/>
            <div className='position-absolute bottom-0 bg-dark opacity-50 z-0 border-bottom-0 rounded-bottom' style={{height:"96px", width:"235px"}}/>
                <div className=' d-flex justify-content-center flex-column position-absolute bottom-0 left-0 px-4 w-100 z-3'>
                    <h1 className='text-white fs-5  fw-bold'>{name}</h1>
                    <p className='text-white'>{genres.join('  .  ')} </p>

                </div>
            </div>

    </Link>
  )
}
