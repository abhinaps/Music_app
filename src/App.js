import React, { useState , useRef } from 'react'
import './styles/app.scss'
import Player from './components/Player';
import Song from './components/Song';
import data from './data.js'
import Library from './components/Library';
import Nav from './components/Nav';

function App() {
  const audioRef = useRef(null)
  const [songs, setSongs] = useState(data())
  const [currSong, setCurrSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime:0,
    duration:0,
    percentage:0
  })
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpadteHandler = (e) => {
    const roundedCurrent = Math.round(e.target.currentTime)
    const roundedDuration = Math.round(e.target.duration)
    const roundedPercentage = Math.round((roundedCurrent / roundedDuration)*100)
    setSongInfo({ ...songInfo,
      currentTime:e.target.currentTime,
      duration:e.target.duration,
      percentage:roundedPercentage
    })
  }
  
  const songEndHandler = async() => {
    let currentIndex = songs.findIndex((song) => song.id === currSong.id )
    await setCurrSong(songs[(currentIndex+1)%songs.length])
    if(isPlaying){
      audioRef.current.play()
    }
  }

  return (
    <div className="App">
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus} />
      <Song 
        currentSong={currSong}
        isPlaying={isPlaying}
        songInfo={songInfo}
       />
      <Player
        Songs={songs} 
        setSongs={setSongs}
        currentSong={currSong}
        setCurrSong={setCurrSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef} />
      <Library 
        Songs={songs}
        setCurrSong={setCurrSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        setSongs={setSongs}
        audioRef={audioRef} />
      <audio 
        onTimeUpdate={timeUpadteHandler} 
        onLoadedMetadata={timeUpadteHandler}
        ref={audioRef} 
        src={currSong.audio}
        onEnded={songEndHandler} />
    </div>
  );
}

export default App;
