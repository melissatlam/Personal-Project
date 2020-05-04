import React, {Component} from 'react';
import './Profile.scss';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser, clearUser} from '../../redux/reducer';
// import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            editView: false,
            
        }
    }

    // This functionality will route an un-logged in user to the landing page.
    componentDidMount(){
        if(!this.props.user.email){
            this.props.history.push('/');
        }
    }

    handleInput = (val) => {
        this.setState({username: val})
    }

    handleEditView = () => {
        this.setState({editView: !this.state.editView})
    }

    updateUsername = () => {
        const {username} = this.state;
        axios.put(`/api/user/${this.props.user.user_id}`, {username})
        //
        .then(res => {
            this.props.getUser(res.data[0]);
            this.handleEditView();
            this.setState({username: ''});
        })
        .catch(err => console.log(err));
    }

    getUsers = () => {
        axios.get(`/api/users/${this.props.user.user_id}`)
        .then(res => this.setState({users: res.data}))
        .catch(err => console.log(err));
    }


    deleteUser = (id) => {
        axios.delete(`/api/user/${id}`)
        .then(() => {
            // this.getUsers();
            this.props.clearUser();
            this.props.history.push('/');

        })
        .catch(err => console.log(err))
    }


    render(){
        console.log(this.props.user.user_id);
        return (
            <div className='profile'>
                <h3>Your Profile</h3>
                <img width ='200'
                    className='profile-picture'
                    src={this.props.user.profile_picture}
                    alt={this.props.user.username}/>
                {!this.state.editView
                ? <h3><div>{this.props.user.username}</div> <div><button className='button' onClick={this.handleEditView}>Edit</button></div> </h3>
                : (<div>
                    <input 
                        value={this.state.username}
                        placeholder='New Username'
                        onChange={(e) => this.handleInput(e.target.value)}/>
                    <button className='button' onClick={this.updateUsername}>Submit</button>
                   </div>)}
                <h3>{this.props.user.email}</h3>
                <div>
                <button className='button' onClick={() => this.deleteUser(this.props.user.user_id)}>Delete</button>

                </div>
                {/* <button onClick={this.handleLogout}>Logout</button>  */}
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, clearUser})(Profile);
//button id='edit-button'