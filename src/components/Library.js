import React from 'react'
import LibrarySong from './LibrarySong'

function Library({ Songs , setCurrSong, isPlaying, libraryStatus, setSongs, audioRef }) {
  return (
    <div className={`library ${libraryStatus?"active-library":""}`}>
        <h2>Library</h2>
        <div className='library-songs'>
            {Songs.map(Song => <LibrarySong
              Songs={Songs} 
              setCurrSong={setCurrSong} 
              Song={Song}
              id={Song.id}
              key={Song.id}
              isPlaying={isPlaying}
              setSongs={setSongs}
              audioRef={audioRef}  />
            )}
        </div>
    </div>
  )
}

export default Library