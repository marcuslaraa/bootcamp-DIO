type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
}
printaObjetos({
    name:"Peter Parker",
    vulgo:"Homem - Aranha"
});