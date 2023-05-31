//davaleba 1

function fun(num1, num2){
    var operator = prompt("ოპერატორი")
    if(operator=="+"){
        console.log(num1 + num2)
    }else{
        if(operator=="-"){
        console.log(num1 - num2)
        }else{
        if(operator=="*"){
        console.log(num1 * num2)
        }else{
        if(operator=="/"){
        console.log(num1 / num2)
        }else{
            console.log("invalid operator")
        }
        }
        }
    }
}

fun(2,3)



//davaleba 2

function Circle(radius){
    this.radius = radius
  // area method
    this.area = function () {
        return Math.PI * this.radius * this.radius
    }
}
var c = new Circle(4);
console.log('Area =', c.area())



//davaleba 3

function Car(make, model, year){
    this.make=make
    this.model=model
    this.year=year
    this.showCarInfo=function(){
        return "მანქანის მარკა და მოდელი: " + this.make + " " + this.model + ',' + "გამოშვების წელი - " + this.year
    }
}
var car_1=new Car('mercedes','amg', 2010)
var car_2=new Car('BMW', 'M5', 2014)

console.log( car_1.showCarInfo())
console.log(car_2.showCarInfo())