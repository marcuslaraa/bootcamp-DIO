// interface (type x interface)


// type
type robot = {
   readonly id: number | string;
    name: string;
};

// readonly não deixa que alterações sejam feitas nas propreidades.



// Interface
interface robot2 {
   readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot =  {
    id: 20,
    name: "walle"
}

const bot2: robot2 =  {
    id: 20,
    name: "walle",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Olá eu sou o ${this.name}`; 
    }
}

const p = new Pessoa(2 , "marcus");
console.log(p.sayHello());
