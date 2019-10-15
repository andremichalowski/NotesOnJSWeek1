// To help us use arrays with real world problems we are going to simulate a used car dealer that has 50 cars in their inventory.

// The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.

let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
    { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
    { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
    { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  ];
  
  // Example 1 for loop:
  
  // const arr = ['a', 'b', 'c', 'd'];
  // for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i]);
  // }
  // 'a' 'b' 'c' 'd'
  
  // Example 2 for loop:
  
  // const arr = [12, 13, 14, 15];
  // const evens = [];
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) { evens.push(arr[i]); }
  // }
  // console.log(evens);
  // [12, 14]
  
  
  //1. Reviewing loops and the examples given to you. 
  // Standard "for loop array functions" in this case follow the following patter:

        //A. Define the variable that you want to call (the function that you want to perform);
        //B. Use arrow function and and open parameter container unless you know what variable you need. 
                //??? what are the parameters that ALEX outlined... where is this in msn docs?
        //C. Create a secondary array to store the results of the "for-looped" functions that you place later.
        //D. Use "if" statements or create new variables (to be pushed to the mini-array) with methods on them.
        //E. Console log the result.
        //F. Call the variable.

  
  // ??? Ask help on all of these.
  //*******************************************************************************************************************************//
  // ==== Challenge 1 ====
  // The dealer can't recall the information for a car with an id of 33 on his lot. 
  //Help the dealer find out which car has an id of 33 by logging the car's year, make, and model in the console log provided to you below:
  // console.log(`Car 33 is a *car year goes here* *car make goes here* *car model goes here*`);
  // console.log(inventory[33]);
  
  //------------------------------------------------------------//
  // const searchId = (vehicleId) => {
  //   for (let i = 0; i < inventory.length; i++) {
  //     if (inventory[i].id === vehicleId) {
  //       console.log(`Car ${inventory[i].id} is a ${inventory[i]['car_year']} ${inventory[i]['car_make']} ${inventory[i]['car_model']}`)
  //     }
  //   }
  // }
  // searchId(33);
  //------------------------------------------------------------//
  
  
  //*******************************************************************************************************************************//
  // ==== Challenge 2 ====
  // The dealer needs the information on the last car in their inventory.  
  // What is the make and model of the last car in the inventory?  Log the make and model into the console.
  // let lastCar = 0;
  // console.log();
  
  // const lastCar = (vehicleId) => {
  //   for (let i = 0; i < inventory.length; i++) {
  //     if (inventory[i].length-1 === vehicleId) {
  //       console.log(`Car Make: ${inventory[i].car_make}, Car Model: ${inventory[i].car_model}`);
  //     }
  //   }
  // }
  
  // lastCar(50);
  
  //------------------------------------------------------------//
  const lastVechicle = () => {
    let inventoryLength = inventory.length;
    for (let i = 0; i < inventoryLength; i++) {
      let item = inventory[i];
  
      // Check if last iteration of the array
      if((i + 1) == (inventoryLength)) {
        console.log(`${item['car_make']} ${item['car_model']}`);
      }
    }
  
  }
  lastVechicle();
  //------------------------------------------------------------//
  
  //*******************************************************************************************************************************//
  // ==== Challenge 3 ====
  // The marketing team wants the car models listed alphabetically on the website. 
  // Sort all the car model names into alphabetical order and log the results in the console
  // let carModels = [];
  // let carModelsSorted = [];
  // console.log();
  
  //~/* Psuedo Code */~//
  // Create functional expression for "carModelsSorted"
  // Create a container
  // Create a loop
    // Create variable to sort
    // Statement  for alphabetically sort
    // Push to container
  // Console log container
  
  // const carModelsSorted = () => {
  //   carModels = [];           // MUST USE LET OR CONST
  //   for (let i = 0; i < inventory.length; i++) {
  //     let models = inventory[i];      // MODELS
  //     models.sort().push(carModels);
  //   }
  //   console.log(carModels);
  // }
  
  // carModelsSorted();
  
  //------------------------------------------------------------//
  const carModelsSorted = () => {
    //create new space "array" for sorted carModels
    let carModels = [];
    //loop i...
    for (let i=0; i < inventory.length; i++) {
      //create new new space to store generic values
      let models = inventory[i]['car_model'];
      //sort models and push to new new array;
      carModels.sort().push(models);
      }
      console.log(carModels);
  }
  
  carModelsSorted();
  //------------------------------------------------------------//
  
  //*******************************************************************************************************************************//
  // ==== Challenge 4 ====
  // The accounting team needs all the years from every car on the lot. 
  // Create a new array from the dealer data containing only the car years and log the result in the console.
  // let carYears = [];
  // console.log();
  
  // Create a functional expression for "carYears"
  // Create an array for carYears to push results to
  // Create a loop
  // Create another variable for inventory[i][years]
  // Push that variable to the array 
  // Console log the array
  // Console log the actual functional expression
  
  const carYearsList = () => {
    let carYears = [];
    for (let i = 0; i < inventory.length; i++) {
     let years = inventory[i][`car_year`];
     carYears.push(years);
    }
    console.log(carYears);
  }
  
  carYearsList();
  
  //*******************************************************************************************************************************//
  // ==== Challenge 5 ====
  // The car lot manager needs to find out how many cars are older than the year 2000. 
  // Using the carYears array you just created, find out how many cars were made before the year 2000 by populating the array oldCars 
  //and logging it's length.
  // let oldCars = [];
  // console.log();
  
  // Create a functional expression for "oldCarsLength"
  // Create oldCars array container
  // If statement: 1) If older (value less than) 2000 push to oldCars array
  // Get length of oldCars container
  // Console log oldCars array
  // Console log old Cars Length expression
  
  // const oldCarsLength = () => {
  //   let oldCars = [];
  //   for (let i = 0; i < inventory.length; i++) {
  //     if (caryears[i] < 2000) {
  //       let oldCars.push(caryears[i]);
  //       let length = oldCars.length;
  //     }
  //   }
  //   console.log(length);
  // }
  
  // oldCarsLength();
  
  //------------------------------------------------------------//
  const oldCarsLength = () => {
    let oldCars = [];
    for (let i = 0; i < inventory.length; i++){
      let years = inventory[i]['car_year'];
      if (years < 2000) {
        oldCars.push(years);
      }
    }
    console.log(oldCars.length);
  }
  
  oldCarsLength();
  //------------------------------------------------------------//
  // const oldCars = () => {
  //   let oldCars = [];
  //   for (let i = 0; i < inventory.years; i++){
  //     let years = carYearsList[i]; // ??? This is going to be a nesting issue so how should I do it without encountering that issue...?
  //     if (year < 2000) {
  //       oldCars.push(years);
  //     }
  //   }
  //   console.log(oldCars);
  // }
  
  // oldCars();
  
  
  
  
  //*******************************************************************************************************************************//
  // ==== Challenge 6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the inventory. 
  // Return an array that only contains BMW and Audi cars.  
  // Once you have populated the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
  // let BMWAndAudi = [];
  // console.log();
  
  // Functional expression BMWAndAudiFxn
  // Create array BMWAndAudi Array
  // Create for loop 
  // If statement that if inventory[i][`car_make`] equal bmw 
  // If statement that if inventory[i][`car_make`] equals audi
    // push bmw to bmwandaudi array
    // push audi to bmwandaudi array
  //console log bmwandaudi array
  //console log actual functional expression
  
  // const BMWAndAudiFxn = () => {
  //   let BMWAndAudi = [];
  //   for (let i = 0; i < inventory.length; i++) {
  //     // let audi = inventory[i][`car_make`] === [`Audi`];
  //     // let BMW = inventory[i][`car_make`] === [`BMW`]; // ??? Why can't I do this?
  //     let makes = inventory[i][`car_make`];
  //     if (makes === inventory[i][`car_make`][`Audi`] || makes === inventory[i][`car_make`][`BMW`]) {
  //       let BMWAndAudi.push(makes[i]);
  //     }
  //   }
  //   console.log(BMWAndAudi);
  // }
  
  
  //------------------------------------------------------------//
  const specificVehicles = () => {
    bmwAndAudi = [];
  
    for (let i = 0; i < inventory.length; i++) {
  
      if (inventory[i]['car_make'].toLowerCase() === 'audi' || inventory[i]['car_make'].toLowerCase() === 'bmw') {
        bmwAndAudi.push(inventory[i]);
      }
    }
    JSON.stringify(console.log(bmwAndAudi));
  }
  
  specificVehicles()
  //------------------------------------------------------------//