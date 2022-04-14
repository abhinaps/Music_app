import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


function Nav({libraryStatus, setLibraryStatus}) {
  return (
    <div className='nav' >
    <nav className='navbar'>
        <h1>Waves</h1>
        <button onClick={()=>setLibraryStatus(!libraryStatus)}>
            Library 
            <FontAwesomeIcon icon={faMusic} />
        </button>
        
    </nav>
    </div>
  )
}

export default Nav