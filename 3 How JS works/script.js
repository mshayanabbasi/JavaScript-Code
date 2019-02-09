/* Hoisting */
//functions
calculateAge(1990)
function calculateAge(year){
    console.log(2016 - year)
}

retirement(1965)
var retirement = function(year){
    console.log(65 - (2016 - year))
}
// // variables
console.log(age)
var age = 23

function foo(){
    console.log(age)
    var age = 65
    console.log(age)
}
foo()
console.log(age)

/* Scoping */


// First scoping example

var a = 'Hello'
first()
function first(){
    var b = 'Hi'
    second()
    function second(){
        var c = 'Hey'
        third()
    }
}
function third(){
    var d = 'John'
    console.log(a+d )
}
/* The this Keyword */
calculateAge(1985)
function calculateAge(year){
    console.log(2016-year)
    console.log(this)
}
var John = {
    name:'John',
    yearOfBirth:1990,
    calculateAge:function(){
        console.log(this)
        console.log(2016 - this.yearOfBirth)
        function innerFunction(){
            console.log(this)
        }
        innerFunction()
    }
}
John.calculateAge()

mike ={
    name:'Mike',
    yearOfBirth:1984
}
mike.calculateAge = John.calculateAge
mike.calculateAge()

