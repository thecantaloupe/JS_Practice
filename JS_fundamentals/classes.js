// Hard way for encapsulation

// function Person (name, age){
//     this.name = name
//     this.age = age
// }

// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// const Alex = new Person("Alex", 35)
// const Becky = new Person("Becky", 33)

// console.log(Alex,Becky)

class Animal {
    //define the constructor function to define object properties 
    constructor(config){
        //assign  the values passed to the constructor to the new object
        this.sound = config.sound,
        this.ears = config.ears,
        this.legs = config.legs
    }

    makeSound(){
        console.log(this.sound)
    }
}
class Pig extends Animal {

    //Define static property. Makes it property of prototype
    static count = 0;


    constructor(name){
        //super means parent constructor
        super({sound: "oink",ears: 2,legs: 4})
        this.name = name
        Pig.count++
    }
    rollInMud(){
        console.log(`${this.name} rolls in the mud`)
    }
    makeSound(){
        console.log(`${this.name} says ${this.sound}`)
    }

    //Method to return count of pigs
    static countPigs(){
        return Pig.count
    }
}

class Dog extends Animal {

    constructor(name){
        super({sound: "bark",ears: 2,legs: 4})
        this.name = name
    }
    liftsLeg(){
        console.log(`${this.name} STOP THAT RIGHT NOW`)
    }
    makeSound(){
        console.log(`${this.name} pauses and then says ${this.sound}`)
    }
}

class Cow extends Animal {

    constructor(name){
        super({sound: "moo",ears: 2,legs: 4})
        this.name = name
    }
    tip(){
        console.log(`${this.name} falls on the ground and seems really upset. You have made ground beef!`)
    }
    makeSound(){
        console.log(`${this.name} eats... \n eats... \n eats ... \n looks up \n and says  ${this.sound}`)
    }
}


// use polymorphism to use the class to create different things
const dog = new Dog("Lucky")
const pig = new Pig("Whilbur")
const cow = new Cow("Bessy")
const pig2 = new Pig("Pig2")
const pig3 = new Pig("Pig3")

// console.log(dog, pig, cow)
// console.log(dog instanceof Animal)
// console.log(Object.getPrototypeOf(dog))

//invoke static method
console.log(Pig.countPigs())
// dog.makeSound()
// pig.makeSound()
// cow.makeSound()
// pig.rollInMud()
// cow.tip()
// dog.liftsLeg()
//A Computer 

class Computer{
    constructor(OS, configuration, screen_size, bootTime){
        this.OS = OS
        this.configuration = configuration
        this.screen_size = screen_size
        this.bootTime = bootTime
    }
    bootcomp(){
        console.log(`${this.OS} on your ${this.configuration} is booting and it will take ${this.bootTime} seconds`)
    }
    
}

const comp1 = new Computer('Windows', 'Laptop', 16, 2)
const comp2 = new Computer('Linux', 'Laptop', 16, 1)
const comp3 = new Computer('MacOS', 'Laptop', 13, 1)
const comp4 = new Computer('Windox95', 'Mid Tier PC', 27, 10)

// console.log(comp4)
// comp4.bootcomp()