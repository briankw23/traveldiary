const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;
};

let place = [
    {location:"New York, NY", image:"<img src='newyork.jpg'>",description:"This place is awesome!"},
    {location:"Chicago, IL",image:"<img src='chicago.jpg'>",description:"This place is awesome!"},
    {location:"Portland, Oregon",image:"<img src='portland.jpg'>",description:"This place is awesome!"},
    {location:"Banff, Alberta",image:"<img src='banff.jpg'>",description:"This place is awesome!"},
    {location:"Seattle, Washington",image:"<img src='seattle.jpg'>",description:"This place is awesome!"},
    {location:"Oakland, California",image:"<img src='oakland.jpg'>",description:"This place is awesome!"},
    {location:"Milan, Italy",image:"<img src='milan.jpg'>",description:"This place is awesome!"},
    {location:"Tokyo, Japan",image:"<img src='tokyo.jpg'>",description:"This place is awesome!"},
];

const placeStringBuilder = (array) => {
    let domString= "";
    for (let i = 0; i < array.length; i++) {
        domString += `<div id="card">`;
        domString += `<h2>${array[i].location}</h2>`;
        domString += `<div class="img">${array[i].image}</div>`;
        domString += `<p>${array[i].description}</p>`;
        domString += `<textarea name="" id="" cols="30" rows="10"></textarea><br>` 
        domString += `<button class="card-button">Post</button>`;
        domString += `</div>`;
        console.log(domString);
}
printToDom(domString,"main");
};

const addAllEventListeners = () => {
    const allTheButtons = document.getElementsByClassName('card-button');

    for (let i = 0; i < allTheButtons.length; i++) {
        allTheButtons[i].addEventListener('click', postToDom);
    }
};

const postToDom = (e) => {
    const nameOfStudent = e.target.parentNode.children[0];
    nameOfStudent.classList.add('green');
};

const startApplication = () =>{
placeStringBuilder(place);
addAllEventListeners();
};

startApplication();