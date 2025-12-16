
// Dato un array di oggetti rappresentante un team di un’azienda, 
// creare una pagina dedicata in cui mostrare una card per ciascun componente.


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// seleziono la classe del container in cui andrò ad inserire le card
const contenitore = document.querySelector('.minicontainer');

// creo una variabile let vuota che metterò nel dom, in cui inserirò il container 
let output = "";

// creo un ciclo for per scorrere tra gli object
for (let i = 0; i < teamMembers.length; i++) {
  // creo una constante che equivale al singolo oggetto contenuto nell'array di oggetti
  const singleMember = teamMembers[i];
//  nell'output aggiungo il blocco delle card che voglio generare,
// rendo dinamiche le immagini e i dati da inserire nelle card, 
// cosi ad ogni ciclo di for prenderò dall'array gli oggetti in ordine,
  output += `
  <div class="col-4 mb-3">
<div class="card" style="width: 18rem;">
      <img src="./${singleMember.img}" class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">${singleMember.name}</p>
          <p class="card-text">${singleMember.role}</p>
          <p class="card-text">${singleMember.email}</p>
          </div>
      </div>
  </div>
  `
  }

// prendo il contenuto di output, lo inserisco in "contenitore" che verrà generato nel dom
contenitore.innerHTML = output