import React from 'react'

function Song() {
  async function getmusic(){
    let music = await fetch("https://theaudiodb.com/api/v1/json/2/album.php?i=112024")
        .then(response => response.json())
        .then(data => data)
    console.log(music)
} 
  return (
    <div className='song-container'>
      <h1 onClick={getmusic}>Song img</h1>
      <h1>song name</h1>
      <h1>Artist</h1>
    </div>
  )
}

export default Song