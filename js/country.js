const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}

loadCountry();
const displayCountry = countries => {
    countries.forEach(country => {
        // console.log(country)
        const countryDiv = document.getElementById('container');
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <p>${country.region}</p>
        <button onclick="countryDetails('${country.name}')">Details</button>
        `;
        countryDiv.appendChild(div)
    })
};
const countryDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetals(data[0]));

        
}

const displayDetals = (country) => {
    const display = document.getElementById('details');
    display.innerHTML = '';
    display.innerHTML = `
        <h3>Country Details for ${country.name}</h3>
        <p>Population: ${country.population}</p>
        <p>Time Zone: ${country.timezones}</p>
        <img width = '200px' src="${country.flag}">;
    `;
}