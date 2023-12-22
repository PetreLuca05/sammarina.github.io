function ElementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

const ul = document.querySelector(".unu");
const numOfDivs = 9;

for(let i = 0; i < numOfDivs; i++){
    const myList = ElementFromHtml(`
    <div>

    <section>
        <h1>strada x numarul y <i class="fa-solid fa-location-dot"></i></h1>
    </section>

    <p>detalii ( mp, suprafata - utila, etc. )</p>

    </div>
    `)

    ul.appendChild(myList);
}


