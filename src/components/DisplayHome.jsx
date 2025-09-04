import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'

function DisplayHome() {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold my-5'>Featured charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map ((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id }image={item.image}/>))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold my-5'>Latest mezmurs </h1>
        <div className='flex overflow-auto'>
          {songsData.map ((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id }image={item.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
