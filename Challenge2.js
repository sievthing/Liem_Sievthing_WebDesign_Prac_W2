function challenge2(arr){
    let arr1=[];
    let j=0;
    for(let i=arr.length-1;i>=0;i--){
        arr1[j]=arr[i];
        j++;
    }
    return arr1;
}

console.log(challenge2([85, 90, 78, 92]));
