


const objMy = {name: 'Den', lName: 'Kol', age: 3000}


function addNumberProperty(obj, propName, propValue) {

    if (typeof propValue === "number") {

      obj[propName] = propValue;

    } else {

      console.log(`Property "${propName}" can't be added. Value must be a number.`);

    }

  }


  addNumberProperty(objMy, 'myNumber', 390903) //this code will add property with number value

  addNumberProperty(objMy, 'myAddress', 'Street') // should be failure 
