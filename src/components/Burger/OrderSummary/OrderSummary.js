import React from 'react';
import Aux from "../../../hoc/aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {    
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:<span>{props.ingredients[igKey]}</span></span>
                </li>
            )
        })

        return(
            <Aux>
                <h3>Your order</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
                <Button btnType="Danger" clicked={props.purchaseCancel} >Cancel</Button>
                <Button btnType="Success" clicked={props.purchaseConitnue} >Continue</Button>
            </Aux>
        )

}

export default OrderSummary;