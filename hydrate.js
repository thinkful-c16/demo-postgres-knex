'use strict';

const people = [
  { id: 2, name: 'John Doe', age: 34, petName: 'Rex',      petType : 'dog' },
  { id: 2, name: 'John Doe', age: 34, petName: 'Spot',     petType : 'dog' },
  { id: 3, name: 'Mary Jane', age: 19, petName: 'Mittens', petType : 'kitten' },
  { id: 3, name: 'Mary Jane', age: 19, petName: 'Fluffy',  petType : 'cat' }
];

/* ========== HYDRATE ========== */

const hydrated = {};
people.forEach((person) => {

  if (!(person.id in hydrated)) {
    hydrated[person.id] = {
      name: person.name,
      age: person.age,
      pets: []
    };
  }

  hydrated[person.id].pets.push({
    name: person.petName,
    type: person.petType
  });

});

console.log(JSON.stringify(hydrated, null, 2));
