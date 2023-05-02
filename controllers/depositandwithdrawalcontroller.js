
//TODO: add a stripe key
import stripe from 'stripe';

const payment = stripe('sk_test_51MhUtzIJnUpCjJrBzzbmCC1NlfO2MHkkvKTPMTLj4McHQ9DxCPBYXSTu1ZbfOvsCJvHKYCgcA9gp1F4OQHagHTTV00M63i8SAA');

// import { v4: uuidv4 } from ('uuid');

class userDepositWithdrawal {

    static deposit = async (req, res) => {
        try {

            const { method_id, amount } = req.body;
            console.log(req.body)
            
                const paymentMethod = await payment.paymentMethods.retrieve(payment_method_id);
                const customer = await payment.customers.create({ email: paymentMethod.billing_details.email });
                const paymentIntent = await payment.paymentIntents.create({
                    payment_method: method_id,
                    amount: amount, // 10 dollars
                    currency: 'usd',
                    customer: customer.id,
                    confirmation_method: 'manual',
                    confirm: true,
                });

                res.sendStatus(200);

                res.send({ balance: result1.vbalance, dayspending: todaysspendings })

            } catch (error) {

                console.log(error)
                
            }
        
    }
}
export default userDepositWithdrawal
