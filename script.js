// class Animal {
// 	constructor(name){
// 		this.name = name
// 	}

// 	sound() {
// 		console.log(`Zwierzak robi hau hau.`)
// 	}
// }

// class Dog extends Animal {
// 	constructor(name,age){
// 		super(name)
// 		this.age = age
// 	}

// }

// class Cat extends Animal {
// 	constructor(name){
// 		super(name)
// 	}
// 	sound(){
// 		console.log('miau')
// 	}
// }

// const dog = new Dog('Drops', 4)
// const cat = new Cat('Peter')
// dog.sound()
// console.log(dog)
// cat.sound()
// console.log(cat)

// const user = {
// 	name: 'Lily',
// 	age: 23
// }

// const pet = {
// 	name: 'Drops',
// 	type: 'dog'
// }

// const userInfo = Object.assign({},user,pet)
// console.log(user)
// console.log(pet)
// console.log(userInfo)

// const userCopy = Object.assign({}, user)
// userCopy.age = 24
// console.log(userCopy)

// const person = {
// 	name: "Lily",
// 	age: 23,
// 	job: "DJ",
// 	car: {
// 		brand: 'Dodge',
// 		model: 'Viper'
// 	}
// };

// const showInfo = () => {
// 	const { name, age, job } = person;

// 	console.log(
// 		`${name} pracuje ajko ${job} i ma ${age} lat/a`
// 	);
// };

// showInfo(person);

// const showInfo2 = ({car}) => {
// console.log(car);
// }

// showInfo2(person)

const colors = ['red', 'white', 'blue']
const firstColor = colors[0]
const secondColor = colors[1]

const [first, second] = colors

console.log(firstColor, secondColor)
console.log(first,second)

const[,,abcs] = colors
console.log(abcs)