import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import productNatute from '../../assets/images/Products/tsaky-nature.jpg'
import productFromage from '../../assets/images/Products/tsaky-fromage.jpg'
import productPiment from '../../assets/images/Products/tsaky-piment.jpg'



const initialState = {
    error: undefined,
    products: [
        {
            id: 1,
            title: 'TSAKY nature',
            image: productNatute,
            price: 2.5,
            type: 'nature',
            quantity: 0,
            cost: 0
          },
          {
            id: 2,
            title: 'TSAKY fromage',
            image: productFromage,
            price: 2.5,
            type: 'fromage',
            quantity: 0,
            cost: 0

          },
          {
            id: 3,
            title: 'TSAKY piment',
            image: productPiment,
            price: 2.5,
            type: 'piment',
            quantity: 0,
            cost: 0

          },
          {
            id: 4,
            title: 'TSAKY coffret',
            image: '',
            price: 8.5,
            type: 'coffret',
            quantity: 0,
            cost: 0
          }
    ],
    product: undefined,
    loading: false,
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers:{
        select: (state, action: PayloadAction<any>) =>{
            state.product = action.payload
        }
    }
    

})

export const productsSelector = (state) => state.product.products
export const productSelector = (state) => state.product.product
export const {select} = productSlice.actions
export default productSlice.reducer