import Axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants"

export const addToCart =(productId,qty) => async (dispstch,getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`)
    dispstch({
        type:CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            product:data._id,
            qty
        },
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}