'use strict';

var input = document.getElementById('input');
var outputText = document.getElementById('output');

function output(){
  var name = document.getElementById('varname');
  var inputArray = [];
  var outputArray = [];
  inputArray = (input.value.split('\n'));
  inputArray.forEach(function(i, index){
    index = (index + 1) * 10;
    var line = '$' + name.value + index + ': '+ i + ';';
    outputArray.push(line);
  });
  outputText.value = outputArray.join('\n');
}

function copy(){
  outputText.select();
  document.execCommand('copy');
}