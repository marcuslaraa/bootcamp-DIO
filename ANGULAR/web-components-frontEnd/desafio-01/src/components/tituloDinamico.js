class TituloDinamico extends HTMLElement {
    constructor() {
        super();


        const shadow = this.attachShadow({mode:"open"});

        // base do componente 
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute('titulo');
        // Estilizar o componente
        const style = document.createElement('style');
        style.textContent = `
        h1 {
            color:red;
        }
        `

        // Enviar a shadow 
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico",TituloDinamico);
// No define sempre usei hifen para nomear o componente