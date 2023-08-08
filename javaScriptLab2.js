//shahad alshabani

characters = [
    {
      name: "Luke Skywalker",
      height: 1.77,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 1.6,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 1.8,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 2.22,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 1.06,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
//Find
const blueEyes = characters.find(function(element) {
    return element.eye_color === "blue";
})
const mass50 = characters.find(function(element) {
    return element.mass > 50;
})
//Filter
const height200 = characters.filter(function(currentValue, index, array) {
    return currentValue.height < 2.0 ;
})
const male = characters.filter(function(currentValue, index, array) {
    return currentValue.gender ==="male" ;
})
//Map
const mapNames = characters.map(function(currentValue) {  
    return currentValue.name;
  })
  const mapHeight = characters.map(function(currentValue) {  
    return currentValue.height;
  })

//Sort
  const sortMass = characters.sort(function(a,b) {  
    return parseFloat(a.mass) - parseFloat(b.mass);
});
const sortHeight = characters.sort(function(a,b) {  
    return parseFloat(b.height) - parseFloat(a.height);

})
//Every
const everyCharactersMass = characters.every(function(currentValue, index, array) {
    
    return currentValue.mass > 40 ;
    
})
const everyCharactersHeight = characters.every(function(currentValue, index, array) {
    
    return currentValue.height < 2.0;
    
})
//Some
const someCharactersBlueEyes= characters.some(function(currentValue, index, array) {
    
    return currentValue.eye_color === "blue" ;
    
})
const someCharactersTaller200= characters.some(function(currentValue, index, array) {
    
    return currentValue.height > 2.10 ;
    
})

console.log("=======Get first name that has blue eyes=======");
console.log(blueEyes.name);
console.log("=======Get first gender that is his mass is over 50=======");
console.log(mass50.gender);
console.log("======Get characters with height less than 200========");
console.log(height200);
console.log("=======Get all male characters=======");
console.log(male);
console.log("=======Get array of all names only=======");
console.log(mapNames);
console.log("======Get array of all heights only========");
console.log(mapHeight);
console.log("======Sort by mass (low to high)========");
console.log(sortMass);
console.log("======Sort by height (high to low)========");
console.log(sortHeight);
console.log("=======Does every character have mass more than 40?=======");
console.log(everyCharactersMass);
console.log("======Is every character shorter than 200?========");
console.log(everyCharactersHeight);
console.log("=======Is there at least one character with blue eyes?=======");
console.log(someCharactersBlueEyes);
console.log("======Is there at least one character taller than 210?========");
console.log(someCharactersTaller200);
