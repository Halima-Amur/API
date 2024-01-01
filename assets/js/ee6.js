class user {
    cnt = 0 ;
    constructor(name , address , age ){
        this.cnt+=1;
        this.name = name;
        this.address = address;
        this.age = age;
    }

    getinfo(){
        console.log(`hello ms ${this.name} \n from ${this.address} \n your age is ${this.age}`)
    }
}
let User = new user("Halima" , "Oman" , 27)
User.getinfo();