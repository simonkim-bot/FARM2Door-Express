import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        //redux allows you to mutate state
        setItems: (state, action) => {
            state.items = action.payload;
        },
        // this function is specifically update what is the cart
        addToCart:(state, action) => {
            //whatever item we are adding to the cart we are update=ing with action payload
            state.cart = [...state.cart, action.payload.item];
        },

        removeFromCart:(state, action) => {
            //what this dooes is anytime we want to remove from cart  we are goin to filter out or not equal to the id we pass in
            state.cart = state.cart.filter((item) =>item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            //we have to map through the entire cart to figure out which count we want to update and increase count otherwise we return item
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id) {
                    item.count++;
                }
                return item;
            });
        },
        decreaseCount:(state, action) =>{
            state.cart = state.cart.map((item) =>{
                if(item.id === action.payload.id && item.count > 1){
                    item.count --;
                }
                return item;
            });
        },

        setIsCartOpen: (state) => {
            //basically flipping what the current state is 
            state.isCartOpen = !state.isCartOpen;
        }

        

    }
});


export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;