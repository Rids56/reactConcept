import React from 'react'
import { Link } from 'react-router-dom';

function Redux() {
  return (
    <div>
       <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>        
        </ul>
      </nav>
    </div>
  )
}

export default Redux;