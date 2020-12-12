'use strict';

var input = document.getElementById('input');
var outputText = document.getElementById('output');
var varName = document.getElementById('varname');
var classname = document.getElementById('classname');
var outputNest = document.getElementById('outputnest');

var check = document.getElementById('classcheck');
var generateClass = document.getElementById('generateclass');
var outputClass = document.getElementById('outputclass');
check.addEventListener("change", function(){
  if(check.checked != true){
  generateClass.style.display = 'none';
  outputClass.style.display = 'none';
} else {
  generateClass.style.display = 'block';
  outputClass.style.display = 'flex';
}
})


function output(){
  var inputArray = [];
  var outputArray = [];
  inputArray = (input.value.split('\n'));
  inputArray.forEach(function(i, index){
    index = (index + 1) * 10;
    var line = '$' + varName.value + index + ': '+ i + ';';
    
    outputArray.push(line);
  });

  if(check.checked){
    var nest = `$lists: `+ inputArray +`;
@each $var in $lists {
  $key: index($lists, $var) * 10;
  .`+ classname.value +`#{$key}{
    background-color: $var;
  }
}`;
    outputNest.value = nest;;
  }

  outputText.value = outputArray.join('\n');
}

function copy(a){
  if(a == 'output'){
    outputText.select();
  } else if (a == 'nest'){
    outputNest.select()
  }
  
  document.execCommand('copy');
}