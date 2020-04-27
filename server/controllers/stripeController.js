const {SECRET_KEY} = process.env,
    Stripe = require('stripe') (SECRET_KEY);

module.exports = {
    completePayments: (req,res) => {
        const {token,amount} = req.body;
        const charge = Stripe.charges.create({
            amount,
            currency: 'usd',
            source: token.id,
            description: 'test charge'
        },
        function(err, charge){
            if(err){
                return res.sendStatus(500);
            }
            res.sendStatus(200);
            
        })
    }
}