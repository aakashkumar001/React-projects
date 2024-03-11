
import CheckoutStepper from './components/CheckoutStepper.jsx';
import './App.css'

const CHECKOUT_STEPS = [
   {
    name:"Customer Info",
    component: () => <div>Provide your contact details</div>
  },
  {
    name: "Shipping info",
    component: () => <div>Provide Address</div>
  },
  {
    name:"Payment",
    component: () => <div>Payment Details</div>
  },
  {
    name:"Delivered",
    component: () => <div>Your Order has been delivered</div>
  },
];

const App = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  )
}

export default App