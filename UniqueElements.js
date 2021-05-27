function UniqueElements(arr1,arr2) {
var a1= arrays(arr1,true);
var a2= arrays(arr2,true);
var a=[], diff=[];

for(var i=0;i< a1.length;i++)
   a[a1[i]]=false;
  for(i=0;i< a2.length;i++)
  if(a[a2[i]]===true) { 
    delete a[a2[i]];
  }
  else a[a2[i]]=true;
  for(var k in a)
    diff.push(k);
  return diff;   
  }

var arrays = function(a, temp,r) {
  if(!r) {
    r = [];
  }
if (temp) {
  return r.concat.apply(r,a);
  }  
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            arrays(a[i],temp,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
};
console.log(UniqueElements([1, 2, 3], [100, 2, 1, 10]));