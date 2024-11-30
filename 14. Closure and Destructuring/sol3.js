let myArray = [1, 2, 3];

function addToMyArray(...newElements) {
    myArray = [...myArray, ...newElements];
}
 
addToMyArray(4, 5, 6);
console.log(myArray);  

addToMyArray(7, 8);
console.log(myArray);  
