# Projects in JavaScript (Solution Code)

## Project 1 = Background Color Change mini Project 

``` javascript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

// console.log(buttons)

buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey';
    }if(e.target.id === 'white'){
      body.style.backgroundColor = 'white';
    }if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue';
    }if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow';
    }
    // if(e.target.id === 'purple'){
    //   body.style.backgroundColor = 'purple';
    // }
  });
});

```
## Project 2 = (BMI Calculator)

``` javascript

    const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height === '' || isNaN(height) || height < 0 ){
    result.innerHTML = `Please Enter Valid Value of height not ${height}`;
  }
  else if(weight === '' || isNaN(weight) || weight < 0 ){
    result.innerHTML = `Please Enter Valid Value of weight not ${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/1000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
})

```

## Project 3 = (Digital Clock)

``` javascript
const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```