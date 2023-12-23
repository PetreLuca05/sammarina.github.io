function ElementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

/*
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
*/


GenerateList()
function GenerateList(){
const ul = document.querySelector(".unu");
fetch('anunturi/slistasortate.xlsx')
  .then(response => response.blob())
  .then(blob => readXlsxFile(blob))
  .then((rows) => {
    for(let i = 1; i < 11; i++){

        const strada = rows[i][1];
        const detaliiii = rows[i][4];
        const mp = rows[i][2];
        const imageURL = rows[i][6];

        if(strada != null){
    
        const myList = ElementFromHtml(`

        <div style = " background-image: linear-gradient(180deg, rgba(20, 20, 20, .25) 50px, rgba(20, 20, 20, 1)), url(${imageURL});">
            <section>
                <h1>strada ${strada} <i class="fa-solid fa-location-dot"></i></h1>
            </section>

            <p>${detaliiii}</p>
            <p>${mp}</p>
        </div>  
        
        `)
    
        ul.appendChild(myList);
        }
    }
  })
}