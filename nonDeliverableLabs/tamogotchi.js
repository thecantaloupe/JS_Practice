//make object
const state = "mood"
stateKey = ["isHungry", "wantsToPlay", "isHappy", "needsAttention"]
lifestageKey = ["Baby", "Child", "Teen", "Adult"]


// object to store info on food
const foods = [
    {
        type: "Whole Pizza",
        fill: 3,
        weight: 2,
    },
    {
        type: "Salad",
        fill: 1,
        weight: -1,
    },
    {
        type: "Fried Chicken",
        fill: 2,
        weight: 1,
        happiness: 1,
    }
]


const tamogatchi = {
    name: "Tomo",
    weight: 5,
    age: 3,
    birthday: "03Jun20",
    description: "This is desc",
    hungerLevel: 2,
    happinessLevel: 4,
    attentionLevel: 1,
    lifestage: lifestageKey[1],
    [state]: stateKey[1],
    eat: function(type){
        let food = foods.find(food => food.type === type)
        this.hungerLevel += food.fill
        this.happinessLevel += food.happiness || 0
        this.weight += food.weight
        if(!(this.hungerLevel <= 2)) this.mood = stateKey[0]
        if(!(this.hungerLevel > 2)) this.mood = stateKey[2]
        this.speak()
    },
    speak: function(){
        console.log("This is", this.name, "and I gotta tell you, I", this.mood)
    },
    play: function(){
        this.hungerLevel -= 1
        console.log("Thats right!")
        this.mood = stateKey[2]
        if(this.hungerLevel <= 2) this.mood = stateKey[0]
        this.speak()
    },
}

console.log(tamogatchi.hungerLevel)
tamogatchi.eat("Salad")
console.log("Hunger ", tamogatchi.hungerLevel)
console.log("Happiness ", tamogatchi.happinessLevel)
console.log("Weight: ", tamogatchi.weight)
console.log(tamogatchi.mood)
tamogatchi.play()
tamogatchi.play()
console.log("Hunger ", tamogatchi.hungerLevel)
console.log("Happiness ", tamogatchi.happinessLevel)
console.log("Weight: ", tamogatchi.weight)
console.log(tamogatchi.mood)
