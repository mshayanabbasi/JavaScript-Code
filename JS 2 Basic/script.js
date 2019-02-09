console.log('Hello World!')

/* 
* Variables and data types
*/
var firstName = "Shayan";
console.log(firstName)

var lastName = 'Arif';
var age = 21

var fullAge = true
console.log(fullAge)

var job;
console.log(job)

job = 'Teacher'
console.log(job)


/****************
* Variables mutation and type coercion
*/

var firstName = 'John'
var age = 28
// Type Coercion
console.log(firstName+" "+age)

var job, isMarried;
job = 'Teacher'
isMarried = false
console.log(firstName+' is a '+age+ ' year old '+job+'. Is he married? '+isMarried)

// Variable Mutation

age = 'twenty eight'
job = 'driver'
alert(firstName+' is a '+age+ ' year old '+job+'. Is he married? '+isMarried)
var lastName = prompt('What is the last Name?')
console.log(firstName+' '+lastName)


/* 
* Basic Operator
*/
var now, yearJohn, yearMark
ageJohn = 28
ageMark = 33

now = 2018;
// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn)
console.log(now + 2)
console.log(now * 2)
console.log(now / 10)
// logical operators
var johnOlder = ageJohn<ageMark
console.log(johnOlder)

// //typeof Operator

console.log(typeof johnOlder)
console.log(typeof ageJohn)
console.log(typeof 'Mark is older than John')

var x
console.log(typeof x)

/*
Operator precedence
*/

var now = 2018
var yearJohn = 1989
var fullAge = 18
// Multiple Operators
var isFullAge = now - yearJohn >=fullAge
console.log(isFullAge)
// Grouping
var ageJohn = now - yearJohn
var ageMark = 35
var average = (ageJohn + ageMark) / 2
console.log(average)

// // Multiple Assignments
var x,y;
x = y = (3+5)* 4-6
console.log(x,y)

// // More Operators
x *=2
console.log(x)
x+=10
console.log(x)
x--
console.log(x)

/* Coding Challenge 1 */
var markMass = 28;
var markHeight = 6
var johnMass = 34
var johnHeight = 7
var markBMI = markMass / (markHeight * markHeight)
console.log(markBMI)
var johnBMI = johnMass / (johnHeight * johnHeight)
console.log(johnBMI)
var heigher = markBMI > johnBMI
console.log("Is Mark's BMI heigher than John's? "+heigher)


/*
* If / else statements
*/
var firstName = 'john'
var civilstatus = 'single'
if(civilstatus === 'married'){
    console.log(firstName+' is married!')
}
else{
    console.log(firstName+'will hopefully very soon :)')
}
var isMarried = true
if(isMarried){
    console.log(firstName+' is married!')
}
else{
    console.log(firstName+'will hopefully very soon :)')
}
var markMass = 28;
var markHeight = 6
var johnMass = 34
var johnHeight = 7
var markBMI = markMass / (markHeight * markHeight)
// console.log(markBMI)
var johnBMI = johnMass / (johnHeight * johnHeight)
if(markBMI>johnBMI){
    console.log('Mark\'s BMI is higher than John\'s')
}
else{
    console.log('John\'s BMI is higher than Mark\'s')}
/* 
* Boolean Logic
*/
var firstName = 'John'
var age = 20
if(age<13){
    console.log(firstName+' is a boy.')
}
else if(age >=13 && age < 20){
    console.log(firstName+' is a teenger.')
}
else if(age>= 20 && age <30){
    console.log(firstName + ' is a young man.')
}
else{
    console.log(firstName+' is a man.')
}
/* Coding challenge 1 */
var heightJohn = 156
var heightMike = 165
var ageJohn = 26
var ageMike = 29

var scoreJohn = heightJohn+5*ageJohn
var scoreMike = heightMike+5*ageMike
if(scoreJohn > scoreMike){
    console.log('John wins the game with '+scoreJohn+' points')
}
else if(scoreMike > scoreJohn){
    console.log('Mike wins the game with '+scoreMike+' points')
}
else if(scoreJohn === scoreMike){
    console.log('This is a draw')
}

/* The Ternary Operator and switch statements */

// Ternary operator
var firstName = 'John'
var age = 22
age >=18 ? console.log(firstName+' drinks beer.'):console.log(firstName + ' drinks juice')
var drinks = age>=18 ? 'beer':'juice'
console.log(drinks)

// //Switch statement

var job = 'driver'
switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code')
        break
    case 'driver':
        console.log(firstName+' drives an uber in Lisbon.')
        break
    case 'designer':
        console.log(firstName+' designs beautiful websites.')
        break
    default:
        console.log(firstName+' does something else.')
}


/* Truthy and Falsy values and equality operators*/
//falsy values: undefined, null, 0, '',NaN
//truthy values: Not Falsy values
var height
height = 23
if(height || height === 0){
    console.log('variable is defined')
}
else{
    console.log('Variable has not been defined')
}
// //Equality Operators

if(height == '23'){
    console.log('The == operator does type coercion')
}
/*Coding challenge 2 */
var johnBasketBall1 = 89
var johnBasketBall2 = 120
var johnBasketBall3 = 103

var averageJohnTeam = (johnBasketBall1 +johnBasketBall2 +johnBasketBall3)/3
console.log(averageJohnTeam)
var mikeBasketBall1 = 95;
var mikeBasketBall2 = 94;
var mikeBasketBall3 = 123;
var averageMikeTeam = (mikeBasketBall1+mikeBasketBall2+mikeBasketBall3)/3
console.log(averageMikeTeam)
if(averageJohnTeam > averageMikeTeam){
    console.log('John\'s team is a winner')
}
else if(averageMikeTeam >averageJohnTeam){
    console.log('Mike\'s team is a winner')
}
else if(averageJohnTeam === averageMikeTeam){
    console.log('This is a draw')
}

var johnBasketBall1 = 107
var johnBasketBall2 = 123
var johnBasketBall3 = 103
var averageJohnTeam = (johnBasketBall1 +johnBasketBall2 +johnBasketBall3)/3
console.log(averageJohnTeam)
var mikeBasketBall1 = 116;
var mikeBasketBall2 = 94;
var mikeBasketBall3 = 123;
var averageMikeTeam = (mikeBasketBall1+mikeBasketBall2+mikeBasketBall3)/3
console.log(averageMikeTeam)
var maryBasketBall1 = 94
var maryBasketBall2 = 134
var maryBasketBall3 = 105
var averageMaryTeam = (maryBasketBall1+maryBasketBall2+maryBasketBall3)/3
console.log(averageMaryTeam)
if(averageJohnTeam > averageMikeTeam && averageJohnTeam>averageMaryTeam){
    console.log('John\'s team is a winner')
}
else if(averageMikeTeam >averageJohnTeam && averageMikeTeam>averageMaryTeam){
    console.log('Mike\'s team is a winner')
}
else if(averageMaryTeam > averageJohnTeam && averageMaryTeam > averageMikeTeam){
    console.log('Marry\'s team is a winner')

}
else if(averageJohnTeam === averageMikeTeam && averageJohnTeam === averageMaryTeam){
    console.log('This is a draw')
}
else if(averageMikeTeam === averageJohnTeam && averageMikeTeam === averageMaryTeam)
{
    console.log('This is a draw')
}
else if(averageMaryTeam === averageJohnTeam && averageMaryTeam === averageMikeTeam){
    console.log('This is a draw')

}
/* 
Functions 
*/
function calculateAge(birthYear){
    return 2018 - birthYear
}
var ageJohn = calculateAge(1990)
var ageMike = calculateAge(1948)
var ageJane = calculateAge(1969)

console.log(ageJohn, ageMike,ageJane)

function yearsUntiRetierment(year, firstName){
    var age = calculateAge(year)
    var retirement = 65 - age
    if(retirement > 0){
    console.log(firstName+ ' retires in '+retirement+' years.')
    }
    else{
        console.log(firstName+' is already retired.')
    }
}
yearsUntiRetierment(1990,'John')
yearsUntiRetierment(1948,'Mike')
yearsUntiRetierment(1969,'Jane')

/* Function statements and Expression */
// Function decleration
// Function Expression
var whatDoYouDo =  function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.'
        case 'driver':
            return firstName + ' drives a cab in Lisbon'
        case 'designers':
            return firstName + ' designs beautiful websites'
        default:
            return firstName + ' does something else'
        
    }
}
console.log(whatDoYouDo('teacher','John'))
console.log(whatDoYouDo('designer','Jane'))
console.log(whatDoYouDo('retired','Mark'))

/* Arrays */

// Initialize new Array
var names = ['John','Mike','Mark']
var years = new Array(1990,1969,1948)
console.log(names)
console.log(names.length)
// Mutate array data
names[1] = 'Ben'
console.log(names)
names[names.length] = 'Mary'
console.log(names)
// Different data types
var john = ['John','Smith',1990,'designer',false]
john.push('blue')
john.unshift('Mr.')
console.log(john)
john.pop()
john.pop()
john.shift()
console.log(john)

console.log(john.indexOf(23))

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer':'John is a designer'
console.log(isDesigner)


/* Coding Challenge 3 */

function tipCalculator(bill){
    var percentage;
    if(bill < 50){
        percentage = 0.2
    }
    else if(bill >=50 && bill < 200){
        percentage = 0.15
    }
    else{
        percentage = .1
    }
    return percentage * bill
}
// console.log(tipCalculator(300))

var bills = [124, 48, 268]
var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])]
var finalValues = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(tips, finalValues)


/* Ojects and properties */

// Object literal
var john = {
    firstName:'John',
    lastName:'Smith',
    birthYear:1990,
    family:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false
};
console.log(john.firstName)
var x = 'birthYear'
console.log(john['lastName'])
console.log(john[x])
john.job = 'designer'
john['isMarried'] = true
console.log(john)

// // new Object syntax
var jane = new Object();
jane.name = 'Jane'
jane.birthYear = 1969
jane['lastName'] = 'Smith'
console.log(jane)

/* Object and methods */

 var john = {
     firstName:'John',
     lastName:'Smith',
     birthYear:1992,
     family:['Jane','Mark','Bob','Emily'],
     job:'teacher',
     isMarried:false,
     calcAge: function(){
         this.age = 2018-this.birthYear
     }
};
// console.log(john.calcAge())

john.calcAge()
console.log(john)

/* Coding Challenge 4 */

var John = {
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.BMI = this.mass /(this.height*this.height)
        return this.BMI
    }
}
var Mark = {
    fullName:'Mark Miller',
    mass: 78,
    height:1.69,
    calcBMI:function(){
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}
John.calcBMI()
Mark.calcBMI()
console.log(John,Mark)

if(John>Mark){
    console.log(John.fullName+' has a heigher BMI of '+John.BMI)
}
else if(Mark>John){
    console.log(Mark.fullName+' has a heigher BMI of '+Mark.BMI)
}
else{
    console.log('They have the same BMI')
}

/* Loops and iteration */

// for loop
for (var i = 0; i <= 20; i+=2){
    console.log(i)
}
var john = ['John','Smith',1990,'designer',false]
for(var i = 0; i < john.length; i++){
    console.log(john[i])
}
// // while loop
var i = 0
while(i<john.length){
    console.log(john[i])
    i++;
}
// // continue and break statements
var john = ['John','Smith',1990,'designer',false]
for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i])
}

var john = ['John','Smith',1990,'designer',false]
for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') {
        break
    }
    console.log(john[i])
}

// // Looping backwards
for(var i = john.length - 1; i>= 0;i--){
    console.log(john[i])
}
console.log(tipCalculator(300))
var john = {
    fullName:'John Smith',
    bills:[124,48,268,180,42],
    calcTips:function(){
        this.tips = []
        this.finalValues = []        

        for(var i=0;i<this.bills.length;i++){
            var percentage;
            if(this.bills[i]<50){
                percentage = .2
            }
            else if(this.bills[i]>=50 && this.bills[i]<200){
                percentage= .15
            }
            else{
                percentage = .1
            }
            this.tips[i] = this.bills[i]*percentage
            this.finalValues[i] = this.bills[i]+this.bills[i]*percentage
        }
    }
}
john.calcTips()    
console.log(john)
var mark = {
    fullName:'Mark Miller',
    bills:[77,475,110,45],
    calcTips:function(){
        this.tips = []
        this.finalValues = []        

        for(var i=0;i<this.bills.length;i++){
            var percentage;
            if(this.bills[i]<100){
                percentage = .2
            }
            else if(this.bills[i]>=100 && this.bills[i]<300){
                percentage= .1
            }
            else{
                percentage = .25
            }
            this.tips[i] = this.bills[i]*percentage
            this.finalValues[i] = this.bills[i]+this.bills[i]*percentage
        }
    }
}
function calcAverage(tips){
    var sum = 0 
    for(var i = 0;i<tips.length;i++){
        sum+=tips[i]
    }
    return sum/tips.length
}

john.calcTips()    
mark.calcTips()


john.average = calcAverage(john.tips)
console.log(john, mark)
if(john.average > mark.average){
    console.log(john.fullName+'\s family pays higher tips with an average of $ '+john.average)
}
else if(mark.average > john.average){
    console.log(john.fullName+'\s family pays higher tips with an average of $ '+mark.average)
}

