import "../style.css"
import propTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
export default function Navbar(props){
 
  
    return (
      
        <div  id="nav">
             <nav style={props.lightMode?{backgroundColor:"grey"
            ,color:"black"}:{}}>
        <ul>
          <li>
            <img className="logo nav" src="logo512.png" alt="" />
          </li>
          <li>
            <Link to="/">{props.home}</Link>
          </li>
          <li>
            <Link to="/about">About React</Link>
          </li>
          <li>
            <a href="#">learn React</a>
          </li>
          <li>
           <a>Reference</a>
    </li>
    <li>
           <a>Community</a>
    </li>
    <li>
           <a>Blog</a>
    </li>
          <li>
            <a href="#">contact US : {props.num}</a>
          </li>
          
          <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.lightMode?'enable dark':'enable light'} mode</label>
</div>
        </ul>

      </nav>
        </div>
        
    )
}

// //Navbar is a func name not a file name
// /* mechanism for passing props helps in easy debugging the erros */

Navbar.propTypes={
     home:propTypes.string,
     num:propTypes.number.isRequired
}


// /* default props if values are not passed while rendering */

// Navbar.defaultProps={
//     home:"set Home here",
//    // num:'react num' //even the dataType doesnt matter
//     num:+9190909090
// }

//ctrl+/ for add and removing comments

