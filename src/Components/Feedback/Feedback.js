import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom';

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
        <div>
            <div>{feedback.firstname}{feedback.lastname}</div>
            <div>{feedback.interview_date}</div>
            <div>{feedback.notes}</div>
            <div> <img src = {feedback.img} alt = "photos" width ='200'></img></div>
        </div>
        ))
    
        console.log(this.state.allFeedback);
        return(
            <div className='feedback dashboard'>
                
                <div>
                    <h2>Feedback</h2>
                    {mappedFeedback}
                    
                </div>
            </div>
    
        )}}

        const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Feedback);

// export class Feedback extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>My Feedback</h2>
//             </div>
//         )
//     }
// }

// export default Feedback
