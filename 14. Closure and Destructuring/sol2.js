function calculateTotal({ price, quantity }) {
    return price * quantity;
}

 const item = { price: 50, quantity: 3 };
const totalCost = calculateTotal(item);
console.log(totalCost); 
