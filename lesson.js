const button = document.getElementById('button')
button.addEventListener('click',function(){
const fizz = document.getElementById('fizz').value;
const buzz = document.getElementById('buzz').value;



// document.getElementById("list").innerHTML = buzz;

function fizzbuzz(){
  for(i=1; i<=100; i++){
      if(i%fizz === 0){
        // const fizznum = document.getElementById("list") = i+"Fizz";
        const output = "Fizz"+ i +""
        document.getElementById("li").innerHTML = output;
        



      }
      

  
  }
}
fizzbuzz();

});
