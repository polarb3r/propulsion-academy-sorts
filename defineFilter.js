function myFilter(fn, arr){
  var filterValues = [];
  for(let i = 0; i<arr.length; i++){
    if(fn(arr[i]) === true){
      filterValues.push(arr[i]);
    }
  }
  return filterValues;
}
