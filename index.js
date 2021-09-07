currentDate = moment().format('dddd, MMMM Do')
document.getElementById('currentDay').textContent=currentDate
let presentHour=moment().hour()
const stringInteger=(timeString)=>{
  switch (timeString) {
    case '8a': return 8
    case '9a': return 9
    case '10a': return 10
    case '11a': return 11
    case '12a': return 12
    case '1p': return 1
    case '2p': return 2
    case '3p': return 3
    case '4p': return 4
    case '5p': return 5
  }
}

for (let i=8; i<=17; i++) {
  let timeCounter="time"+i
  let timeString=document.getElementById(timeCounter)
  let timeInteger=stringInteger(timeString)
  if(presentHour==timeInteger){
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('present')
  }
  if(presentHour<timeInteger){
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('future')
  }
  if(presentHour>timeInteger){
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('past')
  }
}
  let planCounter="plan"+i
  document.getElementById(planCounter).textContent=workday[]
let schedule = {
  'plan8': '',
  'plan9': '',
  'plan10': '',
  'plan11': '',
  'plan12': '',
  'plan1': '',
  'plan2': '',
  'plan3': '',
  'plan4': '',
  'plan5': '',
}

let workday = JSON.parse(localStorage.getItem('workday')) || schedule



document.addEventListener('click', event=>{
  if (event.target.classList.conatins('saveBtn')){
    let note=event.target.previousElementSibling.children[0].value 
    let plan=event.target.previousElementSibling.children.id
    workday[plan]=note
    localStorage.setItem('workday',JSON.stringify(workday))
  }
})
