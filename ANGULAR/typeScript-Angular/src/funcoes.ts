// FUNCOES

function addNumber(x:number, y:number):number {
    return x + y;
}

let soma: number = addNumber(4,7);
console.log(soma);

function addHello(nome:string) {
    return `Hello ${nome}`;
}

console.log(addHello('marcus'));

// FUNCOES MULTI TYPES

function CallToPhone(phone: number | string): number | string {
    return phone;
}


console.log(CallToPhone(56455485488));

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// FUNCOES ASSINCRONAS

async function getDataBase(id: number): Promise<number | string> {
    return "felipe";
}