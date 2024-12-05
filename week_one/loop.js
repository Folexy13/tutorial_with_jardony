// This is the code of loop section and it is a single comment

/**
 * This is the code of loop section and it is a multine commenet
 *
 *
 */
//0         //1         //2
let cars = ["toyota", "tesla", "range-rovers"];
// length of loops = n-1, where n is the length of the loop

// for
/**
 * for(instantiating;condition;iteration){}
 * i++ = i+1; or i+=1;
 */

/**
 * 
 * for (let i = 0; i <= cars.length-1; i++) { (condition here would run for i=0 to i< cars.length -1
 * )
	console.log(cars[i]);
}
 */
for (let i = 0; i < cars.length; i++) {
	// console.log(cars[i]);
}

// for-in (convient for use only for object type)
let person = {
	fname: "John",
	lname: "Smith",
	age: 30,
};

for (let x in person) {
	// console.log(x);
	console.log(x + ": " + person[x]);
}

// for of

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
	console.log(number);
}
