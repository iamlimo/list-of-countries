function getCountryByRegion(){
  let f = document.getElementById('filters');
  let strUser = f.options[f.selectedIndex].value;  
  let defaultUrl =  `https://restcountries.eu/rest/v2/region/${strUser}`

    
  


   fetch(defaultUrl)
   .then(response => response.json())
   .then(function(data){
       let html = '';
       data.forEach(country =>{
           let htmlSegment = `
               
               <div class="col col-md-3 mt-4">
               <div class="card" style="width:;">
     <img src="${country.flag}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${country.name}</h5>
      
                   <ul>
                       <li>Population: ${country.population}</li>
                       <li>Region: ${country.region}</li>
                       <li>Capital: ${country.capital}</li>
                   </ul>
     </div>
   </div>
               </div>
           `;
       html += htmlSegment;
   
       })
   
       let container = document.querySelector('.testy');
       container.innerHTML = html;
   }); 
   //end of fetch

}

getCountryByRegion()





function searchCountry(){
 let formInput = document.getElementById('searchInput').value;
 let capitalizeValue = formInput.charAt(0).toUpperCase() + formInput.slice(1)

  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(function(data){
    const avengers = data.filter(character => character.name == capitalizeValue);
    let html = "";
    avengers.forEach(newCoountry =>{
      let htmlSegment = `
               
      <div class="col-md-3 col-sm-6 col-xs-6 mt-4">
      <div class="card" style="width: 13rem;">
<img src="${newCoountry.flag}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${newCoountry.name}</h5>

          <ul>
              <li>Population: ${newCoountry.population}</li>
              <li>Region: ${newCoountry.region}</li>
              <li>Capital: ${newCoountry.capital}</li>
          </ul>
</div>
</div>
      </div>
  `;
html += htmlSegment;
    })

    let container = document.querySelector('.testy');
    container.innerHTML = html;
  })
  .err(err => console.log(err))
}



function addDarkmodeWidget() {

const options = {
bottom: '64px', // default: '32px'
right: 'unset', // default: '32px'
left: '32px', // default: 'unset'
time: '0.5s', // default: '0.3s'
mixColor: '#fff', // default: '#fff'
backgroundColor: '#fff',  // default: '#fff'
buttonColorDark: '#100f2c',  // default: '#100f2c'
buttonColorLight: '#fff', // default: '#fff'
saveInCookies: false, // default: true,
label: '🌓', // default: ''
autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
}


addDarkmodeWidget()