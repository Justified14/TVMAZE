import React from 'react'
import { Container } from 'react-bootstrap'

export default function Hero() {
  return (
    <div className='p-5 herobox'>
      <Container className='d-flex w-100 top-0 justify-content-center'>
        <div className='mt-4 gap-5 justify-content-center text-center'>
          <h3 className='fw-bold fs-4 mb-3 navword'>MUST SEE TV SHOWS, NOW STREAMING </h3>
          <p className='text-white fs-4 w-md-50 mx-auto'>View thousands of shows and see details about <br></br> your favorite tv shows and people. </p>
          <button className='p-2 max-auto bg-white rounded-md align-items-center mt-3 border-0 '>FIND OUT MORE</button>

        </div>

      </Container>

    </div>
  )
}
