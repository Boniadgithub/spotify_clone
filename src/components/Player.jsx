import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

function Player() {

  const {track, seekBar,seekBg, playStatus,play,pause,time }= useContext(PlayerContext);
  return (
      <div className='h-[7%] bg-black flex  justify-items-center  text-white px-2 gap-2'>
      <div className='hidden  lg:flex items-center gap-4'>
      <img className="w-14 rounded-md"src={track.image} alt=""/>
       <div>
        <p>{track.name}</p>
        <p>{track.desc.slice(0,12)}</p>
        </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
          <div className='flex gap-4'>
                 <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=""/> 
                  <img className='w-4 cursor-pointer' src={assets.prev_icon} alt=""/> 
                  {playStatus
                  ?<img onClick={pause}className='w-4 cursor-pointer' src={assets.pause_icon} alt=""/>
                  :<img onClick={play}className='w-4 cursor-pointer' src={assets.play_icon} alt=""/> 
                   
                  }
                   
                    <img className='w-4 cursor-pointer' src={assets.next_icon} alt=""/> 
                     <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=""/>    
          </div>
          <div className='flex gap-2 items-center'>
             <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
             <div ref={seekBg} className='w-[60vw] max-w-[500px]  bg-gray-300 rounded-full cursor-pointer'>
              <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'></hr>
            </div>
            <p>{time.TotalTime.minutes}:{time.TotalTime.seconds}</p>
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
          <img className='w-4' src={assets.plays_icon} alt=''/>
          <img className='w-4' src={assets.mic_icon} alt=''/>
          <img className='w-4' src={assets.queue_icon} alt=''/>
          <img className='w-4' src={assets.speaker_icon} alt=''/>
          <img className='w-4' src={assets.volume_icon} alt=''/>
          <div className='w-20 bg-slate-50 h-1 rounded'>

          </div>
          <img className='w-5' src={assets.mini_player_icon} alt=''/>
          <img className='w-5' src={assets.zoom_icon} alt=''/>
          
        </div>
    </div>
  )
}

export default Player
