import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Dashboard.scss';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Stripe from '../Stripe/Stripe';



class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            allRecruiters:[],
            // allCalendars:[]
        }
    }
    componentDidMount(){
        
        this.getRecruiters()
    }

    getRecruiters = () => {
        axios.get(`/api/recruiters`)
        .then(res => this.setState({allRecruiters: res.data}))
        .catch(err => console.log(err));
    }

    onToken = async(token) => {
        token.card = void 0;

        await axios.post('/api/payment', {token,amount:100})
            .then(() => {
                alert('Payment Submitted')
            })
            .catch(err => console.log(err))
            
    }
    getCalendars= () => {
        axios.get('/api/calendar')
        .then(res => this.setState({allCalendars: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        const mappedRecruiters = this.state.allRecruiters.map((recruiters) => (
            
                <div className ='flex-box'>

                    <div className='box1'>
                   <div> <img src = {recruiters.photo} alt = "photos" width ='200'></img></div>
                   <div className='stripe'><StripeCheckout
                    label='Proceed to Checkout'
                    token={this.onToken}
                    stripeKey={Stripe.publicKey}
                    amount={2000}
                        //billingAddress={true}
                    /></div></div>

                    <div className='box2'>
                   <ul className='name'> {recruiters.firstname}{recruiters.lastname}</ul>
                   <ul> Experience: {recruiters.years_experience} years</ul>
                   <ul>Current Employer: {recruiters.current_employer}</ul>
                   <ul> Previous Employers: {recruiters.previous_employers}</ul>
                   <div>Availability: {recruiters.day_available} at {recruiters.time_available}</div>
                   </div>
                   </div>
            
        ))

        

        console.log(this.state.allRecruiters);
        return(
            <div className='recruiters-dashboard'>
                
                <div>
                    <div className ='subheader'>
                    <div >Recruiters Available for:</div>
                    <div >Mock Interviews</div>
                    <div >Resume Review</div></div>
                    <div>
                    {mappedRecruiters}</div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
