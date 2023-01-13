import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

export default function Spinner() {
  return (
    <div className='d-flex w-100 justify-content-center'>
<MutatingDots 
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor= '#7f4361'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
 </div>
  )
}
