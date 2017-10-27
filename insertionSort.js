//search through the array for shortest
//switch with position n = [0]
//start search from position n+1
//search through the array for shortest
//switch with position n+1
//start search at position n+1
//
// either increment the +1, or before restarting the loop increase n

function selectionSort(L){
  var smallest = Math.min.apply(null, L);
  var first = L.indexOf(smallest);
  var placeholder = L[first];
  L[first] = L[0];
  L[0] = placeholder;

  for (var i = 1; i < L.length; i++){
    for (var j = i+1; j < L.length; j++){
      var newSmallest = 0;
      if(L[j] < L[i]){
        newSmallest = L[j];
        L[j] = L[i];
        L[i] = newSmallest;
      } else {
        newSmallest = L[i];
      }
    }
  }
  return L;
}

//Laurent's Method:
// function selectionSort(L){
// for(i=0; i<L.length; i++){
//   var current = L[i];
//   var index = i;
//   while(L[index-1] > current && index > 0){
//     L[index] = L[index - 1];
//     index--;
//   }
//     L[index] = current;
//   }
//   return L;
// }

let L = [6, 3, 8, 5, 17, 12, 13, 1, 79, 50, 2];
console.log(selectionSort(L));
