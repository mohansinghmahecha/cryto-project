

const InitialState = []
const intialCurrencyName = "inr"
const exchangeState = [];
//const allTradingItems = []

export const MyproductList = (state = InitialState, action) => {
    if (action.type === "LIST_PRODUCTS") {
        return {
            item: action.payload
        }

    }

    return state;


}

export const MyCurrencyNames = (state = intialCurrencyName, action) => {
    switch (action.type) {
        case "NAME":
            return action.payload;
        default:
            return state;
    }
};
export const exchangeFunction = (state = exchangeState, action) => {
    switch (action.type) {
        case "EXCHANGE":
            console.log("Payload:", action.payload);
            return action.payload; // Check if action.payload is defined
        default:
            console.log("Default case, returning previous state:", state);
            return state;
    }
};





