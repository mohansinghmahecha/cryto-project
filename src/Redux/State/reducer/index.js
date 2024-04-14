import { listofallproduct } from "../action";

const InitialState = []

export const MyproductList=(state = InitialState,action)=>{
    if(action.type==="LIST_PRODUCTS"){
        return {
           item: action.payload
        }

    }
    return state


}