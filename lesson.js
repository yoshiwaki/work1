const button = document.getElementById('button')
button.addEventListener('click',function(){
const fizz = document.getElementById('fizz').value;
const buzz = document.getElementById('buzz').value;
const list = document.getElementById('list');


// document.getElementById("list").innerHTML = buzz;

function fizzbuzz(){
  for(i=1; i<=100; i++){
      if(i%fizz == 0){
        // const fizznum = document.getElementById("list") = i+"Fizz";
        const newList = document.createElement('li');
        const output = "Fizz"+ i +"";
        output.innerHTML;
        // document.getElementById("li").innerHTML = output;
        
        newList.appendChild(output);
        list.appendChild(newList);
        }
        
      
        
    

      
  }
}
fizzbuzz();

});
