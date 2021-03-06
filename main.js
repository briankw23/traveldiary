const printToDom = (domString, divID) => {
    document.getElementById(divID).innerHTML += domString;
};

let place = [
    {location:"New York, NY", image:"<img id='img' src='newyork.jpg'>",description:"This place is awesome!"},
    {location:"Chicago, IL",image:"<img id='img' src='chicago.jpg'>",description:"This place is awesome!"},
    {location:"Portland, Oregon",image:"<img id='img' src='portland.jpg'>",description:"This place is awesome!"},
    {location:"Banff, Alberta",image:"<img id='img' src='banff.jpg'>",description:"This place is awesome!"},
    {location:"Seattle, Washington",image:"<img id='img' src='seattle.jpg'>",description:"This place is awesome!"},
    {location:"Oakland, California",image:"<img id='img' src='oakland.jpg'>",description:"This place is awesome!"},
    {location:"Milan, Italy",image:"<img id='img' src='milan.jpg'>",description:"This place is awesome!"},
    {location:"Tokyo, Japan",image:"<img id='img' src='tokyo.jpg'>",description:"This place is awesome!"},
];

const placeStringBuilder = (array) => {
    let domString= "";
    for (let i = 0; i < array.length; i++) {
        domString += `<div id="card">`;
        domString += `<h2>${array[i].location}</h2>`;
        domString += `<div class="img">${array[i].image}</div>`;
        domString += `<p>${array[i].description}</p>`;
        domString += `<textarea name="" id="input" cols="30" rows="10"></textarea>`
        domString += `<br>` 
        domString += `<button class="post">Post</button>`;
        domString += `</div>`;
        console.log(domString);
}
printToDom(domString,"main");
};

const addAllEventListeners = () => {
    const allTheButtons = document.getElementsByClassName('post');

    for (let i = 0; i < allTheButtons.length; i++) {
        allTheButtons[i].addEventListener('click', postToDom);
    }
};

const postToDom = (e) => {
    const locationtarget= e.target.parentNode.childNodes[0].innerHTML;
    console.log(locationtarget);
    let posttarget= e.target.parentNode.childNodes[3].value;
    console.log(posttarget);
    const timestamp = new Date();
    diaString = "";
    diaString = `<div class="d-card">`;
    diaString += `<h3>${locationtarget}<h/3>`;
    diaString +=`<br>`;
    diaString += `<p>${posttarget}</p>`;
    diaString +=`<br>`;
    diaString += `<p>${timestamp.getMonth()+1}-${timestamp.getDate()}-${timestamp.getFullYear()}</p>`;
    diaString += `<p>${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}</p>`;
    diaString += `</div>`;
    console.log(diaString);
    printToDom(diaString,"diary");
    posttarget= e.target.parentNode.childNodes[3].value = "";
};

const startApplication = () =>{
placeStringBuilder(place);
addAllEventListeners();
};

startApplication();