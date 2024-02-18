
const spatiiRef = 'lista-spatii.xlsx';
const spatiiList = ".spatii";
const maxItems = 8;

function ElementFromHtml(html){
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

GenerateList()

function GenerateList(){
const ul = document.querySelector(spatiiList);
fetch(spatiiRef)
.then(response => response.blob())
.then(blob => readXlsxFile(blob))
.then((rows) => {

  for(let i = 1; i < maxItems + 1; i++){
      
      const filter = rows[i][0];
      const strada = rows[i][1];
      const detalii = rows[i][4];
      const mp = rows[i][2];
      const imageURL = rows[i][5];

      if(filter != null){
        const myList = ElementFromHtml(`
        <div style="background-image: 
              linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(${imageURL});">
          <h1><i class="fa-solid fa-location-dot"></i> ${strada}</h1>
          <h2>${detalii} | ${mp}mp</h2>
        </div> 
        `)
  
        ul.appendChild(myList);
      }

      //document.querySelector(".spatiiCount b").textContent = rows.length;
      document.querySelector(".spatiiCount2 b").textContent = rows.length - 1;
  }
})
}

function HomeBtn(){
  window.open("index.html", '_self');
}