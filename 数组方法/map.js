function map(arr,callback){
    let result = [];
    for(let i = 0;i < arr.length; i++){
        result.push(callback(arr[i],i));
    }
    return result;
}