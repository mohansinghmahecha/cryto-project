

const InitialState = []
const intialCurrencyName = "inr"
//const allTradingItems = []

export const MyproductList = (state = InitialState, action) => {
    if (action.type === "LIST_PRODUCTS") {
        return {
            item: action.payload
        }

    }

    return state


}

export const MyCurrencyNames = (state = intialCurrencyName, action) => {
    switch (action.type) {
        case "NAME":
            return action.payload;
        default:
            return state;
    }
};

/* export const LoadedItems  */