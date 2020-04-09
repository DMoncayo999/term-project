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
let populateStaff = () => {

const requestURL = 'https://dmoncayo999.github.io/term-project/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then( function (jsonObject) {
   
    const guides = jsonObject['guides'];
    
    for (let i = 0; i < guides.length; i++ ) {
        let card = document.createElement('section');

        let image = document.createElement('img');   
        image.setAttribute('src', guides[i].photo);   
        image.setAttribute('alt', guides[i].name + ' ' + guides[i].lastname + ' - ' + guides[i].id );  
        card.appendChild(image);

        let h3 = document.createElement('h3');      
        h3.textContent = guides[i].name + ' ' + guides[i].lastname; 
        card.appendChild(h3); 

        let p = document.createElement('p');      
        p.innerHTML = '<span>Certifications: </span>' + guides[i].certifications + '<br/><span> Years of Experience:</span> ' 
        + guides[i].yearsexpert + ' <br/> <span> Email: </span> '
         + guides[i].email + '<br/><span> Biography:</span> ' + guides[i].biography;
        card.appendChild(p); 

        
        document.querySelector('div.staffcard').appendChild(card);
    }
  })
}
/*"guides": [
  {
    "name": "Peter",
    "lastname": "Parker",
    "certifcations": "Wilderness First Responder and CPR",
    "yearsexpert": 8,
    "email": "pparker12@hotmail.com",
    "id": 1,
    "biography": "Peter started his guiding career in college in Utah, and then committed to working close by after graduation. 
    He came up to Idaho and worked with us on the Salmon, and he certainly made the right choice. He is a key member of our crew.",
    "photo": { "src" : "images/guide1_200.png", "alt": "alternative" } 
  }
]*/
    