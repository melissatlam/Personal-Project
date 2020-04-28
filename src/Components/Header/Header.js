import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Header.css';
import 'bootstrap/js/dist/dropdown'

const Header = props => {
    // console.log(props)
    return (
        <div className='header-container'>
            
            <h1 className='headerfont'>Recruiter Ramble </h1>

            <div className ='dropdown'>
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Home <span class="caret"></span></button>
               <ul className ='dropdown-menu'>
                   <li><Link to='/' className='nav-links'>Home</Link></li>
                  <li><Link to='/dash' className='nav-links'>Browse Recruiters </Link></li> 
                  <li><Link to='/interviews' className='nav-links'> My Interviews</Link></li> 
                  <li><Link to='/profile' className='nav-links'> My Profile</Link></li> 
                  <li><Link to='/feedback' className='nav-links'> My Feedback</Link></li> 
                  <li><Link to='/logout' className='nav-links'> Log Out</Link></li> 
                
                </ul>
        </div>
        
         </div>
    )
}

export default withRouter(Header);

{/* <div className='header-container'>
            
            <h1 className='header-logo'>Recruiter Ramble </h1>
            <div className ='flex'>
                <Link to='/' className='nav-links'>Home </Link>
                <Link to='/dash' className='nav-links'>Browse Recruiters </Link>
                <Link to='/interviews' className='nav-links'> My Interviews</Link>
                <Link to='/profile' className='nav-links'> My Profile</Link>
                <Link to='/feedback' className='nav-links'> My Feedback</Link>
                <Link to='/logout' className='nav-links'> Log Out</Link>
                
              
        </div></div> */}