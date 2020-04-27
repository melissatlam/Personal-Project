import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Stripe from './Components/Stripe/Stripe';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.css';
import axios from 'axios';



class App extends Component {
    onToken = async(token) => {
        token.card = void 0;

        await axios.post('/api/payment', {token,amount:100})
            .then(() => {
                alert('Payment Submitted')
            })
            .catch(err => console.log(err))
            
    }

    render(){
        return (
            <div className="App">
                <Header/>
                 {routes}
                <StripeCheckout
                label='Proceed to Checkout'
                token={this.onToken}
                stripeKey={Stripe.publicKey}
                amount={100}
                //billingAddress={true}
                />
                </div>
        );
    }
    }

    export default App;

    // function App() {
//     return (
//         <div className="App">
//             <Header/>
            
//             {routes}
            
//         </div>
//     )
// }

// export default App;
