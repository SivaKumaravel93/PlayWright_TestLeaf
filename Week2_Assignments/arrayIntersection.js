function intersection(arr1, arr2){
    let result = [];
for(let i=0; i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i] == arr2[j]){
            if(!result.includes(arr1[i])){
            result.push(arr1[i]);}
        }
    }
}
console.log(result);

}

let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];
intersection(arr1,arr2);