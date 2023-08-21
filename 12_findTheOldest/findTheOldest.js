function findTheOldest(array){
  const currentYear = new Date().getFullYear();
  const alive = array.filter((object) => !object.yearOfDeath);
  array.forEach((object) => {
    if (!object.yearOfDeath){
      object.yearOfDeath=currentYear;
    }
  });
  if (!alive===[]){
    alive.sort((a,b) => (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1 : 1);
    return alive[0];
  }
  else {
    array.sort((a,b) => (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1 : 1);
    return array[0];
  }
}

// Do not edit below this line
module.exports = findTheOldest;
