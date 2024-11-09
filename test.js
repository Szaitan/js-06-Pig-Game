'use strict';

const mike = {
  name: 'Michał',
  birthYear: 1990,
  calcAge: function () {
    return 2024 - this.birthYear;
  },
};

console.log(mike.calcAge());

const matilda = {
  birthYear: 2017,
};

matilda.calcAge = mike.calcAge;

console.log(matilda.calcAge());
