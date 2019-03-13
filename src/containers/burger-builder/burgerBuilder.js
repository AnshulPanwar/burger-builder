import React, {Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class bugerBuilder extends Component{

   

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false

    }

    updatePurchaseState(ingredients){
        // const ingredients ={...this.state.ingredients};
        console.log(true);
        
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                return sum + el;
            },0)

        this.setState({purchasable: sum > 0})    
    }

    addIngredientHandler = (type) => {
        console.log(type);
        const oldCount = this.state.ingredients[type];
        console.log(oldCount);
        const updatedCount = oldCount + 1;
        const updatedIngredient = { ...this.state.ingredients};
        console.log(updatedCount);
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        console.log(updatedIngredient);
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice});
        console.log("addingredient works");
        this.updatePurchaseState(updatedIngredient);

    }

    removeIngredientHandler = (type) => {
        console.log("removeIngredientHandler works!!")
        console.log(type);
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        console.log(oldCount);
        const updatedCount = oldCount - 1;
        const updatedIngredient = { ...this.state.ingredients};
        console.log(updatedCount);
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        console.log(updatedIngredient);
        this.setState({ ingredients: updatedIngredient, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredient);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler=()=>{
        alert("yoohoo");
    }

    render(){
        const disabledInfo = {...this.state.ingredients};

        for(let keys in disabledInfo){
            disabledInfo[keys] = disabledInfo[keys] <= 0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler} >
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice} 
                    purchaseCancel={this.purchaseCancelHandler} 
                    purchaseConitnue={this.purchaseContinueHandler} />

                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                 ingredientAdded={this.addIngredientHandler}
                 ingredientRemoved={this.removeIngredientHandler}
                 disabled = {disabledInfo}
                 price = {this.state.totalPrice}
                 purchasable={this.state.purchasable}
                 ordered={this.purchaseHandler}
                 />
            </Aux>
        );
    }
}

export default bugerBuilder;