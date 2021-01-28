import { configureStore} from '@reduxjs/toolkit'
import productReducer from './reduces/productSlice'
import basketReducer from './reduces/basketSlice'

const reducer = {
    product: productReducer,
    basket: basketReducer
}
const store = configureStore({
    reducer
})

export default store