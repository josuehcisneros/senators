import{ senators } from '../data/senators.js'
console.log(senators)

// tag the HTML elements
const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#peopleHere')

// create an all people button
const btnAll = document.createElement('button')
btnAll.textContent = "All Senators"
btnAll.addEventListener('click', ()=> displayPeople(senators))

// create a female people button
const btnFemale = document.createElement('button')
btnFemale.textContent = "Females"
btnFemale.addEventListener('click', ()=>{
    const arrayFemale = senators.filter(person => person.gender === 'F')
    displayPeople(arrayFemale)
}) 

// create a male people button
const btnMale = document.createElement('button')
btnMale.textContent = "Males"
btnMale.addEventListener('click', ()=>{
    const arrayMale = senators.filter(person => person.gender === 'M')
    displayPeople(arrayMale)
}) 

// create a Republican button
const btnRepublican = document.createElement('button')
btnRepublican.textContent = "Republican"
btnRepublican.addEventListener('click', ()=>{
    const arrayRepublican = senators.filter(person => person.party === 'R')
    displayPeople(arrayRepublican)
}) 

// create a Democrat people button
const btnDemocrat = document.createElement('button')
btnDemocrat.textContent = "Democrat"
btnDemocrat.addEventListener('click', ()=>{
    const arrayDemocrat = senators.filter(person => person.party === 'D')
    displayPeople(arrayDemocrat)
}) 

//add buttons to page
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnRepublican)
myNavigation.appendChild(btnDemocrat)


function displayPeople (x) {
    myParent.textContent = ""
    x.forEach(person => {
        const myFigure = document.createElement('figure')
        const myImage = document.createElement('img')
       
        //console.log(person.url)
        const explodedArray = person.govtrack_id
       
        //console.log(explodedArray)
        const charNumber = explodedArray
        myImage.src=`https://www.govtrack.us/static/legislator-photos/${charNumber}-200px.jpeg`
        myImage.alt = person.first_name
        //myFigure.appendChild(myImage);
       
        // Create and set the title paragraph element
      let titleParagraph = document.createElement("p");
      titleParagraph.textContent = person.first_name + " " + person.last_name;
      myFigure.appendChild(titleParagraph);
  
        const myCaption = document.createElement('figcaption')
        myCaption.innerHTML = `Gender: ${person.gender}<br>Party: ${person.party}<br>Title: ${person.title}`;
       // myFigure.appendChild(myCaption);
  
      
        // assign gender class
        console.log(person.gender)
        switch (person.gender) {
            case "F":
                myFigure.className = "F"
                break;
            case "M":
                myFigure.className = "M"
                break;
                case "R":
                    myFigure.className = "R"
                    break;
                case "D":
                    myFigure.className = "D"
                    break;
        }
        
        //assemble the parts
        myFigure.appendChild(myImage)
        myFigure.appendChild(myCaption)
       
        //attach to html page
        myParent.appendChild(myFigure)
         
        // After creating the buttons
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';

// Append the buttons to the container
buttonContainer.appendChild(btnAll);
buttonContainer.appendChild(btnFemale);
buttonContainer.appendChild(btnMale);
buttonContainer.appendChild(btnRepublican);
buttonContainer.appendChild(btnDemocrat);


// Append the container to the navigation element
myNavigation.appendChild(buttonContainer);
function handleResize() {
    if (window.innerWidth < 1000) {
      buttonContainer.style.flexDirection = 'column';
      buttonContainer.style.alignItems = 'center';
    } else {
      buttonContainer.style.flexDirection = 'row';
      buttonContainer.style.justifyContent = 'center';
    }
  }
  

  window.addEventListener('resize', handleResize);
  
  
  handleResize();

    }

    )
} 

//call the function
displayPeople(senators);