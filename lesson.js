const button = document.getElementById('button')
button.addEventListener('click',function(){
const fizz = document.getElementById('fizz').value;
const buzz = document.getElementById('buzz').value;



// document.getElementById("list").innerHTML = buzz;

function fizzbuzz(){
  for(fizz; fizz<=100; fizz++){
      
      
document.getElementById("list").innerHTML = fizz;
  
  }
}
fizzbuzz();

});
