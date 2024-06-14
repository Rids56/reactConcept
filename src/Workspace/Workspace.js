import React from 'react'
import { Link } from 'react-router-dom';

function Workspace() {
  return (
    <div>
       <nav>
        <ul>
          <li>
            <Link to="/usecontext">UseContext</Link>
          </li>
          <li>
            <Link to="/usereducer">UseReducer</Link>
          </li>       
        </ul>
      </nav>

    </div>
  )
}

export default Workspace;