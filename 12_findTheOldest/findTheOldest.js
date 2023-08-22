function sortArrayGetOlder(array){
	array.sort((a,b) => (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1 : 1);
	return array[0];
}

function findTheOldest(array){
  const currentYear = new Date().getFullYear();
  const alive = array.filter((object) => !object.yearOfDeath);

  array.forEach((object) => {
    if (!object.yearOfDeath){
      object.yearOfDeath=currentYear;
    }
  });

  if (!alive===[]){
    return sortArrayGetOlder(alive);
  }
  else { 
    return sortArrayGetOlder(array);
  }
}

// Do not edit below this line
module.exports = findTheOldest;

// old code:

// function findTheOldest(array){
//   const currentYear = new Date().getFullYear();
//   const alive = array.filter((object) => !object.yearOfDeath);
//   array.forEach((object) => {
//     if (!object.yearOfDeath){
//       object.yearOfDeath=currentYear;
//     }
//   });
//   if (!alive===[]){
//     alive.sort(arrayOlderCalculation);
//     // arrayOlderCalculation
//     return alive[0];
//   }
//   else {
//     array.sort(arrayOlderCalculation);
//     return array[0];
//   }
// }

// function arrayOlderCalculation(a,b){return (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1 : 1}

// function arrayOlderCalculation(a,b){
// 	return (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1 : 1
// }

// // Do not edit below this line
// module.exports = findTheOldest;
