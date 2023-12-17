function ElementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

const ul = document.querySelector(".spatii ul");
const numOfDivs = 19;

for(let i = 0; i < numOfDivs; i++){
    const myList = ElementFromHtml(`
    <li>
        <h1>strada x, numarul y</h1>
        <p>detalii ( mp, suprafata - utila, etc. )</p>
    </li>   
    `)

    ul.appendChild(myList);
}


