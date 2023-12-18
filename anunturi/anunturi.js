
function ElementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

const ul = document.querySelector(".lista-spatii ul");
const numOfDivs = 100;

for(let i = 0; i < numOfDivs; i++){

    const filter = "mamaia";
    const imageURL = '../img/s/s2.jpg';
    const strada = 'XXX ';
    const numar = 'YYY ';
    const detaliiii = 'detalii legate de spatiu ( mp, suprafata - utila, etc)'

    const myList = ElementFromHtml(`
    <li data-filter = "${filter}">
        <section style="background-image: url(${imageURL});"></section>

        <section>
            <h1>strada ${strada}, numarul ${numar}</h1>
            <p>${detaliiii}</p>

            <a href="">vizualizeaza</a>
        </section>
    </li>   
    `)

    ul.appendChild(myList);
}

const liItem = document.querySelectorAll(".filtre p");
const imgItem = document.querySelectorAll(".lista-spatii ul li");

liItem.forEach(li => {
    li.onclick = function() {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "selected";

        const value= li.textContent;
        imgItem.forEach(img => {
            img.style.display = "none";
            //console.log(value);
    
            if(img.getAttribute("data-filter") == value.toLocaleLowerCase()){
                img.style.display = "block";
            }
        })
    }
})

//let workbook = XLSX.read(await (await fetch("spatii.xlsx")).arrayBuffer());
//console.log(workbook);