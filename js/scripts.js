window.onload = init;

function init() {
    // Create a callback array at the begining of each page
    callbacks.forEach( f => f() );
}

//toggle sandwiche menu
function toggleMenu () {    
    document.getElementById("primaryNav").classList.toggle("hide"); 
 }
 
//update day and time in webpage
 function updateCurrentDate() {
    let options = {
        weekday: "long"
        ,day: "numeric"
        ,month: "long"
        ,year: "numeric"
        ,hour: "numeric"
        ,minute: "numeric"
    };
    // return new Date();
    return new Date().toLocaleDateString("en-Us", options)
}

// GUIDES JSON FILE 
let populateTowns = () => {

const requestURL = 'guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then( function (jsonObject) {
   
    const prophets = jsonObject['prophets'];
    
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');      
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; 
        card.appendChild(h2); 
        let p = document.createElement('p');      
        p.innerHTML = 'Date of Birth: ' + prophets[i].birthdate + '<br/>Place of Birth: ' + prophets[i].birthplace;
        card.appendChild(p);                                             
        let image = document.createElement('img');   
        image.setAttribute('src', prophets[i].imageurl);   
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order );  
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
        
     
    }
  })