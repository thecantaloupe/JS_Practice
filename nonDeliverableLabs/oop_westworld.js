// console.log("test log")

// const hosts = {
//     name: "Sarge",
//     occupation: "Constable",
//     saySpecs: () => {
//         console.log(`My name is ${this.name}. My occupation is ${this.occupation}`)
//     }
// }

class BasicHost {
    constructor(name, occupation){
        this.name = name,
        this.occupation = occupation
    }

    saySpecs(){
        console.log(`My name is ${this.name}. My occupation is ${this.occupation}.`)
    }
    howcansheslap(otherperson){
        console.log(`${this.name} slaps ` + otherperson.name + `in the face!`)
    }
}

const host1 = new BasicHost("Rick", "minor Deputy")
const host2 = new BasicHost("Steve", "Bartender")
const host3 = new BasicHost("Linda", "Farmer's daughter")
const host4 = new BasicHost("Timmy", "Paper boy")

// host1.saySpecs()
// host2.saySpecs()
// host3.saySpecs()
// host4.saySpecs()

//transform names into first and last name
words = "Penni Priestly Eufemia Worthen Kenya Dollins Tania Chrysler Hildegarde Hagen Colby Cumbo Kathi Dimas Imogene Sapienza Vivian Hansford Carina Fuller Junie Horman German Crafton Kirstie Killeen Traci Pedigo Lauran Below Olevia Manners Carlita Pickert Logan Decola Ernesto Dan Debbra Herzog Taryn Cannata Moshe Dingman Tristan Nease Ashlyn Steller Amado Peralta Estell Barrette Hanna Willis Joycelyn Gayman Jarvis Macomber Rita Bonifacio"


splitwords = words.split(' ')
const names = []
for (let i=0; i<splitwords.length;i+=2){
    names.push(splitwords[i]+" "+splitwords[i++]);
}

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner", "Special constable", "Anaesthetist", "Park-keeper", "Butler", "Choreographer", "Blacksmith", "Chef", "Legal secretary", "Song writer", "Librarian", "Landscape gardener"
];


hostArray = []
const randomNum = () => Math.floor(Math.random() * 20)
console.log(randomNum())

const randomName = () => {
    return names[Math.floor(Math.random() * names.length)]
}
const randomOcc = () => {
    return occupations[Math.floor(Math.random() * occupations.length)]
}
console.log(randomName())


for(i = 1; i <= 100; i++){
    hostArray.push(new BasicHost(randomName(),randomOcc()))
}
for(i = 1; i < hostArray.length; i++){
    hostArray[i].empathy = randomNum()
    hostArray[i].loyalty = randomNum()
    hostArray[i].aggression = randomNum()
    hostArray[i].curiosity = randomNum()
    hostArray[i].skill = randomNum()
    hostArray[i].luck = randomNum()
}

hostArray[55].saySpecs()

//test adding key value
console.log(hostArray[22])

hostArray[22].howcansheslap(hostArray[21])