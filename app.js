const btnEl = document.getElementById('btn');
const birthDate = document.getElementById('birthdate');
const resultEl = document.getElementById('result');


 function calculateAge()
 {
  const birthdateValue = birthDate.value;
  if (birthdateValue ===''){
    alert('Please provide your age details')
  }
  else {
    const age = getAge(birthdateValue);
    resultEl.innerText= `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
  
}

function getAge (birthdateValue){
  const currentDate = new Date ();
  const birthYear = new Date (birthdateValue);
  const age = currentDate.getFullYear()-birthYear.getFullYear();
  const month = currentDate.getMonth()-birthYear.getMonth();
  if (month< 0 ||
    (month === 0 && currentDate.getDate()< birthYear.getDate())
  ){
    age--;
  } 
  return age;
}

btnEl.addEventListener('click', calculateAge);