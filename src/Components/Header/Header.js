import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Header.css';

const Header = props => {
    // console.log(props)
    return (
        <div className='header-container'>
            
            <h1>Recruiter </h1>
            <div className ='flex'>
                <Link to='/' className='nav-links'>Home </Link>
                <Link to='/dash' className='nav-links'>Browse Recruiters </Link>
                <Link to='/interviews' className='nav-links'> My Interviews</Link>
                <Link to='/profile' className='nav-links'> My Profile</Link>
                <Link to='/feedback' className='nav-links'> My Feedback</Link>
              
        </div></div>
    )
}

export default withRouter(Header);

// import React, { Component } from 'react'

// export class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Recruiter </h1>
//                 <button>Home</button>
//                 <button>Browse</button>
//                 <button>My Interviews</button>
//                 <button>My Feedback</button>
//                 {/* <Link to='/dash' className='nav-links'>Dashboard</Link>
//                 <Link to='/profile' className='nav-links'>Profile</Link> */}
//             </div>
//         )
//     }
// }

// export default Header
