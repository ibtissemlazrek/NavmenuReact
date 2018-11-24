import React, { Component } from 'react';
class Navmenu extends Component {
    state = {  }
    render() { 
        return ( <div className="App">
        <nav className="nav-bar">
          <ul className="nav-menu">
            <li className="nav-items" > <a className="nav-link" href="#">Home </a></li>
            <li className="nav-items" > <a className="nav-link" href="#">Services </a>
              <ul className="services-items">
                <li className="services-item"> <a className="services-item-link"> For entrepreneurs</a></li>
                <li className="services-item"> <a className="services-item-link"> For students</a></li>
                <li className="services-item"> <a className="services-item-link"> For hobbyists</a></li>
              </ul> 
               </li>
            <li className="nav-items" > <a className="nav-link" href="#">Contact</a></li>
          </ul>
        </nav>
        
      </div>

         );
    }
}
 
export default Navmenu;
