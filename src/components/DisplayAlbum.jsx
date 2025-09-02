import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';
const DisplayAlbum = () => {

    const {id}= useParams();
    const albumData = albumsData[id];
    
  return (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row mt:items-end'>
        <img src ={albumData.image} alt='' className='w-48 rounded'/>
            <div className='flex flex-col'> 
                 <p>Playlist</p>
                 <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                 <h4>{albumData.desc}</h4>
                 <p className='mt-1'>
                    <img className='w-5 inline-block mr-1' src={assets.spotify_logo}/>
                    <b>Spotify</b>
                    .1323154 likes
                    .<b>50 songs</b>
                     about 3 hr 37 min
                 </p>
            </div>
        </div>
    </>
  )
}

export default DisplayAlbum
