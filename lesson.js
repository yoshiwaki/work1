const button = document.getElementById('button')
button.addEventListener('click',function(){
const fizz = document.getElementById('fizz').value;
const buzz = document.getElementById('buzz').value;
// const list = document.getElementById('list');


// document.getElementById("list").innerHTML = buzz;

function fizzbuzz(){
  for(let i=1; i<=100; i++){
      if(i%fizz*buzz === 0){
        
   
       const list = document.getElementById('list');
        // const newList = document.createElement('li');
        
        // const output = 
        // document.innerHTML = output;
        const list = document.getElementById('list');
        const lis = document.createElement('li');
        lis.innerHTML = ("FizzBuzz"+ i +""<br>"");
        
       

        // const newList= document.createElement("li");
        
        // output.innerHTML;
        // document.getElementById("li").innerHTML = output;
        
        // output.value = "";


        // list.appendChild(newList);
        
        }
        list.appendChild(lis);
        
      
        
    

      
  }
}
fizzbuzz();

});