import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './Header.scss';
import 'bootstrap/js/dist/dropdown'

const Header = props => {
    // constructor(props){
        // super(props):
    
    return (
        <div className='header-container'>
            <div className ='header-flex'>
            <h1 className='headerfont'>Recruiter Ramble </h1>

            <div className ='dropdown-button'>
                {/* //btn btn-primary  */}
             <button className="dropdown-toggle" type="button" data-toggle="dropdown">Menu <span className="caret"></span></button>
               <ul className ='dropdown-menu'>
                   <li><Link to='/' className='nav-links'>Home</Link></li>
                  <li><Link to='/dash' className='nav-links'>Browse Recruiters </Link></li> 
                  {/* <li><Link to='/interviews' className='nav-links'> My Interviews</Link></li>  */}
                  <li><Link to='/profile' className='nav-links'> My Profile</Link></li> 
                  <li><Link to='/feedback' className='nav-links'> My Feedback</Link></li> 
                  <li><Link to='/logout' className='nav-links'> Log Out</Link></li> 
                
                </ul></div>
                <div className ='desktop-links'>
                   <Link to='/' className='desktop-links'>Home</Link>
                  <Link to='/dash' className='desktop-links'>Browse Recruiters </Link>
                  {/* <li><Link to='/interviews' className='nav-links'> My Interviews</Link></li>  */}
                 <Link to='/profile' className='desktop-links'> My Profile</Link>
                  <Link to='/feedback' className='desktop-links'> My Feedback</Link>
                  <Link to='/logout' className='desktop-links'> Log Out</Link> </div>
                

        </div>
        
         </div>
    )
}
// }

export default withRouter(Header);


// return (
//     <div className='header-container'>
        
//         <h1 className='headerfont'>Recruiter Ramble </h1>

//         <div className ='dropdown'>
//             {/* //btn btn-primary  */}
//          <button className="dropdown-toggle" type="button" data-toggle="dropdown">Menu <span className="caret"></span></button>
//            <ul className ='dropdown-menu'>
//                <li><Link to='/' className='nav-links'>Home</Link></li>
//               <li><Link to='/dash' className='nav-links'>Browse Recruiters </Link></li> 
//               {/* <li><Link to='/interviews' className='nav-links'> My Interviews</Link></li>  */}
//               <li><Link to='/profile' className='nav-links'> My Profile</Link></li> 
//               <li><Link to='/feedback' className='nav-links'> My Feedback</Link></li> 
//               <li><Link to='/logout' className='nav-links'> Log Out</Link></li> 
            
//             </ul>
//     </div>
    
//      </div>
// )



