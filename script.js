//1
let mark = {
  fullName: 'Mark Miller',
  mass: 80,
  height: 1.65,
  calcBMI() {     //2
    return (this.mass / this.height ** 2).toFixed(1);
  }
}

let john = {   //1 
  fullName: 'John Smith',
  mass: 100,
  height: 1.50,
  calcBMI() {   //2
    return (this.mass / this.height ** 2).toFixed(1);
  }
}
//3
if(john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.fullName}'s BMI ${john.calcBMI()} is higher than ${mark.fullName}'s ${mark.calcBMI()}!`);
} else if(john.calcBMI() < mark.calcBMI()){
  console.log(`${john.fullName}'s BMI ${john.calcBMI()} is lower than ${mark.fullName}'s ${mark.calcBMI()}!`);
} else {
  console.log(`${john.fullName}'s BMI ${john.calcBMI()} is equal ${mark.fullName}'s ${mark.calcBMI()}!`);
}
