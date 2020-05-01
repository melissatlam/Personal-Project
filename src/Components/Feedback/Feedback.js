import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom';
import './Feedback.scss';
import axios from 'axios';
import {connect} from 'react-redux';

class Feedback extends Component {
    constructor(props){
        super(props);
        this.state = {
            allFeedback:[],
            
        }
    }
    componentDidMount(){
        if(!this.props.user.email){
            this.props.history.push('/');
        }
        this.getFeedback()
    }

    getFeedback = () => {
        axios.get(`/api/feedback`)
        .then(res => this.setState({allFeedback: res.data}))
        .catch(err => console.log(err));
    }



    render(){
        const mappedFeedback = this.state.allFeedback.map((feedback) => (
        <div className="flex-box2">
            <div className='box3'> <img src = {feedback.img} alt = "photos" width ='200'></img></div>
            <div className='box4'>
            <div className='name'> {feedback.firstname}{feedback.lastname}</div>
            <div>Date Interviewed: {feedback.interview_date}</div>
            <div>Interview Feedback: {feedback.notes}</div></div>
            
        </div>
        ))
    
        console.log(this.state.allFeedback);
        return(
            <div className='feedback-dashboard'>
                
                <div>
                    <h2>Recruiter Responses</h2>
                    {mappedFeedback}
                    
                </div>
            </div>
    
        )}}

        const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Feedback);


