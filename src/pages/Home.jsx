import React from 'react'
import Content from '../Components/Content'
import Hero from '../Components/Hero'
import LowerContent from '../Components/LowerContent'
import useFetch from '../hooks/Usefetch'

export default function Home() {
  const {data, error, loading} = useFetch("https://api.tvmaze.com/shows?page=1")
  console.log('dami',data);
  
  return (
    <>
        <Hero/>
        <div className='container-xl mx-auto'>
        <h4 className='mt-5 p-2 mb-5'>TV SHOWS</h4>
        <Content data={data} error={error} loading={loading}/>
        <LowerContent data={data} error={error} loading={loading}/>
        </div>
    </>
  )
}
