// COMO RODAR TYPESCRIPT

// type heroi = {
//     name: string;
//     vulgo: string;
// };

// // testando ts.config
// function printaObjetos(pessoa: heroi) {
//     console.log(pessoa);
// }
// printaObjetos({
//     name:"Peter Parker",
//     vulgo:"Homem - Aranha"
// });

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

// TIPOS DE DADOS (VARIAVEIS)

let ligado:boolean = false;
let nome:string ='marcus';
let idade:number = 30;
let altura:number = 1.90;

let nulo:null = null; 
// tipo null só recebe null

let indefinido:undefined = undefined;
// unico valor permitido  é undefined


// TIPOS ABRANGENTES
let qualquer: any = 'nome';
// recebe qualquer tipo de valor

let retorno:void;
// sem retorno...usado em funçoes sem retorno como procedimentos.

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// OBJETOS

// objeto - sem previsibilidade
let produto:object = {
    name:"marcus",
    cidade: "iperó",
    idade: 28
};

// nãao é uma boa pratica passar objetos dessa maneira 


// Objeto tipado - com previsilibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidade: number;
}

let meuProduto : ProdutoLoja = {
    nome:"Tenis",
    preco: 89.99,
    unidade: 5,
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------

// ARRAYS

let dados: string[] = ["Marcus", "Adriana","Carlos"];

let dados2: Array<string> = ["Marcus", "Ana"];

// Multi types Arrays

let infos:(string | number)[] = ["marcus", 30];

// arrays multi types aceitam diversos tipos de valores como, strings, numbers ou booleanos.

// TUPLA - São vetores de multi types - segue a ornde definida

let boleto:[string, number, number] = ["agua conta", 30, 50];

// metodos de arrays

let novoDado: string[] = dados.map((element)=> {
    return element + " OI";
})

console.log(novoDado);

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// TIPOS DE DATES

let aniversario: Date = new Date("2023-08-20");
console.log(aniversario.toString());