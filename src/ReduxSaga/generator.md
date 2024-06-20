## Function
function sayHi() {
    return 'hi'
    return 'world' // never executed
}
const result = sayHi()  // give hi

## Generator
function* sayHiGenetator() {
    return 'hi'
}
const result = sayHiGenerator()  // give { [Iterator] }

## Generator gives multiple return values
function* sayHiGenetator() {
    yield 'hey'
    return 'hi'
}
const result = sayHiGenerator()
console.log(result.next())   // gives  { value: 'hey', done: false } 
console.log(result.next())   // gives  { value: 'hi', done: true } 
console.log(result.next())   // gives  { value: undefined, done: true } 

## for loop on place of next()
function* sayHiGenetator() {
    yield 'hey'
    yield 'world'
    yield 'say'
    return 'hi'
}
const result = sayHiGenerator()
* for loop not give return value ????
for(const i of result) {
    console.log(i) // give hey world say
}

## in function we can't puased it or interact with another but generator allow that [yield - pause and can add value in function]
function* newGenetator() {
    yield 'hey'
    const final = yeild 'give me value'
    return final
}
const result = newGenetator()
console.log(result.next())   // gives  { value: 'hey', done: false }
console.log(result.next())   // gives  { value: 'give me value', done: false }

## we can pause here and chancge value [control execution from outside of function]
console.log(result.next())   // gives  { value: undefined, done: true }
console.log(result.next('custome value'))   // gives  { value: custome value, done: true }
