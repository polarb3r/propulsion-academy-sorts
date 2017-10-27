function mergeSort(L){
//split
var min = 0;
var max = L.length - 1;
start = Math.floor((max + min) / 2);
toTake = L.length-start;
var i = L.splice(start, toTake)

console.log("i = " + i);
console.log("L = " + L);

//sort
for(j=0; j<L.length; j++){
  var current = L[j];
  var index = j;
  while(L[index-1] > current && index > 0){
    L[index] = L[index - 1];
    index--;
  }
    L[index] = current;
  }

for(k=0; k<i.length; k++){
  var current = i[k];
  var index = k;
  while(i[index-1] > current && index > 0){
    i[index] = i[index - 1];
    index--;
  }
    i[index] = current;
  }

console.log("i = " + i);
console.log("L = " + L);

//merge
var final = [];
while (L>[] && i>[]){
  if(L[0]<i[0]){
    final += L.splice(0,1) + ",";
  } else if(L[0]>i[0]) {
    final += i.splice(0,1) + ",";
  }
}
final += L;
final += i;

console.log("final = " + final);

//return
return final;
}

let L = [6, 3, 8, 5, 17, 12, 13, 1, 79, 50, 2];
console.log(mergeSort(L));
