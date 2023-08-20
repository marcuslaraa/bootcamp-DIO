// Todo componente é uma funcção que retorna códigos em javaScript, html e css.

class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        // shadow.innerHTML ='<h1>Anakin esteve aqui</h1>'
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componenteRoot = document.createElement('div');
        componenteRoot.setAttribute('class', 'card');
        
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class','cardleft');
        
        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute("autor") || "Anonymous");

        const link = document.createElement('a');
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("link-url");

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);

        const cardRigth = document.createElement('div');
        cardRigth.setAttribute('class', 'cardrigth');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute("photo") || "assets/default_foto.jpg"
        newsImage.alt = "Foto Darth Vader";

        cardRigth.appendChild(newsImage);

        componenteRoot.appendChild(cardLeft);
        componenteRoot.appendChild(cardRigth);


        return componenteRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }
        
        .card {
            width: 900px;
            border: 1px solid grey;
            margin-bottom: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            box-shadow: 9px 9px 27px 0px #000;
        }
        
        
        .cardleft {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .cardleft > span {
            font-weight: 400;
        }
        
        .cardleft > a {
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: #000;
            font-weight: bold;
        }
        
        .cardleft > p {
            color: gray;
        }

        .cardrigth {
            height: 180px;
        }
        
        .cardrigth > img {
            width: 30vw;
            height: 100%;
        }

        `

        return style;
    }
}

customElements.define('card-news', CardNews);