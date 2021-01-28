import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Product {
    country: string,
    type: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createAt: any,
    updateAt: any,
    auteur: any
}

const initialState = {
    error: undefined,
    baskets: [] as any[],
    sum: 0,
    quantity: 0,
    cost: 0,
    loading: false,
    open: false
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers:{
        add(state, action: PayloadAction<any>){
            state.baskets.push(action.payload)
            state.sum += action.payload.price
            state.cost += (action.payload.quantity * action.payload.price)
            state.quantity += action.payload.quantity
        },
        remove(state, {payload}){
            state.baskets = state.baskets.filter(item => item.id === payload)
            state.sum -= payload.price

        },
        open(state, action: PayloadAction<boolean>) {
            state.open = action.payload
        },
        initial(state){
                state.baskets = []
                state.sum = 0
                state.cost = 0
                state.quantity = 0
            
        },

        command(state){
            state = initialState
        }
    }
    

})

export const basketsSelector = (state) => state.basket.baskets

export const sumSelector = (state) => state.basket.sum
export const openSelector = (state) => state.basket.open
export const costSelector = (state) => state.basket.cost | 0

export const totalSelector = (state) => state.basket.quantity | 0

export const {add, remove, open,initial, command} = basketSlice.actions
export default basketSlice.reducer