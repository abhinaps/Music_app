import React from 'react'

function Song({currentSong, isPlaying ,songInfo}) { 
  return (
    <div className='song-container'>
      <img className={(isPlaying && songInfo.duration)?"rotate":""} src={currentSong.cover} alt='Song-cover' />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  )
}

export default Song