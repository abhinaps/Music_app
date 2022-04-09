import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Player() {
  return (
    <div className='player-container'>
      <div className='time-control'>
        <p>Start time</p>
        <input type='range' />
        <p>End time</p>
      </div>
      <div className='song-control'>
        <FontAwesomeIcon className='control-btn skip-back' size='2x' icon={faBackward} />
        <FontAwesomeIcon className='control-btn play' size='2x' icon={faPlay} />
        {/* <FontAwesomeIcon className='pause' size='2x' icon={faPause} /> */}
        <FontAwesomeIcon className='control-btn skip-forward' size='2x' icon={faForward} />
      </div>
    </div>
  )
}

export default Player