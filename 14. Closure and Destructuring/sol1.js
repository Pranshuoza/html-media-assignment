function counter() {
    let count = 0; 

    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    };
}

// Example usage:
const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount()); 

const anotherCounter = counter();
console.log(anotherCounter.getCount()); 
