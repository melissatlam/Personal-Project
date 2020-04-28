import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Stripe from '../Stripe/Stripe';



class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            allRecruiters:[]
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
        axios.get(`/api/recruiters/:id`)
        .then(res => this.setState({allRecruiters: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        const mappedRecruiters = this.state.allRecruiters.map((recruiters) => (
            
                <div>
                   <div> Name: {recruiters.firstname}
                    { recruiters.lastname}</div>
                   <div> Current Employer: {recruiters.current_employer}</div>
                   <div> Previous Employers: {recruiters.previous_employers}</div>
                   <div> Years Experience: {recruiters.years_experience}</div>
                   <div> <img src = {recruiters.photo} alt = "photos" width ='200'></img></div>
                   <div><StripeCheckout
                label='Proceed to Checkout'
                token={this.onToken}
                stripeKey={Stripe.publicKey}
                amount={2000}
                //billingAddress={true}
                /></div>
                   </div>
            
        ))
        console.log(this.state.allRecruiters);
        return(
            <div className='recruiters dashboard'>
                
                <div>
                    <h2>Browse Recruiters</h2>
                    {mappedRecruiters}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
