console.log('------Arrays----')

let hello = 'hello';
const stuff = [10, 20, true, null, undefined, NaN, hello, "cheesecake"]

console.log(stuff)
console.log(stuff[7])

const clonedStuff = [...stuff, true, 'hello', true, 'hello', true, 'hello', true, 'hello']
console.log(clonedStuff)

//stuff[100] = 'woah'
console.log(stuff);

// power functions attach to arrays - will learn more in functions
//stuff.map(a => console.log(a + 10))

// basic for-loop with i & indexing
for(let i = 0; i < stuff.length; i++){
    console.log(stuff[i]+10)
}

// enhanced for loop - for-of loop
for(const element of stuff){
    console.log(element + 20)
}

// Array Destructuring
const nameList = ['Matt', 'Robert', 'Seth', 'Blake']
// const matt = nameList[0]
// const robert = nameList[1]
// const seth = nameList[2]
// const blake = nameList[3]
const [matt, robert, seth, blake] = nameList

console.log(matt, robert, seth, blake) // what would the output look like now Matt, undefined, Seth, Blake

console.log('----------------')

console.log('-----objects----')

const user = {
    username: 'cjester',
    fname: 'Charles',
    age: 30, //going on 78
    isTrainer: true,
    hasLife: null,
    hasMeaningForExistence: 42,
    key: "Hah tricked you yet again!"
}

console.log(user.username)
console.log(user['age'])

for(const key in user){
    console.log(key, " : ", user[key]);
}


// Spread Operator for Objects
const clonedUser = {
    ...user,
    age: 29,
    email: "charles.jester@revature.com",
    salary: "3 meals of ramen/day"
}
console.log(clonedUser)


// Object Destructuring

const {username, password, fname, age } = user

console.log(username, password, fname, age);


console.log('----------------')