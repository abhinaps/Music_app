import React from 'react'

function LibrarySong({Songs, Song, id, isPlaying, setSongs , setCurrSong , audioRef}) {
  const songSelectHandler = async() => {
    await setCurrSong(Song)
    if(isPlaying){
      audioRef.current.play()
    }
    const newSong = Songs.map((song) => {
      if(song.id===id){
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
  }
  
  
  return (
    <div onClick={songSelectHandler} className={`libray-song-container ${Song.active?"selected":""}`}>
      <img src={Song.cover} alt='Song-cover' />
      <div className='song-description'>
        <h3>{Song.name}</h3>
        <h4>{Song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong