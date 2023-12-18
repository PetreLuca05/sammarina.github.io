function ElementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

const ul = document.querySelector(".lista-spatii ul");
const numOfDivs = 100;

for(let i = 0; i < numOfDivs; i++){
    const myList = ElementFromHtml(`
    <li>
        <section></section>

        <section>
            <h1>strada x, numarul y</h1>
            <p>detalii ( mp, suprafata - utila, etc. )</p>

            <a href="">vizualizeaza</a>
        </section>
    </li>   
    `)

    ul.appendChild(myList);
}


