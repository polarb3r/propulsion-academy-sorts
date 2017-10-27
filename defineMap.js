function myMap(fn, arr){
  var elements = [];
  for(let i = 0; i<arr.length; i++){
    elements.push(fn(arr[i]));
  }
  return elements;
}
