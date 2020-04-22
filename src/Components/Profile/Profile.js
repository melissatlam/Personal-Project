import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import {connect} from 'react-redux';
// import {getUser, clearUser} from '../../redux/reducer';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            editView: false
        }
    }

    //This functionality will route an un-logged in user to the landing page.
    // componentDidMount(){
    //     if(!this.props.user.email){
    //         this.props.history.push('/');
    //     }
    // }

    // handleInput = (val) => {
    //     this.setState({username: val})
    // }

    // handleEditView = () => {
    //     this.setState({editView: !this.state.editView})
    // }

    //Logging out should clear the user data from the backend(through the endpoint
    // below) and wherever it resides in the client-side(redux in this application).
    //Once logged out the user should be routed back to the landing page. This can 
    //be done through the history.push method from react-router-dom.
    // handleLogout = () => {
    //     axios.get('/auth/logout')
    //     .then(() => {
    //         //clear the user from redux or local state
    //         this.props.clearUser();
    //         //route the user to the landing page
    //         this.props.history.push('/');
    //     })
    //     .catch(err => console.log(err));
    // }

    // updateUsername = () => {
    //     const {username} = this.state;
    //     axios.put(`/api/user/${this.props.user.user_id}`, {username})
    //     .then(res => {
    //         this.props.getUser(res.data[0]);
    //         this.handleEditView();
    //         this.setState({username: ''});
    //     })
    //     .catch(err => console.log(err));
    // }

    render(){
        return (
            <div className='profile'>
                <h1>Your Profile</h1>
                {/* <img 
                    className='profile-picture'
                    src={this.props.user.profile_picture}
                    alt={this.props.user.username}/>
                {!this.state.editView
                ? <h2>{this.props.user.username} <button id='edit-button' onClick={this.handleEditView}>Edit</button></h2>
                : (<div>
                    <input 
                        value={this.state.username}
                        placeholder='New Username'
                        onChange={(e) => this.handleInput(e.target.value)}/>
                    <button id='edit-button' onClick={this.updateUsername}>Submit</button>
                   </div>)}
                <h2>{this.props.user.email}</h2>
                <button onClick={this.handleLogout}>Logout</button> */}
            </div>
        )
    }
}

// const mapStateToProps = reduxState => reduxState;

// export default connect(mapStateToProps, {getUser, clearUser})(Profile);
export default Profile