import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Header.css';

const Header = props => {
    // console.log(props)
    return (
        <div className='header-container'>
            
            <h1 className='header-logo' className='header-link'>Recruiter Ramble </h1>
            <div className ='flex'>
                <Link to='/' className='nav-links'>Home </Link>
                <Link to='/dash' className='nav-links'>Browse Recruiters </Link>
                <Link to='/interviews' className='nav-links'> My Interviews</Link>
                <Link to='/profile' className='nav-links'> My Profile</Link>
                <Link to='/feedback' className='nav-links'> My Feedback</Link>
                <Link to='/logout' className='nav-links'> Log Out</Link>
                
              
        </div></div>
    )
}

export default withRouter(Header);

