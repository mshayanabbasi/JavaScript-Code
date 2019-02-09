// Lecture let and const

// // ES5
// var name5 = 'Jane Smith'
// var age5 = 23
// name5 = 'Jane Miller'
// console.log(name5)

// // ES6
// const name6 = 'Jane Smith'
// var age6 = 23
// name6 = 'Jane Miller'
// console.log(name6)

// // ES5 
// function driverLiscence5(passedTest){
//     if(passedTest){
//         console.log(firstName)
//         var firstName = 'John'
//         var yearOfBirth = 1990
//     }
//     console.log(firstName+ ', born in'+yearOfBirth+', is now officially allowed to driver a car')
// }
// driverLiscence5(true)

// // ES6

// function driverLiscence6(passedTest){
//     console.log(firstName)
//     let firstName;
//     const yearOfBirth = 1990
//     if(passedTest){
//         firstName = 'John'
//     }
//     // Error for this line because let and const variable define in the if statement but its run it is the outside the if block
//     console.log(firstName+ ', born in'+yearOfBirth+', is now officially allowed to driver a car')

// }
// driverLiscence6(true)

// // ES5
// var i = 23

// for (var i = 0; i< 5;i++){
//         console.log(i)
// }
// console.log(i)

// // ES6
// let j = 23
// for(let i = 0; i < 5;i++){
//     console.log(i)
// }
// console.log(j)


// // Lecture: Blocks and IFES

// // ES6
// {
//     const a = 1
//     let b = 2
//     var c = 3
// }
// // console.log(a + b)
// console.log(c)

// //ES5 
// (function(){
//     var c = 3
// })()
// // console.log(c)

// // Lecture: Strings

// let firstName = 'John'
// let lastName = 'Smith'
// const yearOfBirth = 1990
// function calcAge(year){
//     return 2019 - year
// }

// // ES5
// console.log('This is '+firstName+' '+lastName+'. He was born in '+yearOfBirth+'. Today, he is '+calcAge(yearOfBirth)+' years old.')

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

// const n = `${firstName} ${lastName}`
// console.log(n.startsWith('j'))
// console.log(n.endsWith('th'))
// console.log(n.includes('oh'))
// console.log(`${firstName}`.repeat(5))

// // Lectures: Arrow Functions

// const years = [1990, 1965, 1982, 1937]

// // ES5
// var ages5 = years.map(function(el){
//     return 2019 - el
// })
// console.log(ages5)

// // ES6

// let ages6 = years.map(el =>{
//     return 2019 - el
// })
// console.log(ages6)

// ages6 = years.map((el, index)=>
//     `Age element ${index + 1}: ${2019 - el}.`
// )
// console.log(ages6)

// ages6 = years.map((el,index) =>{
//     const now = new Date().getFullYear()
//     const age = now - el
//     return `Age element ${index+1} ${age}`
// })
// console.log(ages6)

// // Lectures: Arrow Functions 2

// // ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click',function(){
//             var str = 'This is box number '+self.position+' and it is '+self.color
//             alert(str)
//         })
//     }
// }
// box5.clickMe()

// // ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
        
//         document.querySelector('.green').addEventListener('click',() =>{
//             var str = 'This is box number '+this.position+' and it is '+this.color
//             alert(str)
//         })
//     }
// }
// box6.clickMe()




// function Person(name){
//     this.name = name
// }
// // ES5

// Person.prototype.myFriends5= function(friends){
//     var arr = friends.map(function(el)
//     {
//         return this.name + ' is friends with '+ el
//     }.bind(this))
//     console.log(arr)
// }
// var friends = ['Bob', 'Jane', 'Mark']
// new Person(friends[0]).myFriends5(friends)

// // ES6

// Person.prototype.myFriends6 = function(friends){
//     var arr = friends.map(el=>
//         `${this.name} is friends with ${el}`)
//     console.log(arr)
// }
// new Person(friends[2]).myFriends6(friends)

// // Lecture: Destructuring

// // ES5
// var john = ['John', 26]
// // var name = john[0]
// // var age = john[1]

// // ES6
// const [name, age] = ['John', 26]
// console.log(name)
// console.log(age)

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// const {firstName, lastName} = obj

// console.log(firstName)
// console.log(lastName)

// const {firstName: a, lastName: b} = obj
// console.log(firstName)
// console.log(lastName)

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year
//     return [age, 65 - age]
// }

// const[age2, retirement] = calcAgeRetirement(1990)
// console.log(age2)
// console.log(retirement)

// // Lecture: Arrays

// const boxes = document.querySelectorAll('.box')

// // ES5

// var boxesArr5 = Array.prototype.slice.call(boxes)
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue'
// }
// )

// // ES6

// const boxesArr6 = Array.from(boxes)
// boxesArr6.forEach(cur => {
//     cur.style.backgroundColor = 'dodgerblue'
// })

// // ES5
// for(var i = 0; i < boxesArr5.length; i++){
//     if (boxesArr5[i].className === 'box blue'){
//         continue
//     }
//     boxesArr5[i].textContent = 'I changed to blue'
// }

// // ES6

// for(const cur of boxesArr6){
//     if(cur.className.includes('blue')){
//         continue
//     }
//     cur.textContent = 'I changed to blue!'
// }

// // ES5

// var ages = [12, 17, 8, 21, 11, 14]
// var full = ages.map(function(cur){
//     return cur >= 18
// })
// console.log(full)
// console.log(full.indexOf(true))
// console.log(ages[full.indexOf(true)])

// // ES6

// console.log(ages.findIndex(cur => cur >= 18))
// console.log(ages.find(cur => cur>=18))

// // Lecture: Spread Lecture

// function addFourAges(a, b, c, d){
//     return a + b + c + d;
// }
// var sum1 = addFourAges(18,12,13,10)
// console.log(sum1)

// // ES5
// var ages = [18, 12, 13, 10]
// var sum2 = addFourAges.apply(null, ages)
// console.log(sum2)

// // ES6
// const sum3 = addFourAges(...ages)
// console.log(sum3)

// const familyShayan = ['Imran', 'Arif', 'Irfan']
// const familyFaris = ['Asif', 'Adeel', 'Aamir']
// const bigFamily = [...familyShayan,'Nabeel', ...familyFaris]
// console.log(bigFamily)

// const h = document.querySelector('h1')
// const boxes = document.querySelectorAll('.box')
// const all = [h,...boxes]
// //const all = [...boxes]
// //const all = [h]
// Array.from(all).forEach(cur => 
//     cur.style.color = 'red')

// // Lecture: Rest Parameters

// function isFullAge5(limit){
//     // console.log(arguments)
//     var argsArr = Array.prototype.slice.call(arguments, 1)
//     argsArr.forEach(function(cur){
//         console.log((2019 - cur) >= limit)
//     })
// }
// isFullAge5(16, 1990, 2003, 1985)
// isFullAge5(1990, 2003, 1985, 1987, 2005)

// // ES6 
// function isFullAge6(...years){
//     years.forEach(cur => console.log((2016 - cur) >= 18))
// }
// isFullAge6(1990, 2003, 1985)
// isFullAge6(1990, 2003, 1985, 1987, 2005)

// // Lecture: Default parameters

// // ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality){
//     lastName === undefined ? lastName = 'Arif' : lastName = lastName
//     nationality === undefined ? nationality = 'Pakistani' : nationality = nationality
//     this.firstName = firstName
//     this.lastName = lastName
//     this.yearOfBirth = yearOfBirth
//     this.nationality = nationality
// }
// var shayan = new SmithPerson('Shayan', 1997)
// var faris = new SmithPerson('Faris', 1998, 'Irfan', 'Pakistani')


// // ES6 
// function SmithPerson(firstName, yearOfBirth, lastName = 'Arif', nationality = 'Pakistani'){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.yearOfBirth = yearOfBirth
//     this.nationality = nationality
// }

// const shayan = new SmithPerson('Shayan', 1997)
// const faris = new SmithPerson('Faris', 1998, 'Irfan', 'Pakistani')

// // Lecture: Maps

// const question = new Map()
// question.set('question','What is the official name of the latest major Javascript version?')
// question.set(1, 'ES5')
// question.set(2, 'ES6')
// question.set(3, 'ES2015')
// question.set(4, 'ES7')
// question.set('correct',3)
// question.set(true, 'Correct answer')
// question.set(false, 'Wrong please try again!')
// console.log(question.get('question'))
// console.log(question.size)
// if(question.has(4)){
//     // question.delete(4)
//     console.log('Answer 4 is here')
// }
// // question.clear()
// question.forEach((value, key) => {
//     console.log(`This is a ${key}, and it's set to ${value}`)
// })
// for (let [key, value] of question.entries()){
//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key}: ${value}`)
//     }
//     // console.log(`This is a ${key}, and it's set to ${value}`)
// }

// const ans = parseInt(prompt('Write the correct answer'))
// console.log(question.get(ans === question.get('correct')))

// // Lecture: Classes

// // ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
// }
// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
// }
// var shayan5 = new Person5('Shayan', 1997, 'Freelancer')

// // ES6
// class Person6{
//     constructor(name, yearOfBirth, job){
//         this.name = name
//         this.yearOfBirth = yearOfBirth
//         this.job = job
//     }
//     calculateAge(){
//         var age = new Date().getFullYear() - this.yearOfBirth
//         console.log(age)
//     }
//     static greeting(){
//         console.log('Hey there!')
//     }
// }
// const shayan6 = new Person6('Shayan', 1997, 'Freelancer')
// Person6.greeting()

// // Lecture: Classes and SubClasses

// // ES5

// var Person5 = function(name, yearOfBirth, job){
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
// }
// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age)
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
//     Person5.call(this,name,yearOfBirth,job)
//     this.olympicGames = olympicGames
//     this.medals = medals
// }
// Athlete5.prototype = Object.create(Person5.prototype)
// Athlete5.prototype.wonMedal = function(){
//     this.medals++
//     console.log(this.medals)
// }
// var shayanAthlete5 = new Athlete5('Shayan', 1997, 'swimmer', 3, 10)
// shayanAthlete5.calculateAge()
// shayanAthlete5.wonMedal()

// // ES6

// class Person6{
//     constructor(name, yearOfBirth, job){
//         this.name = name
//         this.yearOfBirth = yearOfBirth
//         this.job = job
//     }
//     calculateAge(){
//         var age = new Date().getFullYear() - this.yearOfBirth
//         console.log(age)
//     }
// }
// class Athlete6 extends Person6 {
//     constructor(name, yearOfBirth, job, olympicGames, medals){
//         super(name, yearOfBirth, job)
//         this.olympicGames = olympicGames
//         this.medals = medals
//     }
//     wonMedal(){
//         this.medals++
//         console.log(this.medals)
//     }
// }
// const shayanAthlete6 = new Athlete6('shayan',1997,'freelancer',3,10)

// shayanAthlete6.calculateAge()
// shayanAthlete6.wonMedal()


// Coding Challenge 8

class Element {
    constructor(name, buildYear){
        this.name = name
        this.buildYear = buildYear
    }
}
class Park extends Element{
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear)
        this.area = area;
        this.numTrees = numTrees
    }
    treeDensity(){
        const density = this.numTrees / this.area
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
}
class Street extends Element {
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear)
        this.length = length
        this.size = size
    }
    classifyStreet(){
        const classification = new Map()
        classification.set(1, 'tiny')
        classification.set(2, 'small')
        classification.set(3, 'normal')
        classification.set(4, 'big')
        classification.set(5, 'huge')
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }
}

const allPark = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)]

const allStreet = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset', 1982, 2.5, 5)]


function calc(arr){
    const sum = arr.reduce((prev, cur, index)=>
    prev + cur, 0)
    return [sum, sum / arr.length]
}

function reportParks(p){
    console.log('-------PARKS REPORT-------')
    // Density
    p.forEach(el => el.treeDensity())
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear)
    const [totalAge, avgAge] = calc(ages)
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`) 
    // Which park has more than 1000 trees
    const i = p.map(el => 
        el.numTrees).findIndex(el => el>=1000)
        console.log(`${p[i].name} has more than 1000 trees.`)
}
function reportStreets(s){
    console.log('-------STREETS REPORT-------')
    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length))
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`)
    // Classify sizes
    s.forEach(el => el.classifyStreet())
}
reportParks(allPark)
reportStreets(allStreet)















