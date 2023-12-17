function ElementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

const myList = ElementFromHtml(`
<div>
<section>
  <h1>strada x numarul y</h1> <i class="fa-solid fa-location-dot"></i>
</section>

<h2>detalii ( mp, suprafata - utila, etc. )</h2>
</div>
`)

//const ul = document.querySelector(".unu");
//ul.appendChild(myList);

const ul = document.querySelector(".unu");
const numOfDivs = 9;

for(let i = 0; i < numOfDivs; i++){
    const myList = ElementFromHtml(`
    <div>

    <section>
        <h1>strada x numarul y</h1> <i class="fa-solid fa-location-dot"></i>
    </section>

    <h2>detalii ( mp, suprafata - utila, etc. )</h2>

    </div>
    `)

    ul.appendChild(myList);
}


