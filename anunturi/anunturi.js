
function ElementFromHtml(html){
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

GenerateList()
function GenerateList(){
const ul = document.querySelector(".lista-spatii ul");
fetch('slistasortate.xlsx')
  .then(response => response.blob())
  .then(blob => readXlsxFile(blob))
  .then((rows) => {
    for(let i = 1; i < rows.length; i++){
        
        const filter = rows[i][0];
        const strada = rows[i][1];
        const detaliiii = rows[i][4];
        const mp = rows[i][2];
        const imageURL = rows[i][6];

        if(filter != null){

        const myList = ElementFromHtml(`

        <li data-filter = "${filter}" class="spatiu-listItem" 
        style = " background-image: linear-gradient(180deg, rgba(20, 20, 20, 0) 50px, rgba(20, 20, 20, 1)), url(${imageURL});">
        
          <section>
            <div>
                <h1>${strada} <i class="fa-solid fa-location-dot"></i></h1>
            </div>

            <p>${detaliiii}</p>
            <p>${mp}MP</p>
          </section>

          <a href="">vizualizeaza</a>
        </li>   
        
        `)
    
        ul.appendChild(myList);
        }

    }
  })
}


/*
const ul = document.querySelector(".lista-spatii ul");
const numOfDivs = 10;

for(let i = 0; i < numOfDivs; i++){

    const filter = "mamaia";
    const imageURL = '../img/s/s2.jpg';
    const strada = 'XXX ';
    const numar = 'YYY ';
    const detaliiii = 'detalii legate de spatiu ( mp, suprafata - utila, etc)'

    const myList = ElementFromHtml(`

    <li data-filter = "${filter}" class="spatiu-listItem" 
        style = " background-image: linear-gradient(180deg, rgba(20, 20, 20, .25) 110px, rgba(20, 20, 20, 1)), url(${imageURL});">

          <section>
            <div>
                <h1>strada ${strada}, numarul ${numar} <i class="fa-solid fa-location-dot"></i></h1>
            </div>

            <p>${detaliiii}</p>
          </section>

          <a href="">vizualizeaza</a>
    </li>  
    `)

    ul.appendChild(myList);
}
*/



setTimeout(test, 1000)
function test(){
    const imgItem = document.querySelectorAll(".lista-spatii ul li");
    const liItem = document.querySelectorAll(".filtre p");

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
                img.style.display = "flex";
            }
        })

    }

    liItem[0].onclick = function(){

        liItem.forEach(li => {
            li.className = "";
        })

        liItem[0].className = "selected"
        imgItem.forEach(img => {
            img.style.display = "flex";
        })
    }
})
}


