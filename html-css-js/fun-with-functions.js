// Hah get it their FUNction

function fun(){
    console.log("WHy is no on ehaving having a good? I specifically request it")
}

function fun2(){
    console.log("Charles is slowly loosing his mind! Help")
}

function funception(fun1){
    fun1();
    console.log("There's fun in fun")
}

// funception - higher order function, meaning it takes in a function
// fun - is a callback function, function being provided as an argument
funception(fun2);

funception(a => console.log("anon fun function") )

// ctx -> , this::currentHandler

const dog = {
    petname: "Atlas",
    isHappy: true,
    isGood: undefined,
    hasTreat: null,
    age: 1,
    bark: function(){
        console.log("BORK BORK")
    },
    woof(){
        console.log("WOOF WOOF")
    }
}

dog.bark();
dog.woof()

// JSON
// language agnostic - it's irrevelant to the type of language your using because those values are also in every other language
const stringifiedDog = JSON.stringify(dog) // converting JS object to JSON
console.log(stringifiedDog);

const jsonBackToDog = JSON.parse(stringifiedDog);
console.log(jsonBackToDog)