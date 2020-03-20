class Ninja {
    constructor(name,health,speed = 3,strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log("name : " + this.name)
    }

    showStats(){
        console.log(`My name is ${ this.name } ,strength : ${this.strength}  speed : ${this.speed}  health : ${this.health}`)
    }

    drinkSake(){
        this.health += 10
        console.log("drinking sake")
    }

}

class Sensei extends Ninja {
    constructor(name){
        super(name,200,10,10)
        this.wisdom = 10
    }

    speakWisdom(){
        super.drinkSake()
        console.log("give a wise message ")
    }
}


const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();



// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// parent Vehicle class
// class Vehicle {
//     constructor(manufacturer, model, color) {
//         this.manufacturer = manufacturer;
//         this.model = model;
//         this.color = color;
//         this.miles = 0;
//     }
//     drive() {
//         this.miles += 10;
//         console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
//     }
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child M5 class
// class M5 extends Vehicle {
//     constructor(color) {
//         super("BMW", "M5", color);
//     }
//     // simple function in the child class
//     childFunction() {
//         // by using super, we can call the parent method
//         const message = super.parentFunction();
//         console.log(message);
//     }
// }
// const m5 = new M5("Blue");
// m5.childFunction();

