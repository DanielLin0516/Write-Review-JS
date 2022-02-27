Array.prototype.myEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i],i)){
            return false
        };
    }
    return true;
}