var carName = 'Ford'
var carYear = 2010
var personYear = 1990

function calculateAge(year) {
  var currentYear = 2018
  var result = currentYear - year
  return result
}

function checkAngLogAge(year) {
  if (carYear) { 
    if (calculateAge(year) < 10) {
      console.log('Возраст автомобиля меньше 10 лет')
    } else {
      console.log('Возраст автомобиля больше 10 лет')
    }
  } else {
    if (calculateAge(year) < 10) {
      console.log('Возраст человека меньше 10 лет')
    } else {
      console.log('Возраст человека больше 10 лет')
    }
  }
}

checkAngLogAge(carYear)
checkAngLogAge(personYear)