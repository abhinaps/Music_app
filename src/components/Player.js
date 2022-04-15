import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Player({Songs, setSongs, currentSong, setCurrSong, songInfo, isPlaying, setIsPlaying, setSongInfo, audioRef}) {
  
  
  const playSongHandler = () => {
    if(isPlaying){
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    }
    else{
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    } 
  }
  const gettime = (time) => {
    return(
      Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
    )
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo, currentTime:e.target.value})
  }
  const skipTrackHandler = async(direction) =>{
    let currentIndex = Songs.findIndex((song) => song.id === currentSong.id )
    if(direction === "backward"){
      if((currentIndex-1)%Songs.length < 0){
        await setCurrSong(Songs[Songs.length-1])
      }else{
        await setCurrSong(Songs[(currentIndex-1)%Songs.length])
      }
    }
    if(direction === "forward"){
      await setCurrSong(Songs[(currentIndex+1)%Songs.length])
    }
    if(isPlaying){
      audioRef.current.play()
    }
  }
  useEffect(() => {
    const newSong = Songs.map((song) => {
      if(song.id=== currentSong.id){
        return{
          ...song,
          active:true
        }
      }else{
        return{
          ...song,
          active:false
        }
      }
    })
    setSongs(newSong)
  }, [currentSong])
  const trackAnim = {
    transform: `translateX(${songInfo.percentage}%)`
  }
  return (
    <div className='player-container'>
      <div className='time-control'>
        <p>{gettime(songInfo.currentTime)}</p>
        <div 
        style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} 
        className='track'>
          <input type='range'
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime} />
          <div style={trackAnim} className='animate-track'>
            
          </div> 
        </div>
        <p>{songInfo.duration ? gettime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className='song-control'>
        <FontAwesomeIcon 
          onClick={() => skipTrackHandler("backward")}
          className='skip-back' 
          size='2x' 
          icon={faBackward} />
        <FontAwesomeIcon 
          onClick={playSongHandler}
          className='play' 
          size='2x' 
          icon={isPlaying?faPause:faPlay} />
       <FontAwesomeIcon 
          onClick={() => skipTrackHandler("forward")}
          className='skip-forward' 
          size='2x' 
          icon={faForward} />
      </div>
      
    </div>
  )
}

export default Player