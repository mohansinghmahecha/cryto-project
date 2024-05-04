export function listofallproduct(products) {
   return {
     type: "LIST_PRODUCTS",
     payload: products
   };
 }
 
 export function currencyName(nameofcurrency) {
   return {
     type: "NAME",
     payload: nameofcurrency
   };
 }

 export function latestCrypto(items) {
  return {
    type: "LATE",
    payload: items
  };
}
export function exchangeFn(item){
  return {
    type : "EXCHANGE",
    payload  : item
  };
}