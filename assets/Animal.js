class Animal {

    constructor (name ){
        this.name = name ;
     
    }
    print(){
        console.log(`${this.name} is an animal`)
    }
}
class rabit extends Animal {
    constructor(name , speed){
        super(name);
        this._speed = speed;
        
    }

    get speed(){
        return this._speed;
    }
    print(){
        console.log(`${this.name} is an animale with speed ${this.speed}`)
    }
    run(){
        this.print();
        console.log(`${this.name} runs with speed ${this.speed} m/h`);
    }
}
let rabit = new Rabit("bondo2" , 20);
console.log(rabit._name)
console.log(rabit)
console.log(rabit.speed) 
rabit.run();